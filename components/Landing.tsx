"use client"
import { motion } from "motion/react"
import { backgroundPatternStyle } from "@/constants";
import Link from "next/link";

const Landing = () => {
  return (
    <>
      <div className="h-full">
      <div 
        className="font-sans flex flex-col items-center justify-center p-4 md:p-8 text-black"
        style={backgroundPatternStyle}
      >
        {/* Hero Section */}
        <main className="w-full h-[68vh] max-w-9xl rounded-lg mx-auto flex-grow flex items-center">
          <motion.div 
            className="bg-white border-[3px] border-black shadow-[8px_8px_0px_#000] p-6 md:p-10 w-full rounded-lg"
            whileHover={{ boxShadow: '10px 10px 0px #000000', x: -2, y: -2 }}
            transition={{ duration: 0.1 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              
              {/* Left Column: Text Content */}
              <div className="flex flex-col justify-center">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 leading-none">
                  Build Your AI Teaching Companion.
                </h2>
                <p className="text-base md:text-lg text-gray-700 mb-8 max-w-xl">
                  Klasmic is a real-time AI-powered LMS to create and customize intelligent companions for learning, teaching, and tutoring. Your personal AI, your rules.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <motion.button 
                    className="font-mono text-lg bg-black text-white border-[3px] border-black shadow-[4px_4px_0px_#000] px-8 py-4 hover:bg-gray-800 transition-colors w-full sm:w-auto rounded-lg cursor-pointer"
                  >
                    <Link href={"/sign-in"}>
                      <div>
                        Start Building  
                      </div>
                    </Link>
                  </motion.button>
              
                </div>
              </div>

              {/* Right Column: Abstract AI Visual */}
              <div className="hidden lg:flex items-center justify-center h-full min-h-[350px] relative p-4">
                {/* Visual representation of AI modules */}
                <motion.div 
                  className="absolute w-48 h-48 bg-yellow-300 border-[3px] border-black shadow-[4px_4px_0px_#000] top-10 left-10 rounded-lg"
                  whileHover={{ rotate: 3 }}
                >
                   <span className="font-mono text-xs absolute top-2 left-2 bg-black text-white px-1 py-0.5 rounded-md">[SCIENCE_TUTOR]</span>
                </motion.div>
                <motion.div 
                  className="absolute w-56 h-32 bg-gray-100 border-[3px] border-black shadow-[4px_4px_0px_#000] bottom-12 right-8 rounded-lg"
                  whileHover={{ rotate: -2 }}
                >
                   <span className="font-mono text-xs absolute top-2 left-2 bg-black text-white px-1 py-0.5 rounded-md">{'{TEACHING_COMPANION}'}</span>
                </motion.div>
                <motion.div 
                  className="absolute w-32 h-32 bg-white border-[3px] border-black shadow-[4px_4px_0px_#000] top-24 right-20 rounded-lg"
                  whileHover={{ rotate: 6 }}
                >
                   <span className="font-mono text-xs absolute bottom-2 right-2 bg-black text-white px-1 py-0.5 rounded-md">HISTORIAN</span>
                </motion.div>
                 <motion.div 
                  className="absolute w-30 h-20 bg-black border-[3px] border-black shadow-[4px_4px_0px_#000] bottom-8 left-16 rounded-lg"
                  whileHover={{ rotate: -4 }}
                 >
                   <span className="font-mono text-xs absolute top-2 left-2 text-white">MATHEMATICIAN</span>
                 </motion.div>
              </div>
            </div>
          </motion.div>
        </main>

        {/* Marquee Section */}
        <footer className="w-full max-w-7xl mx-auto mt-12">
          <div className="font-mono text-lg bg-transparent overflow-hidden py-3 border-t-[3px] border-b-[3px] border-black">
            <motion.div 
              className="flex"
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                ease: 'linear',
                duration: 30,
                repeat: Infinity,
              }}
            >
              <span className="mx-4 flex-shrink-0">REAL-TIME LEARNING</span> &bull;
              <span className="mx-4 flex-shrink-0">CUSTOMIZABLE AI</span> &bull;
              <span className="mx-4 flex-shrink-0">INTELLIGENT TUTORING</span> &bull;
              <span className="mx-4 flex-shrink-0">FOR EDUCATORS</span> &bull;
              <span className="mx-4 flex-shrink-0">FOR STUDENTS</span> &bull;
              <span className="mx-4 flex-shrink-0">POWERED BY KLASMIC</span> &bull;
              <span className="mx-4 flex-shrink-0">REAL-TIME LEARNING</span> &bull;
              <span className="mx-4 flex-shrink-0">CUSTOMIZABLE AI</span> &bull;
              <span className="mx-4 flex-shrink-0">INTELLIGENT TUTORING</span> &bull;
              <span className="mx-4 flex-shrink-0">FOR EDUCATORS</span> &bull;
              <span className="mx-4 flex-shrink-0">FOR STUDENTS</span> &bull;
              <span className="mx-4 flex-shrink-0">POWERED BY KLASMIC</span> &bull;
            </motion.div>
          </div>
        </footer>
      </div>
      </div>
    </>
  );
}

export default Landing