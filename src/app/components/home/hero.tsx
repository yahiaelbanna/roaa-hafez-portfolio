import Image from "next/image";

export default function Hero() {
    return (
        <>

            <div className="w-full relative pt-26 lg:p-0 overflow-hidden lg:overflow-visible">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center min-h-screen gap-16 lg:gap-0">
                    <div className="order-2 lg:order-1 flex flex-col justify-center gap-10 items-center lg:items-start pb-16">
                        <h2 className="text-8xl md:text-9xl text-(--main-text)">Roaa Hafez</h2>
                        <p className="text-5xl font-[king] text-center lg:text-start">An Egyptian girl who loves the sky, simplicity, and creativity.</p>
                        <a className="vintage-btn lg:scale-none scale-[0.8]" href="#contact">
                            <span className="border-mask"></span>
                            <span className="decoration"></span>
                            <span className="label">Contact me</span>
                        </a>
                    </div>
                    <div className="order-1 lg:order-2 flex lg:justify-end items-center justify-center">
                        <div className="hero-image-container">
                            <div className="hero-image">
                                <Image src={'/photo/roaa-hafez.jpg'} width={500} height={500} alt="Roaa Hafez" className="object-cover h-full"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}