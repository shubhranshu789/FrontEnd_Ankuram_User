"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 ">
           Reviews from  Parents<br className="md:hidden" />
        </h2>

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
