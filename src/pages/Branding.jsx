import ProjectCard from '../components/ProjectCard'
import AnimatedSection from '../components/AnimatedSection'
import { projects } from '../data/projects'

function Branding() {
  const brandingProjects = projects.filter(p => p.category === 'Branding')

  const layouts = [
    { width: 'w-full md:w-3/5', align: 'justify-end' },
    { width: 'w-full md:w-1/2', align: 'justify-start' },
    { width: 'w-full md:w-2/3', align: 'justify-center' },
  ]

  return (
    <div className="px-6 py-8 md:px-12 space-y-12 md:space-y-16">
      {brandingProjects.map((project, index) => {
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

export default Branding
