import { useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import AnimatedSection from '../components/AnimatedSection'
import { projects } from '../data/projects'

function Home() {
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const breakpoint = width >= 1000 ? '>=1000px (varied layout)' : '<1000px (full width)'
      console.log(`Window width: ${width}px | Breakpoint: ${breakpoint}`)

      // Log computed width of first project card container
      const firstCard = document.querySelector('.project-layout-1, .project-layout-2, .project-layout-3')
      if (firstCard) {
        const computedWidth = window.getComputedStyle(firstCard).width
        const computedClasses = firstCard.className
        console.log(`First card computed width: ${computedWidth}`)
        console.log(`First card classes: ${computedClasses}`)
      }
    }

    handleResize() // Log on mount
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  // Define layout variations for each project
  const layouts = [
    { width: 'project-layout-1', align: 'justify-start' },
    { width: 'project-layout-2', align: 'justify-end' },
    { width: 'project-layout-3', align: 'justify-center' },
    { width: 'project-layout-4', align: 'justify-start' },
    { width: 'project-layout-5', align: 'justify-center' },
    { width: 'project-layout-6', align: 'justify-end' },
  ]

  return (
    <div className="px-6 py-8 md:px-12 space-y-12 md:space-y-16">
      {projects.map((project, index) => {
        const layout = layouts[index % layouts.length]
        return (
          <AnimatedSection key={project.id}>
            <div className={`flex ${layout.align}`}>
              <div className={layout.width}>
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  color={project.color}
                />
              </div>
            </div>
          </AnimatedSection>
        )
      })}
    </div>
  )
}

export default Home
