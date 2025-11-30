"use client";
import { useEffect,useState } from "react";

export default function Nav() {
const Links = [
    {
        title: 'Home',
        url: '#home'
    },
    {
        title: 'About',
        url: '#about'
    },
    {
        title: 'Projects',
        url: '#projects'
    },
    {
        title: 'Contact',
        url: '#contact'
    },
];

const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const options = {
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

const activeClasses = 'bg-(--main-text) text-(--main-light)';
    return (
        <>
            <nav className="fixed left-1/2 top-5 -translate-x-1/2 rounded-xl bg-(--main-light) text-4xl p-1.5 border border-(--main-text) shadow-[0_0_10px_-5px_var(--main-text)] z-999">
                <ul className="flex gap-1">
                    {Links.map((item,i) => (
                        <li key={i}>
                            <a href={item.url} className={`px-6 py-1.5 rounded-md block transition ${active == item.url.substring(1) && activeClasses}`}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}