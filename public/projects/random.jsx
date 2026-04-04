// export const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden ">
//         {/* Bg */}
//     <div className="absolute inset-0 ">
//       <img src="/projects/hero-bg.jpeg" alt="Hero image" className="w-full h-full object-cover opacity-40"/> 
//       <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80  to-background"/>
//     </div>
//     {/* Green Dots */}
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {[...Array(30)].map((_, i) => {
//         <div key={i} className=" particle absolute w-1.5 h-1.5 rounded-full opacity-60" style={{
//           backgroundColor: "#20B2A6", 
//           left: `${Math.random() * 100}%`,  
//           top:  `${Math.random() * 100}%`,
//           animationDuration: `${15 + Math.random() * 25}s ease-in-out infinite`,
//           animationDelay: `${Math.random() * 5}s`,
//         }}
//         />
//       })}
//     </div>

//     {/* Content */}
//     <div className = "container mx-auto px-6 pt-32 pb-20 relative z-10">
//       <div className = "grid lg:grid-cols-2">
//         {/* Left Column - Text Content */}
//         <div className="space-y-8">
//             <div className="animate-fade-in">
//               <span className = "inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
//               <span className="w-2 h-2 bg-primary rounded-full">
//                 Software Developer  *  Wordpress & React Specialist
//                 </span>
//                 </span>
//             </div>
//         </div>
//         {/* Right Column - Text Content */}
        
//       </div>
//     </div>
//     </section>
//   )
// }







// export const Hero = () => {
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
//         {[...Array(30)].map((_, i) => (
//           <span
//             key={i}
//             className="particle absolute w-1.5 h-1.5 rounded-full opacity-60"
//             style={{
//               backgroundColor: "#20B2A6",
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDuration: `${5 + Math.random() * 5}s`,
//               animationDelay: `${Math.random() * 5}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
//         <div className="grid lg:grid-cols-2">

//           {/* Left Column - Text Content */}
//           <div className="space-y-8">
//             <div className="animate-fade-in">
//               <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
//                 <span className="w-2 h-2 bg-primary rounded-full"></span>
//                 Software Developer * Wordpress & React Specialist
//               </span>
//             </div>
//           </div>

//           {/* Right Column - Text Content */}
//           <div></div>

//         </div>
//       </div>

//     </section>
//   );
// };


// @import "tailwindcss";

// @theme {
//   --color-background: #0f1418;
//   --color-foreground: #ffffff;

//   --color-card: #141a1f;

//   --color-primary: #20b2a6;
//   --color-primary-foreground: #ffffff;

//   --color-secondary: #1f2830;
//   --color-secondary-foreground: #20b2a6;

//   --color-muted: #252e37;
//   --color-muted-foreground: #7a8491;

//   --color-border: #242b32;

//   --radius: 0.75rem;

//   --color-highlight: #f5a623;
//   --color-surface: #1a2329;
// }

// @layer base {
//   html {
//     scroll-behavior: smooth;
//     height: 100%;
//   }

//   body {
//     background-color: var(--color-background);
//     color: var(--color-foreground);
//     font-family: "Inter", sans-serif;
//     height: 100%;
//     margin: 0;
//   }

//   #root {
//     height: 100%;
//   }

//   .font-serif {
//     font-family: "Playfair Display", serif;
//   }
// }

// @layer components {
//   .glass {
//     background-color: color-mix(in srgb, var(--color-surface) 50%, transparent);
//     backdrop-filter: blur(16px);
//     border: 1px solid color-mix(in srgb, var(--color-border) 50%, transparent);
//   }

//   .glass-strong {
//     background-color: color-mix(in srgb, var(--color-surface) 80%, transparent);
//     backdrop-filter: blur(24px);
//     border: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
//   }

//   .glow-text {
//     text-shadow: 0 0 30px color-mix(in srgb, var(--color-primary) 50%, transparent);
//   }

//   .glow-border {
//     box-shadow:
//       0 0 30px color-mix(in srgb, var(--color-primary) 20%, transparent),
//       inset 0 0 20px color-mix(in srgb, var(--color-primary) 5%, transparent);
//   }
// }

// @layer utilities {

  /* ─── Fade In ─────────────────────────────────────── */
//   @keyframes fade-in {
//     from {
//       opacity: 0;
//       transform: translateY(20px);
//       filter: blur(10px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//       filter: blur(0);
//     }
//   }

  /* ─── Marquee ─────────────────────────────────────── */
//   @keyframes marquee {
//     0%   { transform: translateX(0); }
//     100% { transform: translateX(-50%); }
//     /* ✅ fixed: was translate(-50%) — must be translateX(-50%) */
//   }

//   .animate-marquee {
//     /* ✅ fixed: was ".animate marquee" with a space — space makes it two selectors */
//     animation: marquee 30s linear infinite;
//     width: max-content;
//     /* ✅ added: without this the row collapses and marquee doesn't work */
//   }

  /* ─── Fade In utilities ───────────────────────────── */
//   .animation-fade-in {
//     animation: fade-in 0.8s ease-out both;
//   }

//   .animate-fade-in {
//     animation: fade-in 1s ease-out forwards;
//   }

  /* ─── Animation Delay Utilities ──────────────────── */
//   .animation-delay-100 { animation-delay: 100ms; }
//   .animation-delay-200 { animation-delay: 200ms; }
//   .animation-delay-300 { animation-delay: 300ms; }
//   .animation-delay-400 { animation-delay: 400ms; }
//   .animation-delay-500 { animation-delay: 500ms; }
//   .animation-delay-600 { animation-delay: 600ms; }
//   .animation-delay-800 { animation-delay: 800ms; }

  /* ─── Slow Drift ──────────────────────────────────── */
//   @keyframes slow-drift {
//     0%   { transform: translate(0px, 0px); }
//     25%  { transform: translate(20px, -30px); }
//     50%  { transform: translate(-15px, -20px); }
//     75%  { transform: translate(30px, 10px); }
//     100% { transform: translate(0px, 0px); }
//   }

  /* ─── Animated Border ─────────────────────────────── */
//   @keyframes animated-border {
//     0%   { stroke-dashoffset: 400; }
//     100% { stroke-dashoffset: -550; }
//   }

//   .group:hover .animated-border-path {
//     animation: animated-border 1.5s linear infinite;
//   }

//   .animated-border:hover {
//     background-color: color-mix(in srgb, #26c4b8 15%, transparent);
//     backdrop-filter: blur(16px);
//     box-shadow: 0 0 20px color-mix(in srgb, #26c4b8 20%, transparent);
//   }

  /* ─── Float ───────────────────────────────────────── */
//   @keyframes float {
//     0%, 100% {
//       transform: translateY(0px) scale(1);
//       opacity: 0.7;
//     }
//     50% {
//       transform: translateY(-20px) scale(1.2);
//       opacity: 1;
//     }
//   }

//   .animate-float {
//     animation: float 4s ease-in-out infinite;
//   }

//   .particle {
//     animation: float 6s ease-in-out infinite;
//     /* ✅ added duration: "float infinite" alone has no duration so it never plays */
//   }
// }