import About from "./components/home/about";
import Hero from "./components/home/hero";
import LifeEvents from "./components/home/lifeEvents";
import Projects from "./components/home/projects";
import Nav from "./components/layout/nav";
// import lifeEvents from "./componentshome/;";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Nav />
      <div className="flex min-h-screen w-full flex-col items-center justify-between px-5 md:px-30 sm:items-start">
        <Hero/>
      </div>
        <About />
      <div className="flex w-full flex-col items-center justify-between px-5 md:px-30 sm:items-start py-25">
        <Projects/>
      </div>
        {/* <LifeEvents /> */}
    </div>
  );
}
