
// import Image from "next/image";

export default function Hero() {
    return (
        <>

            <div className="w-full relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center min-h-screen">
                        <div className="flex flex-col justify-center gap-10">
                            <h2 className="text-9xl text-(--main-text)">Roaa Hafez</h2>
                            <p className="text-5xl font-[king]">An Egyptian girl who loves the creative beauty, Love the sky and the simplicity.</p>
                            <div className="vintage-btn">
                                <span className="border-mask"></span>
                                <span className="decoration"></span>
                                <span className="label">Contact me</span>
                            </div>

                        </div>
                </div>
            </div>
        </>
    );
}