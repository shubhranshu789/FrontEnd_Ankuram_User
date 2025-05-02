// "use client"

// export default function SchoolMarquee() {
//   const features = [
//     { icon: "🎓", title: "Academic Excellence", description: "Top-tier education with proven results" },
//     { icon: "👨‍🏫", title: "Expert Faculty", description: "Experienced educators dedicated to student success" },
//     { icon: "🏛️", title: "Modern Facilities", description: "State-of-the-art classrooms and learning spaces" },
//     { icon: "🎭", title: "Arts & Culture", description: "Rich programs in visual and performing arts" },
//     { icon: "🏆", title: "Sports Programs", description: "Championship athletics and physical education" },
//     { icon: "💻", title: "Technology Integration", description: "Cutting-edge tech in every classroom" },
//     { icon: "🌍", title: "Global Perspective", description: "International programs and diverse community" },
//     { icon: "🔬", title: "Research Opportunities", description: "Hands-on learning and scientific discovery" },
//   ]

//   // Duplicate the features array to create a seamless loop
//   const allFeatures = [...features, ...features]

//   return (
//     <div className="w-full overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 py-8 shadow-md">
//       {/* <h2 className="text-center text-3xl font-bold mb-6 text-indigo-800">Welcome to Ankuram</h2> */}

//       <div className="marquee-container relative overflow-hidden">
//         <div className="marquee-track flex">
//           {allFeatures.map((feature, index) => (
//             <div
//               key={index}
//               className="feature-card flex-shrink-0 mx-4 p-4 rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
//               style={{
//                 width: "280px",
//                 minHeight: "180px",
//                 border: "2px solid #e0e7ff",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 textAlign: "center",
//               }}
//             >
//               <div
//                 className="feature-icon mb-3"
//                 style={{
//                   fontSize: "2.5rem",
//                 }}
//               >
//                 {feature.icon}
//               </div>
//               <h3
//                 className="feature-title mb-2 font-bold"
//                 style={{
//                   color: "#4338ca",
//                   fontSize: "1.25rem",
//                 }}
//               >
//                 {feature.title}
//               </h3>
//               <p
//                 className="feature-description"
//                 style={{
//                   color: "#6b7280",
//                   fontSize: "0.875rem",
//                 }}
//               >
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .marquee-container {
//           width: 100%;
//           height: auto;
//           overflow: hidden;
//         }
        
//         .marquee-track {
//           display: flex;
//           animation: marquee 30s linear infinite;
//           width: fit-content;
//         }
        
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         @media (max-width: 768px) {
//           .feature-card {
//             width: 220px !important;
//             min-height: 160px !important;
//           }
          
//           .feature-icon {
//             font-size: 2rem !important;
//           }
          
//           .feature-title {
//             font-size: 1rem !important;
//           }
          
//           .feature-description {
//             font-size: 0.75rem !important;
//           }
//         }
//       `}</style>
//     </div>
//   )
// }


// ---------------------------------------------------------------------------------------------

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
