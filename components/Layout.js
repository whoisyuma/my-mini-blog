import Head from "next/head";
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"

const name = "Yuma Sato";

export const siteTitle ="My-microblog"

function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <img src="/IMG_2531.jpg" className={styles.headerHomeImage}/>
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </header>

            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;