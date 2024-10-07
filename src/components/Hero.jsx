import React from 'react'
import { HERO_CONTENT } from '../constants'
import { motion } from "framer-motion"
import { Canvas } from '@react-three/fiber';
import Model from '../Model';
import { OrbitControls } from '@react-three/drei';




const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  },
})


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-ful lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.3)}
              initial="hidden"
              animate='visible'

              className="pb-16 text-6xl font-thin tracking-tight lg:mt-1 lg:text-8xl">Lokesh Vijayaraj</motion.h1>
            <motion.span variants={container(0.5)}
              initial="hidden"
              animate='visible'
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate='visible' className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">

          <Canvas style={{ height: '400px', width: '100%', background: 'lightgrey' }} camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[10, 10, 10]} />
            

            <Model />
            <OrbitControls />
          </Canvas>


        </div>
      </div>
    </div>
  )
}

export default Hero
