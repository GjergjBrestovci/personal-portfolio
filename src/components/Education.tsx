'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const educationData = [
  {
    year: "2020 - 2024",
    title: "Bachelor of Science in Computer Science",
    institution: "University Name",
    description: "Focused on software engineering, algorithms, and web technologies. Graduated with honors.",
    highlights: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "Web Development"]
  },
  {
    year: "2023",
    title: "Full Stack Web Development Bootcamp",
    institution: "Coding Bootcamp",
    description: "Intensive 6-month program covering modern web development technologies and best practices.",
    highlights: ["React & Next.js", "Node.js & Express", "Database Design", "Agile Development"]
  },
  {
    year: "2024",
    title: "AWS Cloud Practitioner",
    institution: "Amazon Web Services",
    description: "Certified in cloud computing fundamentals and AWS services.",
    highlights: ["Cloud Architecture", "Security", "Cost Optimization", "Deployment"]
  }
]

const certifications = [
  "AWS Cloud Practitioner",
  "Google Analytics Certified",
  "React Developer Certification",
  "TypeScript Fundamentals"
]

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="education" className="py-section px-6 bg-background-subtle" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education & Learning</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            My commitment to continuous learning and professional development
          </p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  {index < educationData.length - 1 && (
                    <div className="w-px h-24 bg-border mx-auto mt-4"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="bg-background rounded-xl p-6 border border-border-light shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                        <p className="text-accent font-medium">{item.institution}</p>
                      </div>
                      <div className="text-sm text-muted bg-background-subtle px-3 py-1 rounded-full border border-border-light mt-2 md:mt-0">
                        {item.year}
                      </div>
                    </div>
                    <p className="text-muted leading-relaxed mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <span 
                          key={highlight}
                          className="px-3 py-1 text-sm bg-accent-light text-accent rounded-full border border-accent/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-background rounded-xl p-6 border border-border-light shadow-sm"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                className="flex items-center space-x-3 p-3 rounded-lg bg-background-subtle border border-border-light"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <div className="inline-block p-6 bg-background rounded-xl border border-border-light">
            <div className="text-3xl font-bold text-accent mb-2">Learning Never Stops</div>
            <div className="text-muted">Currently exploring AI/ML and advanced React patterns</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
