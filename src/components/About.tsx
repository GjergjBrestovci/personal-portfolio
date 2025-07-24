'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-section px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-lg leading-relaxed text-muted">
              <p>
                I&apos;m a developer who believes in the intersection of clean design and 
                robust functionality. My approach combines technical expertise with 
                a deep understanding of user needs.
              </p>
              <p>
                With a background in [Your Background], I bring a unique perspective 
                to every project, focusing on solutions that are both elegant and practical.
              </p>
              <p>
                I&apos;m constantly learning and exploring new technologies, driven by 
                curiosity and a commitment to continuous improvement.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-xl font-semibold mb-4">Current Focus</h4>
              <ul className="space-y-2 text-muted">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Full-stack web development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Modern React ecosystem
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  TypeScript & Node.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  User experience design
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Values</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-background-subtle rounded-lg border border-border-light">
                  <div className="text-2xl font-bold text-accent mb-2">Clean Code</div>
                  <div className="text-sm text-muted">Readable & Maintainable</div>
                </div>
                <div className="text-center p-4 bg-background-subtle rounded-lg border border-border-light">
                  <div className="text-2xl font-bold text-accent mb-2">User First</div>
                  <div className="text-sm text-muted">Intuitive Experiences</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
