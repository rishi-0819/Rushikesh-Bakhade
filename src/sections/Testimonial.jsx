// import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

// const testimonials = [
//       {
//          quote:
//            "Pedro is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
//          author: "Sarah Chen",
//          role: "CTO, Tech Innovators Inc.",
//          avatar:
//            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=1"
// },
    
// ]

// export const Testimonial = () => {
//   return <section id="testimonials" className="py-32 relative overflow-hidden">
//     <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" >
    
//     <div className="container mx-auto px-6 relative z-10"/>

//     {/* Section Header */}
//     <div className="text-center max-w-3xl mx-auto mb-16">
//       <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
//         What People Say
//       </span>
//       <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
//         Kind Words From{" "}
//         <span className="font-serif italic font-normal text-white">amazing people</span>
//       </h2>
//     </div>

//     {/* Testimonial Carousel */}
//     <div className="max-w-4xl mx-auto">
//       <div className="relative">
//         {/* Main Testimonial */}
//         <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
//           <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
//             <Quote className="w-6 h-6 text-white"/>
//           </div>
//           <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
//             "{testimonials[0].quote}"
//           </blockquote>
//           <div className="flex items-center gap-4">
//             <img  src={testimonials[0].avatar}
//               alt={testimonials[0].author}
//               className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
//           />
//           <div>
//             <div className="font-semibold">
//               {testimonials[0].author}
//             </div>
//              <div className="text-sm text-muted-foreground">{testimonials[0].role}

//              </div>
//           </div>
//           </div>
//         </div>
//            {/* testimonil Navigation  */}
//            <div className="flex items-center justify-center gap-4 mt-8">
//             <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
//               <ChevronLeft />
//             </button>
//             <div className="flex gap-2">{testimonials.map((_, idx) => {
//               <button className={`w-2 h-2 transition-all duration-300 ${idx === 0 ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}/>
//             })}
//             </div>
//             <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
//              <ChevronRight /> 
//              </button>
//            </div>
//       </div>
//     </div>
//     </div>
//   </section>
// }

import { useState } from "react"                              // ✅ added
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "They delivered an absolutely outstanding website — on time, within budget, and beyond our expectations. Our online enquiries have doubled since launch. Highly recommended to anyone looking for quality work!",
    author: "Rajesh Kumar",
    role: "client",
   // avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100",
  },
  {
    quote: "I was honestly skeptical at first, but the team was incredibly professional and responsive throughout the entire project. The final website exceeded all my expectations. Very happy with the result!",
    author: "Priya Mehta",
    role: "client",
   // avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100",
  },
  {
    quote: "While our competitors are still stuck with outdated websites, we are receiving daily enquiries through our brand new site. This team truly understands what a business needs to grow online. Excellent work!",
    author: "Vikram Nair",
    role: "client",
   // avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100",
  },
  {
    quote:"They listened carefully to every single requirement we had and translated it perfectly into the final design. The attention to detail and the quality of work is simply outstanding. We could not be more pleased!",
    author: "Amit Trivedi",
    role: "client",
   // avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100",
  },
]

export const Testimonial = () => {
  const [activeIdx, setActiveIdx] = useState(0)

  const next = () => setActiveIdx((prev) => (prev + 1) % testimonials.length)
  const previous = () => setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">

      {/* Background Blob */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kind Words From{" "}
            <span className="font-serif italic font-normal text-white">amazing people</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">

            {/* Main Testimonial Card */}
            <div className="glass p-8 md:p-12 rounded-3xl glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                {/* <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                /> */}
                <div>
                  <div className="font-semibold">{testimonials[activeIdx].author}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[activeIdx].role}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={previous}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx                        // ✅ was idx === 0
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}