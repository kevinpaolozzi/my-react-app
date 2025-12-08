function About() {
  return (
    <div className="px-6 py-8 md:px-12 max-w-2xl">
      <h1 className="text-2xl font-medium dark:text-white text-gray-900 mb-6">
        About
      </h1>
      <div className="space-y-4 dark:text-gray-300 text-gray-600">
        <p>
          I'm a designer focused on creating thoughtful brand identities and
          digital experiences. My work spans branding, UI/UX design, and
          visual systems.
        </p>
        <p>
          Each project is an opportunity to solve problems through design,
          balancing aesthetics with functionality to create work that is
          both beautiful and effective.
        </p>
        <p className="pt-4">
          <a
            href="mailto:hello@example.com"
            className="dark:text-white text-gray-900 underline underline-offset-4"
          >
            hello@example.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default About
