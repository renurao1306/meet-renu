import About from "@/components/About";
import Grid from "@/components/Grid";
import Main from "@/components/Main";
import Test from "@/components/Test";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{ name: 'Home', link: '/', icon: <FaHome /> }, { name: 'About', link: '/' }]} />
        <Main />
        <About />
        <Test />
      </div>
    </main>
  );
}
