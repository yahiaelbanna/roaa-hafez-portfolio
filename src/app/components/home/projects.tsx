import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";

export default function Projects() {
    return (
        <>
            <h2 className="text-9xl text-center mb-20 w-full">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-15 w-full">
                <div>
                    <div className="project-photo">
                        <Image src={'/photo/projects/qatra.jpeg'} width={400} height={300} alt="qatra project" className="object-cover"/>
                    </div>
                    <div className="font-[king] text-center">
                        <h3 className="text-8xl flex gap-5 items-center justify-center">
                            Qatrah Hayah
                            <span className="aspect-square w-11 flex justify-center items-center rounded-full border-2 top-1 relative opacity-70"><HugeiconsIcon icon={ArrowUpRight01Icon} size={40}/></span>
                        </h3>
                        <p className="text-4xl/9">
                            This project wasn’t just about designing an app; it was about understanding people’s needs and creating something that could truly help
                        </p>
                    </div>
                </div>
                <div>
                    <div className="project-photo">
                        <Image src={'/photo/projects/qatra.jpeg'} width={400} height={300} alt="qatra project" className="object-cover"/>
                    </div>
                    <div className="font-[king] text-center">
                        <h3 className="text-8xl flex gap-5 items-center justify-center">
                            Qatrah Hayah
                            <span className="aspect-square w-11 flex justify-center items-center rounded-full border-2 top-1 relative opacity-70"><HugeiconsIcon icon={ArrowUpRight01Icon} size={40}/></span>
                        </h3>
                        <p className="text-4xl/9">
                            This project wasn’t just about designing an app; it was about understanding people’s needs and creating something that could truly help
                        </p>
                    </div>
                </div>
                <div>
                    <div className="project-photo">
                        <Image src={'/photo/projects/qatra.jpeg'} width={400} height={300} alt="qatra project" className="object-cover"/>
                    </div>
                    <div className="font-[king] text-center">
                        <h3 className="text-8xl flex gap-5 items-center justify-center">
                            Qatrah Hayah
                            <span className="aspect-square w-11 flex justify-center items-center rounded-full border-2 top-1 relative opacity-70"><HugeiconsIcon icon={ArrowUpRight01Icon} size={40}/></span>
                        </h3>
                        <p className="text-4xl/9">
                            This project wasn’t just about designing an app; it was about understanding people’s needs and creating something that could truly help
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}