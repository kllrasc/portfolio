export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Klaire Rasche</h1>
        <p className="text-xl text-gray-600 mb-8">Full Stack Developer & Designer</p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Me
          </a>
          <a href="#projects" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
            View Projects
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="container mx-auto px-4 py-20 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-6">
            I&apos;m a passionate developer with a keen eye for design and a love for creating
            beautiful, functional web applications. With expertise in modern web technologies,
            I strive to build solutions that make a difference.
          </p>
          <p className="text-gray-600">
            When I&apos;m not coding, you can find me exploring new technologies, contributing to
            open-source projects, or sharing my knowledge with the developer community.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {['JavaScript', 'React', 'Node.js', 'TypeScript', 'HTML/CSS', 'Python', 'SQL', 'Git'].map((skill) => (
            <div key={skill} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <p className="text-gray-800 font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-20 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-bold text-gray-900">Senior Developer</h3>
            <p className="text-gray-600">Company Name • 2020 - Present</p>
            <p className="text-gray-600 mt-2">
              Led development of multiple web applications using React and Node.js.
              Implemented CI/CD pipelines and improved team productivity by 40%.
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-bold text-gray-900">Web Developer</h3>
            <p className="text-gray-600">Previous Company • 2018 - 2020</p>
            <p className="text-gray-600 mt-2">
              Developed and maintained client websites, focusing on responsive design
              and optimal user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                {/* Add project image here */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Project {project}</h3>
                <p className="text-gray-600 mb-4">
                  A brief description of the project and the technologies used.
                </p>
                <div className="flex gap-2">
                  <a href="#" className="text-blue-600 hover:text-blue-700">View Demo</a>
                  <a href="#" className="text-blue-600 hover:text-blue-700">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Me</h2>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Connect with me on social media</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
          </div>
          <p className="mt-8 text-gray-400">© 2024 Klaire Rasche. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
