"use client"

export default function SchoolMarquee() {
  const features = [
    { icon: "🎓", title: "Academic Excellence" },
    { icon: "👨‍🏫", title: "Expert Faculty" },
    { icon: "🏛️", title: "Modern Facilities" },
    { icon: "🎭", title: "Arts & Culture" },
    { icon: "🏆", title: "Sports Programs" },
    { icon: "💻", title: "Technology Integration" },
    { icon: "🌍", title: "Global Perspective" },
    { icon: "🔬", title: "Research Opportunities" },
  ]

  // Duplicate the features array to create a seamless loop
  const allFeatures = [...features, ...features]

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm border-y border-indigo-100">
      <div className="marquee-container relative overflow-hidden">
        <div className="marquee-track flex items-center">
          {allFeatures.map((feature, index) => (
            <div
              key={index}
              className="feature-item flex-shrink-0 flex items-center px-6 py-2"
              style={{
                whiteSpace: "nowrap",
              }}
            >
              <span
                className="feature-icon mr-2"
                style={{
                  fontSize: "1.25rem",
                }}
              >
                {feature.icon}
              </span>
              <span
                className="feature-title font-medium"
                style={{
                  color: "#4338ca",
                }}
              >
                {feature.title}
              </span>
              <span className="mx-4 text-gray-400">•</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          width: 100%;
          height: 50px;
          overflow: hidden;
        }
        
        .marquee-track {
          display: flex;
          animation: marquee 30s linear infinite;
          width: fit-content;
          height: 100%;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .marquee-container {
            height: 40px;
          }
          
          .feature-icon {
            font-size: 1rem !important;
          }
          
          .feature-title {
            font-size: 0.875rem !important;
          }
        }
      `}</style>
    </div>
  )
}
