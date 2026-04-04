// import {Code2, Lightbulb, Rocket, Users} from "lucide-react";


// const highlights = [
//    {
//      icon: Code2,
//      title: "Clean Code",
//      description: "Writing msintainable, scalable code that stands the texst of time.",
//    },

//    {
//     icon: Rocket,
//     title: "Performance",
//     description: "Optimizing applications for speed and efficiency, ensuring a smooth user experience.",
//    },
//    {
//     icon: Users,
//     title: "Collaboration",
//     description: "Working closely with cross-functional teams to deliver high-quality products.",
//    },
//    {
//     icon : Lightbulb,
//     title: "Innovation",
//     description: "Constantly exploring new technologies and approaches to solve complex problems.",
//    }
// ];
// export const About = () => {
//   return <section id="about" className="py-32 relative overflow-hidden">
//      <div className="container mx-auto px-6 relative z-10"> 
//       <div className="grid lg:grid-cols-2 gap-16 items-center"> { /* Left Column */} 
//         <div className="space-y-8">
//           <div className="animate-fade-in">
//           <span className="text-secondary-foreground text-sm font-mediumtracking-wider uppercase">About Me</span>
//         </div>
//         <h2 className="text-4xlmd:text5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground ">
//           Building the Future
//           <span className="fint-serif italic font-normal text-white"> One Component at a Time</span>
//         </h2>

//         <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
//            <p>
//             I'm a passionate software engineer with over 5 years of experience crafting digital products that make a difference. My journey started with a curiosity for how things work on the web, and it has evolved into a deep expertise in modern frontend technologies.
//            </p>
//            <p>
//             I specialize in React, Next.js, and TypeScript, building everything from sleek landing pages to complex enterprise applications. My approach combines technical excellence with a keen eye for design and user experience.
//            </p>
//            <p>
//             When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
//            </p>
//         </div>
//           <div className="glass rounded-2xl p-6 glow-boredr animate-fade-in animation-delay-300">
//             <p className="text-lg font-medium italic text-foreground ">
//               My mission is to create digital experiences that are not just functional, but truly delightful — products that users love to use and developers love to maintain.
//             </p>
//           </div>
//         </div>
//         {/* Right Columnn Highlights */}
//         <div className="grid sm:grid-cols-2gap-6">
//           {highlights.map((item, idx) => (
//             <div key={idx} className="glass p-6 rounded-2xl glow-border animate-fade-in" 
//             style={{animationDelay: `${(idx + 1) * 100 }ms`}}
//             > 
//               <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center mb-4 hover:bg-primary/20"><item.icon className="w-6 h-6 text-primary"/>
//               </div>
//               <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//               <p className="text-sm text-muted-foreground">{item.description}</p>
//               </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </section>
// }



import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing applications for speed and efficiency, ensuring a smooth user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with cross-functional teams to deliver high-quality products.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Constantly exploring new technologies and approaches to solve complex problems.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Column ───────────────────────────── */}
          <div className="space-y-8">

            {/* Section Label */}
            <div className="animate-fade-in">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
            <span className="text-primary">Building the Future</span>
            <span className="font-serif italic font-normal text-white">
              {" "}One Component at a Time
            </span>
            </h2>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p className="leading-relaxed">
                I'm a passionate software engineer with 1.9+ years of experience
                crafting digital products that make a difference. My journey
                started with a curiosity for how things work on the web, and it
                has evolved into deep expertise in modern frontend technologies.
              </p>
              <p className="leading-relaxed">
                I specialize in React, Next.js, and TypeScript — building
                everything from sleek landing pages to complex enterprise
                applications. My approach combines technical excellence with a
                keen eye for design and user experience.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            {/* Mission Quote */}
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 border-l-4 border-primary">
              <p className="text-base font-medium italic text-foreground leading-relaxed">
                "My mission is to create technical experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>

          </div>

          {/* ── Right Column — Highlight Cards ────────── */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl glow-border animate-fade-in
                           hover:bg-primary/5 transition-all duration-300 group"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center
                                justify-center mb-4 group-hover:bg-primary/20
                                transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};