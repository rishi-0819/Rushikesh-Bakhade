import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Contact} from "@/sections/Contact";
import {Experience} from "@/sections/Experience";
import {Projects} from "@/sections/Projects";
import {Testimonial} from "@/sections/Testimonial";
import {Navbar} from "@/Layout/Navbar";
import {Footer} from "./Layout/Footer";


function App() {
   return ( <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Testimonial />
      <Contact />
    </main>
    <Footer />
   </div>
   );
}

export default App