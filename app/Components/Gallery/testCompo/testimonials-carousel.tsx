"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

// Testimonial data type
type Testimonial = {
  name: string
  role?: string
  image: string
  quote: string
}

export default function TestimonialsCarousel() {
  // Array of testimonials
  const testimonials: Testimonial[] = [
    {
      name: "Mansi Sharma Mini",
      image: "/Avatars/img1.png?height=80&width=80",
      quote:
        "Impressed by this play school, it is one of a kind in Muradnagar. They use fun activities and unique teaching methods to make children mentally and physically active.",
    },
    {
      name: "Vivek Sagar",
      role: "",
      image: "/Avatars/img2.png?height=80&width=80",
      quote:
        "Ankuram Pre-School is one of the best preschool with good infrastructure and overall development of students. Teachers are doing excellent work in academics as well as extra curricular activities.",
    },
    {
      name: "Ankit Tyagi",
      image: "/Avatars/img3.png?height=80&width=80",
      quote:
        "One of the best preschool in the locality. Staff is well qualified and professional. My kid learned a lot here. I will surely recommend this school.",
    },
    {
      name: "Shoaib Mirza",
      role: "",
      image: "/Avatars/4.jpg?height=80&width=80",
      quote:
        "Best activities provide in school. Reading and writing also best for ankuram. Faculty have excellent services provide in students. 5/5 star rating for Ankuram.",
    },
    {
      name: "Prasannajeet Kumbhakar",
      role: "",
      image: "/Avatars/6.jpg?height=80&width=80",
      quote:
        "Very Good Infrastructure, Interactive Classes, Awesome Faculty 100% Recommended!!!",
    },
    {
      name: "Archie Srivastava ",
      image: "/Avatars/8.jpg?height=80&width=80",
      quote:
        "The school is awesome, the ambience is fantastic, the staffs are well trained and experienced.",
    },
    {
      name: "Aankit Haritash",
     image: "/Avatars/5.jpg?height=80&width=80",
      quote:
        "very good school.staff is well trained.five stars.",
    },
    {
      name: "Mohammad Daud",
      image: "/Avatars/7.jpg?height=80&width=80",
      quote:
        "The infrastructure is very good and teachers are familiar with children.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Calculate how many testimonials to show based on screen size
  const [itemsPerPage, setItemsPerPage] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(3)
      }
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-rotate carousel
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        goToNext()
      }, 5000) // Change every 5 seconds
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [currentIndex, isPaused, itemsPerPage])

  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1))
  }

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1))
  }

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex)
  }

  // Get current testimonials to display
  const currentTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage,
  )

  return (
    <section
      className="py-12 md:py-20 bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full py-12 px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 max-w-8xl ">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left">Reviews from Parents</h2>

            <div className="flex items-center gap-6 md:gap-10">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
                <Link
                  to="https://www.facebook.com/ankurammuradnagar"
                  className="block"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                >
                  <svg
                    className="h-10 w-10 md:h-12 md:w-12 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.15 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                <Link
                  to="https://www.instagram.com/ankuram__/"
                  className="block"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram page"
                >
                  <svg className="h-10 w-10 md:h-12 md:w-12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#feda75" />
                        <stop offset="25%" stopColor="#fa7e1e" />
                        <stop offset="50%" stopColor="#d62976" />
                        <stop offset="75%" stopColor="#962fbf" />
                        <stop offset="100%" stopColor="#4f5bd5" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#instaGradient)"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.32.975.976 1.257 2.243 1.32 3.608.058 1.266.07 1.646.07 4.84s-.012 3.575-.07 4.84c-.063 1.366-.345 2.633-1.32 3.608-.975.975-2.242 1.257-3.608 1.32-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.345-3.608-1.32-.975-.975-1.257-2.242-1.32-3.608C2.175 15.58 2.163 15.2 2.163 12s.012-3.575.07-4.84c.063-1.366.345-2.633 1.32-3.608.975-.975 2.242-1.257 3.608-1.32C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.129 4.63.396 3.635 1.39 2.64 2.385 2.373 3.529 2.316 4.806.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.057 1.277.324 2.421 1.318 3.416.996.994 2.14 1.261 3.417 1.318C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.057 2.421-.324 3.416-1.318.994-.996 1.261-2.14 1.318-3.417C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.057-1.277-.324-2.421-1.318-3.416C21.615.396 20.471.129 19.194.072 17.914.014 17.505 0 14.246 0H12zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Carousel navigation - Previous button */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          {/* Testimonials grid/carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
                style={{
                  animation: `fadeIn 0.5s ease-in-out ${index * 0.2}s`,
                }}
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg?height=80&width=80"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    {testimonial.role && <p className="text-sm text-gray-600">{testimonial.role}</p>}
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-orange-600 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm flex-grow">{testimonial.quote}</p>
              </div>
            ))}
          </div>

          {/* Carousel navigation - Next button */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-orange-600 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial page ${index + 1}`}
              aria-current={currentIndex === index ? "true" : "false"}
            />
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
