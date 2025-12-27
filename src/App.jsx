import React, { useState, useEffect } from 'react';
import projectGenz from './assets/project-genz.png';
import projectOrange from './assets/project-orange.png';
import projectDelulu from './assets/project-delulu.png';
import profileImg from './assets/profile.jpg';

// --- Data ---
const projects = [
    {
        id: 1,
        title: 'Gen Z and marriage',
        description: 'Researching the Impact of Social Media Content Exposure on Taiwanese Gen Z’s Marital Attitudes and Intentions to Marry',
        tags: ['Social Science', 'Marriage', 'Social Media'],
        link: 'https://drive.google.com/file/d/1s1tPBZvwt4i397tC3BMlc8uKzmuhAqZN/view?usp=sharing',
        image: projectGenz,
    },
    {
        id: 2,
        title: 'Classification Analysis',
        description: 'Use Orange to explore and process student data and health check-up data, Then build Tree, Naïve Bayes, and KNN classifiers.',
        tags: ['Orange', 'Data Analysis', 'ML'],
        link: 'https://drive.google.com/file/d/1v6TJPIPCmHi3lEgAIztOeG6-sWzggLh3/view?usp=sharing',
        image: projectOrange,
    },
    {
        id: 3,
        title: 'Delulu',
        description: 'A web app that turns uploaded chat logs into date ideas, conversation topics, and a rough engagement/interest trend.',
        tags: ['Vibe Coding'],
        link: 'https://drive.google.com/file/d/1DiWose8P5_3Se-fq-GPxnvubx6wf_1s-/view?usp=sharing',
        image: projectDelulu,
    },
];

const education = [
    {
        id: 1,
        degree: 'BS, Bio-Industry Communication and Development',
        school: 'National Taiwan University',
        period: '2023 - Present',
        description: 'Focus on social media marketing, media studies, and sustainable development communication.'
    }
];

