import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Behance01Icon, Linkedin02Icon, PinterestIcon } from "@hugeicons/core-free-icons";
const Reachme = [
    {
        icon: Linkedin02Icon,
        url: 'https://www.linkedin.com/in/roaa-hafez-259403376/',
        title: 'Linkedin'
    },
    {
        icon: Behance01Icon,
        url: 'https://www.behance.net/roaahafez',
        title: 'Behance'
    },
    {
        icon: PinterestIcon,
        url: 'https://pin.it/5GP46ts0c',
        title: 'Pinterest'
    },
];
export default function About() {
    return (
        <>
            <div className="relative bg-(--main-white) w-full z-10 about-section lg:pt-26 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 divided xl:px-30 pt-24 lg:pt-0 gap-20 lg:gap-0 overflow-x-hidden overflow-y-visible md:overflow-x-visible items-end">
                    <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                        <div className="about-image relative w-fit">
                            <Image src={'/photo/roaa.png'} width={700} height={700} alt="Roaa Hafez" className="object-contain h-[70vh]"/>
                        </div>
                    </div>
                    <div className="order-1s lg:order-2 text-center lg:text-start h-full flex flex-col justify-center pb-12">
                        <h3 className="text-8xl md:text-9xl mb-8 md:-translate-x-8">Who is Roaa ?</h3>
                        {/* <p className="text-5xl font-[king] mb-5">An Egyptian Ui Ux Designer passiont in the modern and smiple designs. stuides at faculty of computers and informatics since 2023.</p> */}
                        <p className="text-4xl md:text-5xl font-[king] mb-5 px-5 md:px-0">An Egyptian UI/UX designer passionate about modern and simple design. She has been studying at the Faculty of Computers and Informatics since 2023, continuously developing her skills and exploring new creative approaches to user-centered design.</p>
                        <ul className="flex gap-3 justify-center lg:justify-start">
                            {Reachme.map((item, i) => (
                                <li key={i}>
                                    <a href={item.url} target="_blank" rel="me" aria-label={`Visit my ${item.title} profile`} className="rounded-lg p-2 border border-(--main-text) w-fit block hover:bg-(--main-text) hover:text-(--main-white) transition">
                                        <HugeiconsIcon icon={item.icon} size={30}/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}