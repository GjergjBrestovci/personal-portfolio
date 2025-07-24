'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 80 }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 78 },
      { name: "GraphQL", level: 70 }
    ]
  },
  {
    category: "Tools & Others",
    technologies: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Figma", level: 85 },
      { name: "Testing", level: 80 }
    ]
  }
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="py-section px-6 bg-background-subtle" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Technologies I work with and continuously improve upon
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: groupIndex * 0.2 }}
              className="bg-background rounded-xl p-6 border border-border-light shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: (groupIndex * 0.2) + (techIndex * 0.1) }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{tech.name}</span>
                      <span className="text-sm text-muted">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-border-light rounded-full h-2">
                      <motion.div
                        className="h-2 bg-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${tech.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: (groupIndex * 0.2) + (techIndex * 0.1) + 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center space-x-8 p-6 bg-background rounded-xl border border-border-light">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">3+</div>
              <div className="text-sm text-muted">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-sm text-muted">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">∞</div>
              <div className="text-sm text-muted">Learning Mindset</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
