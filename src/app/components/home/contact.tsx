import { Behance01Icon, CallIcon, Linkedin02Icon, Mail01Icon, PinterestIcon, WhatsappIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

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
const Messageme = [
    {
        icon: WhatsappIcon,
        url: 'http://wa.me/+201286299920',
        title: 'Whatsapp'
    },
    {
        icon: Mail01Icon,
        url: 'mailto:roaahafez210@gmail.com',
        title: 'Mail'
    },
];

export default function Contact() {
    return (
        <>
            {/* <div className="divide"></div> */}
            {/* <section className="mt-15" id="contact"> */}
            <div  className="grid grid-cols-1 mt-10 md:grid-cols-2 w-full lg:px-30 ">
                <div>
                    <h2 className="text-8xl">Follow me</h2>
                    <ul className="flex gap-3 mt-10 ps-5 flex-wrap text-3xl">
                                {Reachme.map((item, i) => (
                                    <li key={i}>
                                        <a href={item.url} target="_blank" rel="me" aria-label={`Visit my ${item.title} profile`} className="rounded-lg p-2 border border-(--main-text) w-fit block hover:bg-(--main-text) hover:text-(--main-white) transition">
                                            <HugeiconsIcon icon={item.icon} size={30}/>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                </div>
                <div>
                    <h2 className="text-8xl">Message me</h2>
                    <ul className="flex gap-3 mt-10 ps-5 flex-wrap text-3xl">
                                {Messageme.map((item, i) => (
                                    <li key={i}>
                                        <a href={item.url} target="_blank" rel="me" aria-label={`Reach me via ${item.title}`} className="rounded-lg p-2 border border-(--main-text) w-fit block hover:bg-(--main-text) hover:text-(--main-white) transition">
                                            <HugeiconsIcon icon={item.icon} size={30}/>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                </div>
            </div>
            <div className="border-t border-t-(--main-text) mt-10 text-center py-2 text-4xl uppercase font-[king]">Code & Crafted by <a href="https://yahiaelbanna.vercel.app/" target="_blank" className="underline">Yahia Elbanna</a></div>
            {/* </section> */}
        </>
    );
}