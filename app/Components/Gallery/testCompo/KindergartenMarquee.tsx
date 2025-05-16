"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function KindergartenMarquee() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const features = [
    {
      icon: "🎨",
      title: "Creative Arts",
      message: "Express yourself through colors and shapes!",
      character: "/images/paint-character.png",
      color: "#FF6B35", // Orange
    },
    {
      icon: "🧩",
      title: "Fun Learning",
      message: "Learning is an adventure full of discoveries!",
      character: "/images/puzzle-character.png",
      color: "#1AC0C6", // Teal
    },
    {
      icon: "🌱",
      title: "Olympiad Examinations",
      message: "Watch your skills bloom like flowers!",
      character: "/images/plant-character.png",
      color: "#7FB800", // Green
    },
    {
      icon: "🎵",
      title: "Music & Dance",
      message: "Move, groove, and express yourself!",
      character: "/images/music-character.png",
      color: "#FF5376", // Pink
    },

    
    {
      icon: "👩‍🏫",
      title: "Well trained teachers",
      message: "Play is how we learn and grow!",
      character: "/images/toy-character.png",
      color: "#FFB400", // Yellow
    },
    {
      icon: "👫",
      title: "Safe and child-friendly",
      message: "Making friends and sharing smiles!",
      character: "/images/friends-character.png",
      color: "#9A48D0", // Purple
    },
    {
      icon: "🏊‍♂️",
      title: "Swimming Pool",
      message: "Explore the world around you!",
      character: "/images/explorer-character.png",
      color: "#4ECDC4", // Turquoise
    },
    {
      icon: "🎐",
      title: "Fully AC rooms",
      message: "Magical adventures await in books!",
      character: "/images/book-character.png",
      color: "#FF9F1C", // Orange-yellow
    },
    {
      icon: "📚",
      title: "Smart classes",
      message: "Magical adventures await in books!",
      character: "/images/book-character.png",
      color: "#FF9F1C", // Orange-yellow
    },
  ]

  // Duplicate the features array to create a seamless loop
  const allFeatures = [...features, ...features]

  const handleInteraction = (index: number | null) => {
    setExpandedIndex(index)
  }

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-orange-50 to-teal-50 shadow-sm border-y border-orange-200 relative">
      <div className={`marquee-container relative overflow-visible ${expandedIndex !== null ? "paused" : ""}`}>
        <div className="marquee-track flex items-center">
          {allFeatures.map((feature, index) => (
            <div
              key={index}
              className={`feature-item flex-shrink-0 flex items-center px-5 py-3 mx-1 rounded-full transition-all duration-300 ease-in-out relative ${
                expandedIndex === index ? "expanded z-10" : ""
              }`}
              style={{
                whiteSpace: "nowrap",
                backgroundColor: expandedIndex === index ? `${feature.color}20` : "transparent",
                borderColor: expandedIndex === index ? feature.color : "transparent",
              }}
              onMouseEnter={() => handleInteraction(index)}
              onMouseLeave={() => handleInteraction(null)}
              onTouchStart={() => handleInteraction(index)}
              onTouchEnd={() => handleInteraction(null)}
            >
              <span
                className={`feature-icon mr-2 transition-all duration-300 ${expandedIndex === index ? "scale-150" : ""}`}
                style={{
                  fontSize: "1.5rem",
                }}
              >
                {feature.icon}
              </span>
              <span
                className={`feature-title font-bold transition-all duration-300 ${
                  expandedIndex === index ? "scale-110" : ""
                }`}
                style={{
                  color: feature.color,
                }}
              >
                {feature.title}
              </span>
              <span className="mx-3 text-orange-300">•</span>

              {/* Expanded content that appears on hover/touch */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    className="absolute left-0 top-full mt-2 bg-white rounded-xl p-4 shadow-lg border-2 flex items-center gap-4 w-64"
                    style={{ borderColor: feature.color }}
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="character-container w-16 h-16 flex-shrink-0"
                      initial={{ scale: 0.8, rotate: -5 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        duration: 0.8,
                      }}
                    >
                      <div
                        className="w-full h-full rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${feature.color}30` }}
                      >
                        {/* Placeholder for character - in production, use actual SVG characters */}
                        <span className="text-3xl">{feature.icon}</span>
                      </div>
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-lg" style={{ color: feature.color }}>
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{feature.message}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          width: 100%;
          height: 60px;
          overflow: hidden;
        }
        
        .marquee-track {
          display: flex;
          animation: marquee 40s linear infinite;
          width: fit-content;
          height: 100%;
        }
        
        .paused .marquee-track {
          animation-play-state: paused;
        }
        
        .feature-item {
          cursor: pointer;
          position: relative;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }
        
        .feature-item.expanded {
          transform: scale(1.05);
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @media (max-width: 768px) {
          .marquee-container {
            height: 50px;
          }
          
          .feature-icon {
            font-size: 1.25rem !important;
          }
          
          .feature-title {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </div>
  )
}
