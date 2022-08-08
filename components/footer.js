import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by Jina
                
            </a>
        </footer>
    );
}