import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, ExternalLinkIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

function App() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white transition-opacity duration-1000 ${
          heroInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Desmond Nana Adjei</h1>
            <p className="text-xl md:text-2xl mb-8">Full Stack Developer</p>
            <p className="text-lg md:text-xl mb-12 text-gray-200">
            Hello, I'm Desmond Nana Adjei!

I'm a Full-Stack Developer with a strong focus on JavaScript and expertise in both front-end and back-end technologies. Skilled in frameworks like React.js and Node.js, as well as database systems such as MongoDB, I create efficient, user-centered digital experiences. My projects span from building responsive interfaces to developing robust backend solutions, all while ensuring seamless functionality across the stack.

Take a look at my portfolio to see my approach to solving challenges and delivering impactful results. Let’s connect and bring your ideas to life together!.
            </p>
            <div className="flex justify-center space-x-4">
              <SocialLink href="https://github.com/nana0560" icon={<GithubIcon />} />
              <SocialLink href="https://www.linkedin.com/in/desmond-nana-adjei-0b7926268/" icon={<LinkedinIcon />} />
              <SocialLink href="desmondadjei370@gmail.com" icon={<MailIcon />} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        ref={projectsRef}
        className={`py-20 transition-opacity duration-1000 ${
          projectsInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        ref={skillsRef}
        className={`py-20 bg-white transition-opacity duration-1000 ${
          skillsInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={contactRef}
        className={`py-20 bg-gray-900 text-white transition-opacity duration-1000 ${
          contactInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
  >
    {icon}
  </a>
);

const ProjectCard = ({ title, description, image, tags, link }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-800"
      >
        View Project <ExternalLinkIcon className="ml-2 h-4 w-4" />
      </a>
    </div>
  </div>
);

const SkillCard = ({ name, level }) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <h3 className="font-semibold mb-2">{name}</h3>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-600 h-2 rounded-full"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const ContactForm = () => (
  <form className="space-y-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium mb-2">
        Name
      </label>
      <input
        type="text"
        id="name"
        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium mb-2">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium mb-2">
        Message
      </label>
      <textarea
        id="message"
        rows={4}
        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
      />
    </div>
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
    >
      Send Message
    </button>
  </form>
);

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with React and Node.js',
    image: 'https://i.pinimg.com/564x/95/68/b9/9568b94133c3da9dc19ec2fc0df78696.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: 'https://i.pinimg.com/736x/a4/d3/63/a4d363afcadeecfe6715632f69c91b1b.jpg',
    tags: ['React', 'Firebase', 'Material-UI', 'TypeScript'],
    link: 'https://github.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays forecast data from multiple sources',
    image: 'https://i.pinimg.com/564x/9a/52/2e/9a522e5398184a4fc87328e533e496ad.jpg',
    tags: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
    link: 'https://github.com',
  },
  {
    title: 'Social Media Analytics',
    description: 'A dashboard for tracking and analyzing social media metrics',
    image: 'https://i.pinimg.com/564x/eb/97/0d/eb970dcd33b28af270f7732a43d27e25.jpg',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    link: 'https://github.com',
  },
];

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Python', level: 70 },
  { name: 'SQL', level: 85 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Git', level: 80 },
];

export default App;