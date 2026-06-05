import Cursor from "@/components/cursor/cursor";
import {
  About,
  Contact,
  Header,
  Hero,
  Projects,
  Skills,
} from "@/components/sections";
import SmoothScroll from "@/components/smooth-scroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Contact />
        </main>
      </div>
      <Cursor />
    </SmoothScroll>
  );
}