const volunteerExperience = [
    {
        id: 1,
        role: 'Volunteer',
        organization: 'NTU Veteran Service Club',
        period: '2024 Summer',
        description: 'Taught Chinese at Peiying High School in northern Thailand; conducted veteran outreach and documented interviews in the northern Thailand region.'
    },
    {
        id: 2,
        role: 'Director of Fire Dancing Club',
        organization: 'NTU&NTUST&NTNU Fire Dancing Club',
        period: '2023-2024',
        description: 'Led a 10 person team to sustain day-to-day operations for a 50 member community while actively promoting fire performance events. Through resource coordination and fundraising/partnership initiatives, increased available club funds from approximately NTD 90,000 to about NTD 150,000 (60% increase), strengthening the club’s operational and event capabilities for the next leadership term.'
    }
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
        <nav className="fixed top-0 w-full z-50 bg-[#F8F5F1]/90 backdrop-blur-md border-b border-[#EFE6DE] transition-colors duration-300">
            <div className="w-full px-6 lg:px-16">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
                        <span className="text-2xl font-bold text-[#8C534D]">
                            Liana's Homepage
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="text-[#5D4E46] hover:text-[#8C534D] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item}
                                </button>
                            ))}
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
                        {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                            >
                                {item}
                            </button>
                        ))}
                        <div className="px-3 py-2">
                            <button
                                onClick={toggleTheme}
                                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400"
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
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-[#F8F5F1] via-[#EFE6DE] to-[#D6B1AE]"
        >
            <div className="text-center px-4">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-[#43342E]">
                    Hi, I'm Liana
                </h1>
                <p className="text-xl md:text-2xl text-[#5D4E46] mb-8 max-w-2xl mx-auto font-medium">
                    Media & Marketing | Data & Storytelling | Volunteering
                </p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 bg-[#8C534D] hover:bg-[#75423d] text-white font-medium rounded-full transition-colors shadow-lg hover:shadow-[#8C534D]/30"
                        aria-label="View Projects"
                    >
                        View Work
                    </button>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 border-2 border-[#8C534D] text-[#8C534D] hover:bg-[#8C534D] hover:text-white font-medium rounded-full transition-colors"
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
        <section id="about" className="py-20 bg-[#F8F5F1]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Column */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative aspect-square w-80 md:w-full max-w-md rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 border-4 border-[#EFE6DE]">
                            <img
                                src={profileImg}
                                alt="Liana"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-bold mb-8 text-[#43342E]">About Me</h2>
                        <div className="text-lg text-[#5D4E46] leading-relaxed space-y-6">
                            <p>
                                Hi, I’m Liana. I’m currently a student in the Department of Bio-Industry Communication and Development at National Taiwan University.
                            </p>
                            <p>
                                My main areas of study are social media marketing and media studies. I’ve worked on a wide range of projects—from building predictive models with data, to sustainability (ESG) proposals. I’m also interested in communication, including science communication, misinformation. You can check out my work in the ''
                                <button
                                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="text-[#8C534D] hover:text-[#75423D] hover:underline font-bold focus:outline-none"
                                >
                                    project
                                </button>
                                '' section.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Projects() {
    return (
        <section id="projects" className="py-20 bg-[#EFE6DE]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-12 text-center text-[#43342E]">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-[#FDFBF7] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#EFE6DE] flex flex-col">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-2 text-[#43342E]">{project.title}</h3>
                                <p className="text-[#5D4E46] mb-4 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-[#EFE6DE] text-[#5D4E46] text-xs font-semibold rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-center w-full py-2 border border-brand-600 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white dark:hover:text-white rounded-lg transition-colors font-medium"
                                    aria-label={`View PDF for ${project.title}`}
                                >
                                    View PDF
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Experience() {
    return (
        <section id="experience" className="py-20 bg-[#F8F5F1]">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-[#43342E]">My Experience</h2>

                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-[#8C534D]">Education</h3>
                    <div className="relative border-l-2 border-[#EFE6DE] ml-3 space-y-10">
                        {education.map((item) => (
                            <div key={item.id} className="mb-10 ml-8 relative">
                                <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#FDFBF7] ring-4 ring-[#F8F5F1]">
                                    <span className="h-3 w-3 rounded-full bg-[#8C534D]"></span>
                                </span>
                                <h4 className="flex flex-col sm:flex-row sm:items-center text-lg font-semibold text-[#43342E]">
                                    {item.degree}
                                </h4>
                                <span className="text-sm text-[#5D4E46] mb-2 block">
                                    {item.school} | {item.period}
                                </span>
                                <p className="text-[#5D4E46]">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-8 text-[#8C534D]">Volunteer & Club</h3>
                    <div className="relative border-l-2 border-[#EFE6DE] ml-3 space-y-10">
                        {volunteerExperience.map((item) => (
                            <div key={item.id} className="mb-10 ml-8 relative">
                                <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#FDFBF7] ring-4 ring-[#F8F5F1]">
                                    <span className="h-3 w-3 rounded-full bg-[#8C534D]"></span>
                                </span>
                                <h4 className="flex flex-col sm:flex-row sm:items-center text-lg font-semibold text-[#43342E]">
                                    {item.role}
                                </h4>
                                <span className="text-sm text-[#5D4E46] mb-2 block">
                                    {item.organization} | {item.period}
                                </span>
                                <p className="text-[#5D4E46]">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

function Contact() {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('lianapeg2021@gmail.com');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-20 bg-[#EFE6DE]">
            <div className="max-w-xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8 text-[#43342E]">Contact Me</h2>
                <p className="text-[#5D4E46] mb-8">
                    If you are interested in my projects or have any questions, feel free to reach out! Open to connecting and sharing ideas.
                </p>
                <div className="flex justify-center gap-8">
                    <button
                        onClick={handleCopy}
                        className="text-[#5D4E46] hover:text-[#8C534D] transition-colors flex flex-col items-center gap-2 group cursor-pointer"
                        aria-label="Copy Email"
                    >
                        <div className="p-4 bg-[#FDFBF7] rounded-full shadow-md group-hover:shadow-lg transition-all border border-white relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className={`transition-opacity duration-300 ${isCopied ? 'opacity-0' : 'opacity-100'}`}
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className={`absolute top-4 left-4 text-[#8C534D] transition-opacity duration-300 ${isCopied ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <path d="M20 6 9 17l-5-5" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium">{isCopied ? 'Copied!' : 'Email'}</span>
                    </button>

                    <a
                        href="http://linkedin.com/in/lianapeng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#5D4E46] hover:text-[#8C534D] transition-colors flex flex-col items-center gap-2 group"
                        aria-label="LinkedIn"
                    >
                        <div className="p-4 bg-[#FDFBF7] rounded-full shadow-md group-hover:shadow-lg transition-all border border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium">LinkedIn</span>
                    </a>

                    <a
                        href="https://www.instagram.com/_lianang?igsh=MXg2ZDlkdTU5d2p5aQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#5D4E46] hover:text-[#8C534D] transition-colors flex flex-col items-center gap-2 group"
                        aria-label="Instagram"
                    >
                        <div className="p-4 bg-[#FDFBF7] rounded-full shadow-md group-hover:shadow-lg transition-all border border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium">Instagram</span>
                    </a>
                </div>
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
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
