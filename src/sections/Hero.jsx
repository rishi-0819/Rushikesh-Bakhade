// "use client";
// import { useMemo } from "react";
// import {Button} from "@/components/Button";
// import { ArrowRight, Download, ChevronDown, Facebook, Github, Instagram, Linkedin } from "lucide-react";
// import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

// const skills = [
//   "React",
//   "Next.js",
//   "Wordpress",
//   "Node.js",
//   "MongoDB",
//   "TypeScript",
//   "Tailwind CSS",
//   "Git & GitHub",
//   "Postman",
//   "MySQL",
//   "Core-Java",
//   "JavaScript",
//   "HTML & CSS",
//   "Figma"

// ]
// export const Hero = () => {
//   const particles = useMemo(() => {
//     return [...Array(30)].map(() => ({
//       left: Math.random() * 100,
//       top: Math.random() * 100,
//       duration: 10 + Math.random() * 10,
//       delay: Math.random() * 5,
//       size: Math.random() * 3 + 2
//     }));
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <img
//           src="/projects/hero-bg.jpeg"
//           alt="Hero image"
//           className="w-full h-full object-cover opacity-40"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
//       </div>

//       {/* Smooth Animated Dots */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {particles.map((p, i) => (
//           <span
//             key={i}
//             className="particle absolute rounded-full"
//             style={{
//               backgroundColor: "#20B2A6",
//               width: `${p.size}px`,
//               height: `${p.size}px`,
//               left: `${p.left}%`,
//               top: `${p.top}%`,
//               animationDuration: `${p.duration}s`,
//               animationDelay: `${p.delay}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <div className="animate-fade-in">
//               <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
//                 <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
//                 Software Developer * Wordpress & React Specialist
//               </span>
//             </div>

//             <div className="space-y-4">
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
//                 Crafting <span className="text-primary glow-text">Digital experience with</span>
//                 <br />
//                 <span className="font-serif italic font-normal text-white">Perception.</span>
//               </h1>
//               <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
//                 Hi, I'm Rushikesh Bakhade - a software engineer specializing in 
//                 React, Next.js, and TypeScript. I build scalable, performance Web Applications that users love.
//               </p>
//             </div>

//             {/* CTA */}
//             <div className="flex flex-wrap gap-4 animate-fade-in animation-dely-300">
//               <Button size="lg">
//                 Contact Me <ArrowRight className="w-5 h-5"/>
//               </Button>
//               <AnimatedBorderButton />
//             </div>


//             {/* Social Links  */}
//             <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
//               <span className="text-sm text-muted-foreground">
//                 Follow me:
//               </span>
//               {[
//                 {icon: Github, href:"#"},
//                 {icon: Linkedin, href:"#"},
//                 {icon: Instagram, href:"#"},
//                 {icon: Facebook, href:"#"},
//               ].map((social, idx) => (
//                 <a key={idx} href={social.href} className="p-2 rounded-full glass text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300">
//                   {<social.icon className="w-5 h-5"/>}
                  
//                   </a>
//               ))}
//             </div>
//           </div>
//           {/* Right Column - Profile Image */}
//           \<div className="relative animate-fade-in animation-delay-300">
//             {/* Profile Image */}
//             <div className="relative max-w-md max-auto">
//               <div
//                   className="absolute inset-0
//                   rounded-3xl bg-gradient-to-br
//                   from-primary/30 via-transparent
//                   to-primary/10 blur-2xl animate-pulse-glow"
//                 />
//               <div className="relative glass rounded-3xl p-2 glow-border">
//                 <img src="/projects/rushikesh.jpeg" alt="Rushikesh Bakhade" className="w0full aspect-[4/5] object-cover rounded-2xl" />

//                 {/* Floating Badges */}
//                  <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
//                   <div className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
//                     <span className="text-sm font-medium">
//                       Available for Work
//                     </span>
//                   </div>
//                  </div>
//                  {/* Stat Badge */}
//                  <div className="absolute -top-4 -left-4 glass rounded-xl px-2 py-3 animate-float animation-delay-500">
//                   <div className="text-2xl font-bold text-primary">1.9+</div>
//                   <div className="text-xs font-medium">Year of Exp.</div>
//                  </div>

//               </div>
//             </div>
//           </div>
//         </div>
         
