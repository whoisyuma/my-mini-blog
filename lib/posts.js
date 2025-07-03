import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";


// postsフォルダの場所を指定
const postsDirectory = path.join(process.cwd(), 'posts');

// 投稿データを取得して並び変える関数
export function getPostsData() {
    // postsフォルダにあるファイル名を取得
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {

        // 拡張子mdを取り除いたファイル名が投稿のIDとする
        const id = fileName.replace(/\.md$/, "");

        // ファイルの中身を読み込む
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // gray-matterでメタデータと本文を読み込む
        const matterResult = matter(fileContents);

        // idとデータを返す
        return {
            id,
            ...matterResult.data,
        }
    })

    // 日付で新しい順に並べ替えて返す
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

// 個別ページ用のデータを取得
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: { id: fileName.replace(/\.md$/, "")}
        }
    })
}

// idに基づいてブログ投稿データを返す
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContent);

    const blogContent = await remark().use(html).process(matterResult.content);

    const blogContentHTML = blogContent.toString();

    return {
        id,
        blogContentHTML,
        ...matterResult.data,
    };
}