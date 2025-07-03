# Mini Microblog

## プロジェクト概要

このプロジェクトは、**Next.js（Pages Router）を使って構築したミニマイクロブログアプリ**です。  
シンプルな投稿表示機能を通じて、**静的サイト生成（SSG）や動的ルーティング、Reactの基礎構造**を実践的に学ぶことを目的としています。

## 使用技術

- Next.js（Pages Router）
- React
- JavaScript
- CSS Modules
- Vercel（デプロイ）

## 主な機能

- 投稿の一覧表示
- 投稿詳細ページ（動的ルーティング）
- getStaticPaths + getStaticProps を使った静的生成（SSG）

## 工夫した点

- pages ディレクトリを用いた構成で、ルーティングの基本理解を深めた  
- getStaticProps / getStaticPaths を用いてビルド時に投稿を静的生成  
- 投稿データはローカルファイルで管理し、MarkDownファイルに書いて表示

## デザイン

### トップページ
![投稿一覧ページ](/design01.png)

### 投稿詳細ページ
![投稿詳細ページ](/design02.png)

## 備考

このアプリは学習用として作成しました。
