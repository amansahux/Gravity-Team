import React from 'react'

const LearnMoreBtn = () => {
  return (
    <div className="group relative inline-flex items-center justify-center overflow-hidden cursor-pointer">
            {/* Button Base */}
            <button className="relative z-10 cursor-pointer text-[1.1875rem] font-medium pl-4 pr-1  py-2 bg-transparent text-white transition-all duration-500 whitespace-nowrap">
              Learn More
            </button>

            {/* Animated Border Layer */}
            <span className="absolute inset-0 cursor-pointer border-b-[2px] border-transparent [border-image-source:linear-gradient(to_bottom_right,#665DCD,#5FA4E6,#D2AB67)] [border-image-slice:1] rounded-md"></span>

            {/* Arrow */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              className="ml-2 transition-transform duration-500 group-hover:translate-x-2 mx-3 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#665DCD">
                    <animate
                      attributeName="offset"
                      values="0;1;0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" stopColor="#D2AB67" />
                </linearGradient>
              </defs>
              <path
                d="M2 12H18M12 5l7 7-7 7"
                stroke="url(#grad)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Border Animation Layers */}
            <span className="absolute  cursor-pointer top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] transition-all duration-700 group-hover:w-1/2"></span>
            <span className="absolute cursor-pointer  top-0 right-0 h-[2px] w-0 bg-gradient-to-l from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] transition-all duration-700 group-hover:w-1/2"></span>
            <span className="absolute  cursor-pointer bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#665DCD] via-[#5FA4E6] to-[#D2AB67]"></span>
            <span className="absolute  cursor-pointer left-0 top-0 h-0 w-[2px] bg-gradient-to-b from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] transition-all duration-700 delay-300 group-hover:h-full"></span>
            <span className="absolute  cursor-pointer right-0 top-0 h-0 w-[2px] bg-gradient-to-b from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] transition-all duration-700 delay-300 group-hover:h-full"></span>
          </div>
  )
}

export default LearnMoreBtn
