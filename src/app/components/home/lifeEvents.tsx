import Image from "next/image";

export default function LifeEvents() {
    return (
        <>
        <div className="relative bg-(--main-white) w-full z-10 about-section news top-5 mb-40">
            {/* <div className="my-30"> */}
            <h2 className="text-9xl">My News</h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="event-photo">
                        <Image src={'/photo/events/idsc.jpeg'} width={300} height={300} alt="IDSC Internship" className="object-contain"/>
                    </div>
                    <div>
                        <h5>2025</h5>
                        <h3>IDSC Internship</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, ut. Quia, sapiente, vero debitis nemo eius voluptatum aliquam quibusdam, illo quam fugit nam dolores officia voluptate explicabo velit sunt hic.</p>
                    </div>
                </div>
            </div>
        </>
    );
}