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
  // Define layout patterns - some single, some paired
  const layoutPatterns = [
    { type: 'single', width: 'project-layout-1', align: 'justify-start' },
    { type: 'pair' }, // Two thumbnails side by side
    { type: 'single', width: 'project-layout-3', align: 'justify-center' },
    { type: 'single', width: 'project-layout-6', align: 'justify-end' },
  ]

  const renderProjects = () => {
    const elements = []
    let projectIndex = 0

    while (projectIndex < projects.length) {
      const pattern = layoutPatterns[elements.length % layoutPatterns.length]

      if (pattern.type === 'pair' && projectIndex + 1 < projects.length) {
        // Render two projects side by side (on desktop) or stacked (on mobile)
        elements.push(
          <div key={`pair-${projectIndex}`} className="flex flex-col custom:flex-row gap-6 custom:gap-12 justify-center">
            <AnimatedSection className="w-full custom:w-2/5 custom:max-w-2xl">
              <ProjectCard
                title={projects[projectIndex].title}
                category={projects[projectIndex].category}
                image={projects[projectIndex].image}
                color={projects[projectIndex].color}
              />
            </AnimatedSection>
            <AnimatedSection className="w-full custom:w-2/5 custom:max-w-2xl">
              <ProjectCard
                title={projects[projectIndex + 1].title}
                category={projects[projectIndex + 1].category}
                image={projects[projectIndex + 1].image}
                color={projects[projectIndex + 1].color}
              />
            </AnimatedSection>
          </div>
        )
        projectIndex += 2
      } else {
        // Render single project
        const project = projects[projectIndex]
        elements.push(
          <AnimatedSection key={project.id}>
            <div className={`flex ${pattern.align}`}>
              <div className={pattern.width}>
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
        projectIndex += 1
      }
    }

    return elements
  }

  return (
    <div className="px-6 py-8 md:px-12 space-y-12 md:space-y-16">
      {renderProjects()}
    </div>
  )
}

export default Home
