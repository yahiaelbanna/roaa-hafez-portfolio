import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";

const projects = [
    {
        title: 'Qatrah Hayah',
        description: 'This project wasn’t just about designing an app; it was about understanding people’s needs and creating something that could truly help',
        img: '/photo/projects/qatra.jpeg',
        link:'https://www.behance.net/gallery/237161063/Donate-Blood-(-)'
    }
];
export default function Projects() {
    return (
        <>
            <h2 className="text-8xl md:text-9xl text-center mb-5 lg:mb-10 w-full">My Projects</h2>
            <div className="w-full">
                <div className="divide mb-5"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 w-full">
                {projects.map((project, i) => (
                    <a href={project.link} key={i} className="group">
                        <div className="project-photo">
                            <Image src={project.img} width={400} height={300} alt="qatra project" className="object-cover"/>
                        </div>
                        <div className="font-[king] text-center">
                            <h3 className="text-7xl md:text-8xl flex gap-5 items-center justify-center">
                                {project.title}
                                <span className="aspect-square w-11 flex justify-center items-center rounded-full border-2 top-1 relative opacity-0 transform translate-y-1/2 group-hover:translate-y-0 group-hover:opacity-70 transition duration-500"><HugeiconsIcon icon={ArrowUpRight01Icon} size={40}/></span>
                            </h3>
                            <p className="text-4xl/9">
                                {project.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
}