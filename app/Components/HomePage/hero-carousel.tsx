"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import SchoolMarquee from "../Gallery/SchoolMarquee"

import KindergartenMarquee from "../Gallery/testCompo/KindergartenMarquee"


export default function HeroCarousel() {
  const images = [


    {
      src: "/HeroImages/1.png?height=400&width=500",
      alt: "Students collaborating",
    },
    {
      src: "/HeroImages/2.png?height=400&width=500",
      alt: "Students collaborating",
    },
    {
      src: "/HeroImages/3.png?height=400&width=500",
      alt: "Students collaborating",
    },
    {
      src: "/HeroImages/4.png?height=400&width=500",
      alt: "Students collaborating",
    },
    {
      src: "/HeroImages/5.png?height=400&width=500",
      alt: "Students collaborating",
    },
    {
      src: "/HeroImages/6.png?height=400&width=500",
      alt: "Students collaborating",
    },

    // {
    //   src: "/HeroImages/11111.png?height=400&width=500",
    //   alt: "Students collaborating",
    // },








   
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])


  return (
    // <section className="py-8 md:py-8 bg-gray-50" style={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
    //   <div className="container sm:px-6 lg:px-8">
    //     <div className="flex flex-col md:flex-row items-center">
    //       <div className="w-full md:w-1/2 relative" style={{width: "100%"}}>
    //         {/* Image carousel container with responsive height */}
    //         <div className="relative mx-auto overflow-hidden rounded-lg h-[250px] sm:h-[300px] md:h-[350px] lg:h-[650px] lg:w-full max-w-[1400px]">
    //           {images.map((image, index) => (
    //             <div
    //               key={index}
    //               className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
    //               style={{
    //                 opacity: currentIndex === index ? 1 : 0,
    //                 zIndex: currentIndex === index ? 10 : 0,
    //               }}
    //             >
    //               <Image
    //                 src={image.src || "/placeholder.svg"}
    //                 alt={image.alt}
    //                 fill
    //                 className="object-cover rounded-lg"
    //                 sizes="(max-width: 768px) 100vw, 500px"
    //                 priority={index === 0}
    //               />
    //             </div>
    //           ))}

    //           {/* Decorative elements with responsive positioning */}
    //           <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-12 sm:w-16 h-12 sm:h-16 z-20">
    //             <svg viewBox="0 0 100 100" className="w-full h-full text-green-700">
    //               <path fill="currentColor" d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
    //             </svg>
    //           </div>
    //           <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 z-20">
    //             <svg viewBox="0 0 100 100" className="w-8 sm:w-12 h-8 sm:h-12 text-teal-500">
    //               <path
    //                 fill="currentColor"
    //                 d="M0,50 C0,22.4 22.4,0 50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 Z"
    //               />
    //             </svg>
    //           </div>
    //         </div>

    //         {/* Carousel indicators with better mobile positioning */}
    //         <div className="flex justify-center mt-3 md:mt-4">
    //           {images.map((_, index) => (
    //             <button
    //               key={index}
    //               onClick={() => setCurrentIndex(index)}
    //               className={`mx-1.5 w-2.5 h-2.5 rounded-full transition-colors ${
    //                 currentIndex === index ? "bg-orange-600" : "bg-gray-300"
    //               }`}
    //               aria-label={`Go to slide ${index + 1}`}
    //             />
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    
    <section
      className=" bg-gray-50 w-full"
      style={{ display: "flex", justifyContent: "center", alignItems: "center" , flexDirection: "column"}}









    >
      {/* <SchoolMarquee/> */}
      <KindergartenMarquee/>
















      {/* Removed container width constraints to allow full width */}
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1800px]">
        {" "}
        {/* Increased max-width */}
        <div className="flex flex-col items-center">
          {/* Changed to full width instead of half width on md screens */}
          <div className="w-full relative"> 

            
            {/* Image carousel container with responsive height and increased width */}
            <div className="relative mx-auto overflow-hidden rounded-lg h-[250px] sm:h-[400px] md:h-[500px] lg:h-[700px] w-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                  style={{
                    opacity: currentIndex === index ? 1 : 0,
                    zIndex: currentIndex === index ? 10 : 0,
                  }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className=" rounded-lg "
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1800px" // Updated sizes for larger images
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Decorative elements with responsive positioning */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-12 sm:w-16 h-12 sm:h-16 z-20">
                <svg viewBox="0 0 100 100" className="w-full h-full text-green-700">
                  <path fill="currentColor" d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
                </svg>
              </div>
              <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 z-20">
                <svg viewBox="0 0 100 100" className="w-8 sm:w-12 h-8 sm:h-12 text-teal-500">
                  <path
                    fill="currentColor"
                    d="M0,50 C0,22.4 22.4,0 50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 Z"
                  />
                </svg>
              </div>
            </div>

            {/* Carousel indicators with better mobile positioning */}
            <div className="flex justify-center mt-3 md:mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`mx-1.5 w-2.5 h-2.5 rounded-full transition-colors ${
                    currentIndex === index ? "bg-orange-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