//          {/* Skills sSection */}
//          <div className="mt-20 animate-fade-in animation-delay-600">
//           <p className="text-sm text-muted-foreground mb-6 text-center"> Technologiess I Work With </p>
//           <div className="relative overflow-hidden">
//             <div className="flex animate-marquee">
//               {[...skills, ...skills].map((skills, idx) => (
//                 <div key={idx} className="flex-shrink-0 px-8 py-4"> 
//                 <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skills}</span></div>
//               ))}
//             </div>
//           </div>
//          </div> 
//       </div>

//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
//   <a
//     href="#about"
//     className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
//   >
//     <span className="text-xs uppercase tracking-wider">Scroll</span>
//     <ChevronDown className="w-6 h-6 animate-bounce" />
//   </a>
// </div>
//     </section>
//   );
// };




"use client";
import { useMemo } from "react";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Next.js",
  "Wordpress",
  "Node.js",
  "MongoDB",
  "Git & GitHub",
  "Postman",
  "MySQL",
  "Core-Java",
  "JavaScript",
  "HTML & CSS",
  "Figma",
];

export const Hero = () => {
  const particles = useMemo(() => {
    return [...Array(30)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 5,
      size: Math.random() * 3 + 2,
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background Image ─────────────────────────────── */}
      <div className="absolute inset-0">
        <img
          src="/projects/hero-bg.jpeg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* ── Animated Particles ───────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle absolute rounded-full"
            style={{
              backgroundColor: "#20B2A6",
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── Main Content ─────────────────────────────────── */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left Column — Text ───────────────────────── */}
          <div className="space-y-8">

            {/* Badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Developer : WordPress & React Specialist 
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ... animate-fade-in animation-delay-100">
                {/* ✅ fixed: reduced font size so heading doesn't wrap per word */}
                Building{" "}
                <span className="text-primary glow-text">
                  Digital and Technical Experience with
                </span>
                <br />
                <span className="font-serif italic font-normal text-white">
                  Perception.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Rushikesh Bakhade — a software engineer specializing in
                React, Next.js, and TypeScript. I build scalable, performant
                web applications that users love.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 animate-fade-in animation-delay-300">
              {/* ✅ fixed: "animation-dely-300" → "animation-delay-300" */}
              <Button size="lg" onClick={() => {
      const target = document.querySelector("#contact");
      target.scrollIntoView({ behavior: "smooth" });
    }}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <a
               href="/Rushikesh_Bakhade__Resume.pdf"
  download="Rushikesh_Bakhade_CV.pdf"
>
  <AnimatedBorderButton>
    <Download className="w-5 h-5" />
    Download CV
  </AnimatedBorderButton>
</a>
            </div>
            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                { icon: Github,    href: "https://github.com/rishi-0819" },
                { icon: Linkedin,  href: "https://www.linkedin.com/in/rushikesh-bakhade-601713219/" },
                { icon: Instagram, href: "https://www.instagram.com/___rishi__._/" },
                { icon: Facebook,  href: "https://www.facebook.com/rishikesh.bakhade" },
              ].map((social, idx) => (
                // ✅ fixed: changed { to ( so JSX is returned
                // ✅ fixed: added style color white so icons are visible
                <a
                  key={idx}
                  href={social.href}
                  style={{ color: "#ffffff" }}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right Column — Profile Image ─────────────── */}
          {/* ✅ fixed: removed the \ backslash before <div */}
          <div className="relative animate-fade-in animation-delay-300 hidden sm:block">
            <div className="relative max-w-md mx-auto">
              {/* ✅ fixed: "max-auto" → "mx-auto" */}

              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse-glow" />

              {/* Image card */}
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/projects/rushikesh.jpeg"
                  alt="Rushikesh Bakhade"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                  // ✅ fixed: "w0full" → "w-full"
                />

                {/* Available for Work badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for Work</span>
                  </div>
                </div>

                {/* Years of Experience badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">1.9+</div>
                  <div className="text-xs font-medium">Year of Exp.</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Skills Marquee ───────────────────────────────── */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I Work With
            {/* ✅ fixed: "Technologiess" typo removed */}
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                // ✅ fixed: renamed variable "skills" → "skill" to avoid shadowing
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ─────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>

    </section>
  );
};