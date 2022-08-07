import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Fav from '../components/favorites'
import Contact from '../components/contact'
import Info from '../components/info'


export default function Home() {
    return (
        <div>
            <section id="home">
                <Head>
                    <title>JJin World</title>
                    <meta name="description" content="JinaChoi's Portfolio" />
                </Head>

                <main className={styles.main}>
                    <span>
                        <Image
                            src="/profile.jpg"
                            alt="profile"
                            className={styles.profile}
                            width={300}
                            height={300}
                        />
                    </span>


                    <h1 className='m-20 text-6xl text-center'>
                        Welcome to <a className='text-pink-300 no-underline hover:underline'>JJin World!</a>
                    </h1>
                </main>
            </section>

            <section id="info">
                <Info />
            </section>

            <section id="favorite">
                <Fav />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}