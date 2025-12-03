import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Behance01Icon, Linkedin02Icon } from "@hugeicons/core-free-icons";
export default function About() {
    return (
        <>
            <div className="relative bg-(--main-white) w-full z-10 about-section top-5">
                <div className="grid grid-cols-1 md:grid-cols-2 divided px-5 md:px-30 items-center pt-24 md:pt-0 gap-20 md:gap-0">
                    <div className="order-2 md:order-1">
                        <div className="about-image relative w-fit">
                            <Image src={'/photo/roaa.png'} width={700} height={700} alt="Roaa Hafez" className="object-contain h-[70vh]"/>
                        </div>
                    </div>
                    <div className="order-1s md:order-2 text-center md:text-start">
                        <h2 className="text-8xl md:text-9xl mb-14 -translate-x-8">Who is Roaa ?</h2>
                        {/* <p className="text-5xl font-[king] mb-5">An Egyptian Ui Ux Designer passiont in the modern and smiple designs. stuides at faculty of computers and informatics since 2023.</p> */}
                        <p className="text-5xl font-[king] mb-5">An Egyptian UI/UX designer passionate about modern and simple design. She has been studying at the Faculty of Computers and Informatics since 2023, continuously developing her skills and exploring new creative approaches to user-centered design.</p>
                        <ul className="flex gap-3 justify-center md:justify-start">
                            <li>
                                <a href="#" className="rounded-lg p-2 border border-(--main-text) w-fit block">
                                    <HugeiconsIcon icon={Linkedin02Icon} size={35}/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="rounded-lg p-2 border border-(--main-text) w-fit block">
                                    <HugeiconsIcon icon={Behance01Icon} size={35}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}