import About from "./components/home/about";
import Contact from "./components/home/contact";
import Hero from "./components/home/hero";
import LifeEvents from "./components/home/lifeEvents";
import Projects from "./components/home/projects";
import Nav from "./components/layout/nav";
// import lifeEvents from "./componentshome/;";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Nav />
      <section className="flex min-h-screen w-full flex-col items-center justify-between lg:px-30 sm:items-start" id="home">
        <Hero/>
      </section>
      <section id="about" className="overflow-x-hidden overflow-y-visible py-5 ">
        <About />
      </section>
      <section className="flex w-full flex-col items-center justify-between px-5 md:px-30 sm:items-start pt-10 lg:pt-25 pb-10 relative z-20" id="projects">
        <Projects/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
        {/* <LifeEvents /> */}
    </div>
  );
}
