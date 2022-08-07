import Image from 'next/image'


export default function Gallery({ images }) {
    const imgEx = [
        "God",
        "Travel",
        "Sea",
        "Nature",
        "Sharing",
        "Activity",
        "Tennis",
        "Long Board",
    ];

    return (
        <div className="grid grid-cols-2 gap-1">
            {images && images.map((imageUrl, index) => (
                    <div key={index} className="relative transition ease-in duration-300 transform">
                        <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
                            <p className="absolute inset-0 bg-black opacity-50"></p>
                            <p className="mx-auto text-white z-10 self-center tracking-widest text-sm">
                                {imgEx[index]}</p>
                        </div>
                        <Image src={imageUrl} alt="" width={300} height={300} />
                    </div>
                ))}
        </div>
    );


}

