import Gallery from "../components/gallery"

export default function Favorites() {
    const images= [
        "/god.jpg",
        "/travel.jpg",
        "/sea.jpg",
        "/mountain.jpg",
        "/teach.jpg",
        "/adventure.jpg",
        "/tennis.jpg",
        "/board.jpg",
    ];

    return (
        <div className="flex h-full flex-col justify-center items-center m-40">
            <h1 className="text-3xl mb-5 font-bold">My Favorites</h1>
            <Gallery images={images} />
        </div>
    );
}
