'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern, full-stack e-commerce solution built with Next.js, featuring real-time inventory management, secure payments, and an intuitive admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A clean, responsive weather application with location-based forecasts, interactive maps, and beautiful data visualizations.",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 4,
    title: "Personal Blog",
    description: "A modern blog platform with markdown support, search functionality, and optimized performance.",
    technologies: ["Next.js", "MDX", "Vercel", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/api/placeholder/600/400",
    featured: false
  }
]

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`group relative bg-background rounded-xl overflow-hidden border border-border-light shadow-sm hover:shadow-lg transition-all duration-300 ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-video bg-background-subtle flex items-center justify-center">
          <div className="text-muted">Project Image</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            href={project.liveUrl}
            className="p-2 bg-background rounded-full shadow-sm hover:bg-accent hover:text-white transition-colors"
            title="View Live"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a 
            href={project.githubUrl}
            className="p-2 bg-background rounded-full shadow-sm hover:bg-accent hover:text-white transition-colors"
            title="View Code"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-muted leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-sm bg-accent-light text-accent rounded-full border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Work = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="work" className="py-section px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            A selection of projects that showcase my skills and passion for creating 
            meaningful digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <a 
            href="#contact"
            className="btn btn-secondary inline-flex items-center"
          >
            View All Projects
            <motion.span
              className="ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Work
