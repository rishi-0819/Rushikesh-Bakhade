import { Button } from "@/components/Button";
import { Menu, X} from "lucide-react";
import { useEffect, useState } from "react";


const navLinks = [
  {href: "#about", label:"About"},
  {href: "#projects", label:"Projects"},
  {href: "#experience", label:"Experience"},
  {href: "#testimonials", label:"Testimonials"},
]

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled]= useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () =>  window.removeEventListener("scroll", handleScroll);
  },[])
  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration ${isScrolled ? "glass py-3" : "bg-transparent py-5"}  z-50`}>
      <nav className="container mx-auto px-5 flex items-center justify-between">
        <a 
         href="#" className="text-xl font-bold tracking-tight hover:text-primary">
          RB <span className="text-primary">.</span>
        </a>
         {/* Desktop Now */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-2">
            {navLinks.map((link, index) => (
              <a 
                href={`${link.href}`}
                key={index}
                   className="px-4 py-2 text-sm text-muted-foreground hover:text-white rounded-xl transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
<div className="hidden md:block">
  <Button
    size="sm"
    onClick={() => {
      const target = document.querySelector("#contact");
      target.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Contact Me
  </Button>
</div>

        {/* {Mobile Menu Buton } */}
        <button 
        className="md:hidden p-2 text-foreground cursor-pointer" onClick = {()=> setIsMobileMenuOpen((prev)=> !prev)}>
          {isMobileMenuOpen ? < X size={24} /> : <Menu size={24} /> }
        </button>
      </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
  <div className="md:hidden glass-strong animated-fade-in">
    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
      {navLinks.map((link, index) => (
        <button
          key={index}
          onClick={() => {
            setIsMobileMenuOpen(false);
            const target = document.querySelector(link.href); // e.g. "#about"
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-lg text-left text-muted-foreground hover:text-foreground py-2"
        >
          {link.label}
        </button>
      ))}

      <Button
        onClick={() => {
          setIsMobileMenuOpen(false);
          const target = document.querySelector("#contact");
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Contact Me
      </Button>
    </div>
  </div>
)}
        {/* { isMobileMenuOpen && (<div className="md:hidden glass-strong animated-fade-in">
           <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a 
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                 className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <Button onClick={() => setIsMobileMenuOpen(false)}>Contact Me</Button>
           </div>
        </div>)} */}
    </header>
  )
};

