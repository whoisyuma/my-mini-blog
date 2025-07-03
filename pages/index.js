import Head from "next/head";
import Image from "next/image";
import { getPostsData } from "@/lib/posts"
import Link from "next/link";
import Layout, { siteTitle } from "@/components/Layout";
import utilStyles from "../styles/utils.module.css"
import homeStyles from "../styles/Home.module.css"

export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData,
    }
  }
}

  export default function Home({ allPostsData }) {
  return (
    <div>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className={utilStyles.headingIntro}>
          <p>
            現在、Web開発スキルを磨きながら、将来的にグローバルに活躍できるエンジニアを目指しています。
          </p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}` }>
          <h2>📝My Microblog</h2>

          <div className={homeStyles.grid}>
            {allPostsData.map(({id, title, date, thumbnail}) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img src={`${thumbnail}`} className={homeStyles.thumbnailImage}/>
                </Link>

                <Link href={`/posts/${id}`} className={utilStyles.boldText}>
                  {title}
                </Link>

                <br />
                <small className={utilStyles.lightText}>{date}</small>
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </div>
  )
}