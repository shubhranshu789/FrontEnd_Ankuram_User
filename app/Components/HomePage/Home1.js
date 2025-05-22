import Image from "next/image"
import { Star, ArrowUpRight, Globe, Target, NetworkIcon as Connection, ChevronRight, ChevronLeft } from "lucide-react"


import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import HeroSection from "./hero-carousel.tsx"
import SchoolMarquee from "../Gallery/SchoolMarquee"
// import SchoolMarquee2 from "../Gallery/testCompo/SchoolMarquee.jsx";
import useEmblaCarousel from "embla-carousel-react"
// import { Button } from "@/components/ui/button"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import pic from '../../../public/img1.png'

import Logo from "../../../public/AnkuramLogo.png"

import TestimonialsCarousel from "../Gallery/testCompo/testimonials-carousel.tsx";



export default function Home1() {

  const [albums, setAlbums] = useState([]);

  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/allalbums`)
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleUpdate = (id) => {
    console.log("Update album", id);
  };


  const removeAlbum = (albumid) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/deleteAlbum/${albumid}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        notifyB(result.message);
        // window.location.reload();
      });
  };



  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: true,
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  const onSelect = () => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi])





  return (
    <div className="min-h-screen bg-[#FBF8F3]">
      {/* Navigation */}

      <header className="bg-black shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between ">

            {/* Logo + Navigation */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="relative w-32 sm:w-40 h-40 md:w-48 lg:w-56 xl:w-64 h-auto">
                  <img
                    src="/AnkuramLogo.png"
                    alt="Logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Optional Action Buttons */}
            {/* Uncomment this block if needed
          <div className="hidden md:block">
            <button className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Make Appointment
            </button>
          </div>
          */}

          </div>
        </div>
      </header>

      <HeroSection />
      

      {/* Sub and Find Sub Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">


          <section className="w-full  mx-auto px-4 py-8 md:py-12 bg-gray-50">
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Welcome to Ankuram Muradnagar</h1>
              <p className="text-lg md:text-xl text-gray-600 mt-2">Little steps, big dreams—we’re reaching for the stars!</p>

              <div className="flex items-center justify-center mt-4">
                <div className="h-px w-24 md:w-32 bg-green-600"></div>
                <div className="h-4 w-4 rounded-full border-2 border-green-600 mx-2"></div>
                <div className="h-px w-24 md:w-32 bg-green-600"></div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-8">
              <div className="md:w-1/3 flex justify-center items-center">
                <div className="rounded-lg overflow-hidden shadow-md w-full h-[500px] md:h-[80vh]">
                  <Image
                    src="/Capture.JPG"
                    alt="DPS Indirapuram students"
                    width={400}
                    height={350}
                    className="w-full h-full "
                  />
                </div>
              </div>

              <div className="md:w-2/3 font-['Patrick_Hand',cursive] text-lg md:text-xl" >
                <p className="text-gray-700 leading-relaxed text-justify">
                  Dear Parents and Little Learners,

                  Welcome to Ankuram, where curiosity blooms, laughter echoes, and learning begins with joy!

                  At Ankuram, we believe every child is a unique spark of wonder, ready to explore the world with open hearts and eager minds. Our nurturing environment, dedicated teachers, and play-based learning approach ensure that your child’s first steps in education are filled with excitement, creativity, and confidence.

                  We focus on the holistic development of our young learners by nurturing their gross motor, fine motor, and cognitive skills through engaging activities. From fun-filled outdoor play that strengthens coordination and balance to hands-on crafts that refine little fingers, every experience is designed to enhance their abilities. Our interactive storytelling, puzzles, and problem-solving tasks stimulate cognitive growth, encouraging children to think, imagine, and explore with curiosity.

                  To boost communication skills and build confidence, we provide ample opportunities for stage exposure through rhymes, storytelling, role plays, and show-and-tell activities. These experiences help children express themselves clearly, overcome stage fear, and develop a love for public speaking. By encouraging participation in school events, we ensure that every child finds their voice and gains the confidence to shine in every aspect of life.

                  We are committed to building a strong foundation, not just in academics, but also in essential life skills—kindness, teamwork, and independence. Every classroom is a world of discovery, where storytelling, hands-on activities, and interactive play make learning magical.

                  Together, let’s make these early years a beautiful journey of growth and happiness. We look forward to welcoming your little one into our family!
                </p>
                <p className="text-gray-700 leading-relaxed mt-2 text-justify">Warm regards,</p>
                <p className="text-gray-700 leading-relaxed text-justify">Pooja Rani, M.Tech (Power Electronics and Drives)</p>
                <p className="text-gray-700 leading-relaxed text-justify">Principal, Ankuram</p>
                <p className="text-gray-700 leading-relaxed text-justify">Academic Experience: more than 20 years</p>
                <p className="text-gray-700 leading-relaxed text-justify">Research Papers: 15</p>
              </div>

            </div>




          </section>


        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center">
                Why Choose Our Services?
                <svg className="ml-2 w-6 h-6 text-orange-600" viewBox="0 0 100 100">
                  <path fill="currentColor" d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
                </svg>
              </h2>
              <p className="md:w-2/3 mt-4 text-lg text-gray-600 lg:w-[600px] font-['Patrick_Hand',cursive] text-justify text-lg md:text-xl">
                At Ankuram, we nurture young minds in a joyful, safe, and stimulating environment where learning feels like play. Our engaging curriculum fosters curiosity, creativity, and confidence, helping children develop essential skills for life. With experienced educators, hands-on activities, and a focus on holistic growth, we create a strong foundation for a lifelong love of learning.
              </p>

            </div>
            <div className="md:w-1/2 relative" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#327B74] p-6 rounded-lg col-span-2 md:col-span-1">
                  <Image
                    src="/carausalsImagespic2.jpg?height=300&width=300"
                    alt="Student with globe"
                    width={300}
                    height={300}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <div className="space-y-4 col-span-2 md:col-span-1" style={{ marginTop: "20px" }}>
                  <div className="bg-orange-400 p-6 rounded-lg text-white text-center">
                    <div className="text-4xl font-bold">500+</div>
                    <div className="text-sm">Happy Students</div>
                    <div className="text-xs">Since 2018</div>
                  </div>
                  <div className="bg-orange-500 p-6 rounded-lg text-white text-center">
                    <div className="text-4xl font-bold">15+</div>
                    <div className="text-sm">Working Professionals</div>
                    <div className="text-xs">Working With Us</div>
                  </div>
                  <div className="bg-orange-600 p-6 rounded-lg text-white text-center">
                    <div className="text-4xl font-bold">No. 1</div>
                    <div className="text-sm">Districts</div>
                    <div className="text-xs">Nationwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel/>
      {/* Blog Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Useful Content For <br />
              Your Check
            </h2>
            <div className="mt-4 md:mt-0">
              <svg className="w-10 h-10 text-teal-500" viewBox="0 0 100 100">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  d="M10,50 C10,10 90,10 90,50 C90,90 10,90 10,50 Z"
                />
              </svg>
            </div>
          </div>



          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {albums.length > 0 ? (
                  [...albums]
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .map((article, index) => (
                      <div
                        key={index}
                        className="min-w-[300px] md:min-w-[350px] flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-sm"
                      >
                        <Image
                          src={article.Coverpic || "/placeholder.svg"}
                          alt={article.AlbumName}
                          width={350}
                          height={200}
                          className="w-full h-48"
                        />
                        <div className="p-6">
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">{article.AlbumName}</h3>
                          <Link
                            to={`/viewparticulargallery/${article._id}`}
                            className="text-orange-600 inline-flex items-center text-sm"
                          >
                            View More
                            <ArrowUpRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    ))
                ) : (
                  <p className="p-4">Loading albums...</p>
                )}
              </div>
            </div>

        
          </div>




        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-[#327B74] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get in Touch</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Join our loving kindergarten community!</h3>
            <p className="text-white text-lg mb-8 ">
              Looking to inspire young minds? Ankuram is now welcoming passionate educators in the greater Chicago area! Teaching little learners is a joyful and fulfilling experience for caregivers, educators, and creatives.
            </p>
            {/* <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md inline-flex items-center">
              Contact Us Now
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </button> */}
          </div>
        </div>
        <svg className="absolute bottom-0 right-0 w-32 h-32 text-orange-600 opacity-80" viewBox="0 0 100 100">
          <path fill="currentColor" d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
        </svg>
        <svg className="absolute top-0 left-0 w-24 h-24 text-green-700 opacity-30" viewBox="0 0 100 100">
          <path fill="none" stroke="currentColor" strokeWidth="4" d="M10,50 C10,10 90,10 90,50 C90,90 10,90 10,50 Z" />
        </svg>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© Copyright Ankuram 2025. All Rights Reserved.</p>
            <div className="flex space-x-4">
              {/* <Link href="#" className="text-gray-500 hover:text-gray-700">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.839c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </Link> */}
              <Link to="https://www.facebook.com/ankurammuradnagar" className="text-gray-500 hover:text-gray-700">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </Link>
            
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

