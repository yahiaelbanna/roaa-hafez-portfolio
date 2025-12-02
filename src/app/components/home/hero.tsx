import Image from "next/image";

export default function Hero() {
    return (
        <>

            <div className="w-full relative pt-26 md:p-0 overflow-hidden md:overflow-visible">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center min-h-screen gap-16 md:gap-0">
                    <div className="order-2 md:order-1 flex flex-col justify-center gap-10 items-center md:items-start pb-16">
                        <h2 className="text-8xl md:text-9xl text-(--main-text)">Roaa Hafez</h2>
                        <p className="text-5xl font-[king] text-center md:text-start">An Egyptian girl who loves the sky, simplicity, and creativity.</p>
                        <div className="vintage-btn">
                            <span className="border-mask"></span>
                            <span className="decoration"></span>
                            <span className="label">Contact me</span>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 flex md:justify-end items-center justify-center">
                        <div className="hero-image-container">
                            <div className="hero-image">
                                <Image src={'/photo/roaa.jpeg'} width={500} height={500} alt="Roaa Hafez" className="object-cover h-full"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}