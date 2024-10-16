"use client"
import React, { useEffect, useRef } from 'react'
import Content from "./content"
import { gsap } from 'gsap'

const Page = () => {
  const textRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const text = textRef.current
    const chars = text.innerText.split('')
    text.innerHTML = ''
    chars.forEach((char) => {
      const span = document.createElement('span')
      span.textContent = char
      span.style.opacity = '0'
      text.appendChild(span)
    })

    // Initial text animation (fade-in and scaling)
    gsap.to(text.children, {
      opacity: 1,
      duration: 0.1,
      stagger: 0.1,
      ease: "power1.inOut",
      onComplete: () => {
        gsap.to(text, {
          scale: 1.1,
          duration: 0.7,
          ease: "power2.out",
          yoyo: true,
          repeat: 1,
          onComplete: () => {
            // Scroll-up animation to reveal content
            gsap.to(overlayRef.current, {
              y: "-100%",
              duration: 1,
              ease: "power2.inOut"
            })
          }
        })
      }
    })
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Overlay with black background and scrolling text */}
      <div ref={overlayRef} className="absolute inset-0 bg-black flex items-center justify-center z-20">
        <p ref={textRef} className="text-white text-[5vw] text-center rangile">HumaniText AI</p>
      </div>

      {/* Main content below the overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
      <p ref={textRef} className="text-white text-[16vw] text-center rangile">HumaniText AI</p>
        <Content  />
      </div>
    </div>
  )
}

export default Page



// import React, { useEffect, useRef } from 'react'
// import Content from "./content"
// import { gsap } from 'gsap'

// const Page = () => {
//   const textRef = useRef(null)

//   useEffect(() => {
//     const text = textRef.current
//     const chars = text.innerText.split('')
//     text.innerHTML = ''
//     chars.forEach((char, index) => {
//       const span = document.createElement('span')
//       span.textContent = char
//       span.style.opacity = '0'
//       text.appendChild(span)
//     })

//     gsap.to(text.children, {
//       opacity: 1,
//       duration: 0.1,  // Increased from 0.1
//       stagger: 0.1,   // Increased from 0.1
//       ease: "power1.inOut",
//       onComplete: () => {
//         gsap.to(text, {
//           scale: 1.1,
//           duration: 0.7,  // Increased from 0.5
//           ease: "power2.out",
//           yoyo: true,
//           repeat: 1
//         })
//       }
//     })
//   }, [])
//   return (
//     <div className="relative h-screen w-full">
//       <div className="relative z-10 h-full flex flex-col items-start justify-center">
//         {/* Your content goes here */}
//           <p ref={textRef} className="text-white rangile w-screen text-[16vw] text-center">HumaniText AI</p>

//         <Content />
//       </div>
//     </div>
//   )
// }

// export default Page


