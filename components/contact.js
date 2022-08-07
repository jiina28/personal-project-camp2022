import Link from 'next/link'

export default function Contact() {
    return (
        <div className="flex h-full flex-col justify-center items-center m-40">
            <h1 className="text-3xl mb-5 font-bold">Contact</h1>
            <p className="text-lg my-2">
                <Link href="mailto:21800753@handong.ac.kr" >💌 Send a Mail 💌</Link></p>
            <p className="text-lg my-2">
                <Link href='https://github.com/jiina28' passHref>👾 Github 👾</Link></p>
            <p className="text-lg my-2">
                <Link href='https://blog.naver.com/jiina_28' passHref>🧚🏻‍♀️ Daily Blog 🧚🏻‍♀️</Link></p>
            <p className="text-lg my-2">
                <Link href='https://jinapple.tistory.com/' passHref>👩🏻‍💻 Engineering Blog 👩🏻‍💻</Link></p>
            <p className="text-lg my-2">📞 010-6377-6054</p>
        </div>
    );
}
