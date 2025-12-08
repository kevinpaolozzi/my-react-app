function ProjectCard({ title, category, image, color = '#333' }) {
  return (
    <div className="group cursor-pointer">
      <div
        className="aspect-[4/3] mb-4 overflow-hidden"
        style={{ backgroundColor: color }}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white/20 text-6xl font-bold">
              {title.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <h3 className="text-sm font-medium dark:text-white text-gray-900 mb-1">
        {title}
      </h3>
      <p className="text-sm dark:text-gray-400 text-gray-500">{category}</p>
    </div>
  )
}

export default ProjectCard
