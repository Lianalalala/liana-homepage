import React, { useState, useEffect } from 'react';

// --- Data ---
const projects = [
    {
        id: 1,
        title: 'Personal Portfolio',
        description: 'A responsive personal portfolio website built with React and Tailwind CSS.',
        tags: ['React', 'Tailwind', 'Vite'],
        link: '#',
    },
    {
        id: 2,
        title: 'E-commerce Dashboard',
        description: 'An admin dashboard for managing products, orders, and customers.',
        tags: ['Next.js', 'Typescript', 'Chart.js'],
        link: '#',
    },
    {
        id: 3,
        title: 'Task Manager App',
        description: 'A productivity app for tracking tasks and collaborating with teams.',
        tags: ['Vue', 'Firebase', 'Pinia'],
        link: '#',
    },
];

const skills = [
    'React', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Git', 'Vite', 'Responsive Design'
];

// --- Components ---

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ||
                (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);
    const scrollToSection = (id) => {
        setIsMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                            Liana
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item}
                                </button>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                                aria-label="Toggle Dark Mode"
                            >
                                {isDarkMode ? '☀️' : '🌙'}
                            </button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            aria-label="Open main menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                        {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                            >
                                {item}
                            </button>
                        ))}
                        <div className="px-3 py-2">
                            <button
                                onClick={toggleTheme}
                                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                            >
                                <span className="mr-2">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                                {isDarkMode ? '☀️' : '🌙'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
            <div className="text-center px-4">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
                    Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Liana</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                    Frontend Developer | UI/UX Enthusiast | Creative Thinker
                </p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-colors shadow-lg hover:shadow-purple-500/30"
                        aria-label="View Projects"
                    >
                        View Work
                    </button>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 font-medium rounded-full transition-colors"
                        aria-label="Contact Me"
                    >
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    );
}

function About() {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    I'm a passionate Frontend Developer based in Taiwan. I love building beautiful, responsive, and user-friendly websites.
                    My journey started with a curiosity for how things work on the web, and it has evolved into a career where I get to
                    blend creativity with technical problem-solving. When I'm not coding, you can find me exploring new coffee shops
                    or learning about the latest design trends.
                </p>
            </div>
        </section>
    );
}

function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100 dark:border-gray-700">
                            {/* Placeholder for project image if needed, using a gradient for now */}
                            <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400">
                                <span className="text-4xl">💻</span>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-semibold rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    className="inline-block text-center w-full py-2 border border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:text-white rounded-lg transition-colors font-medium"
                                    aria-label={`View ${project.title}`}
                                >
                                    View Details
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Skills() {
    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Skills & Technologies</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill) => (
                        <div key={skill} className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-200 font-medium shadow-sm border border-gray-200 dark:border-gray-700">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950">
            <div className="max-w-xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Get In Touch</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                    I'm currently open to new opportunities and collaborations.
                    Feel free to reach out if you have a project in mind or just want to say hi!
                </p>
                <a
                    href="mailto:liana@example.com"
                    className="inline-flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-colors shadow-lg"
                    aria-label="Send email to Liana"
                >
                    Say Hello 👋
                </a>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Liana. All rights reserved.</p>
        </footer>
    );
}

function App() {
    return (
        <div className="font-sans antialiased text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-950 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
