// Edit this file to replace placeholder content with your own.

export const profile = {
  name: 'Kritkhachon Vanichakul',
  handle: 'Kritkhachon',
  role: 'Frontend Developer',
  roles: ['Frontend Developer'],
  education: 'Bangkok University (4th Year)',
  tagline: 'Turning designs into clean, responsive interfaces.',
  bio: "I build and ship production web apps for real clients \n— currently a 4th-year Information technology student at Bangkok University.",
  about:
    "I've spent time in the field as a Frontend Developer at Cosi (Center of Specialty Innovation), shipping production features end-to-end. Now in my 4th year studying Information Technology at Bangkok University, I bring that real-world experience into every project I build — from ConteX Skills, a learning platform with a full progress-tracking dashboard, to a community tourism site powered by a Go backend. React, Next.js, TypeScript, Tailwind, and a solid handle on REST/GraphQL APIs make up my toolkit, and I'm always adding to it.",
  email: 'kritkhachon.vani@bumail.net',
  resumeUrl: '#',
  social: {
    github: 'https://github.com/POPO112005',
    linkedin: 'https://www.linkedin.com/in/kritkhachon-vani/',
    email: 'mailto:kritkhachon.vani@bumail.net',
  },
}

export const skills = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'REST / GraphQL'],
  },
  {
    category: 'Tools & Cloud',
    items: ['Docker', 'AWS', 'Git', 'CI/CD', 'Linux'],
  },
]

export const projects = [
  {
    title: 'ConteX Skills',
    description:
      'A skill-development and learning platform that helps users build and track their skills.',
    highlights: [
      'Dashboard for tracking skill progress and learning milestones',
      'REST API and data layer built with PostgreSQL',
      'Built with Next.js, TypeScript, and Tailwind CSS, running on Bun',
    ],
    tech: ['Next.js', 'Bun', 'Tailwind CSS', 'TypeScript', 'PostgreSQL'],
    github: undefined as string | undefined,
    demo: 'https://1mobyspj.vercel.app/' as string | undefined,
    images: ['/1moby.png', '/1moby2.png', '/1moby3.png'],
  },
  {
    title: 'Tourism',
    description: 'Community tourism website',
    highlights: [
      'Highlights local community attractions and points of interest',
      'Go backend with Prisma handling data access',
      'Responsive UI built with React, TypeScript, and Tailwind CSS',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Bun', 'Go', 'Prisma'],
    github: undefined as string | undefined,
    demo: undefined as string | undefined,
    images: ['/tourism1.jpg', '/tourism2.jpg', '/tourism3.jpg', '/tourism4.jpg'],
  },
]

export const experience = [
  {
    role: 'Frontend Developer',
    company: 'Cosi (Center of Specialty Innovation)',
    period: '2025',
    points: [
      'Building and maintaining frontend features as part of the team.',
    ],
  },
  {
    role: 'Studying Computer Science / IT',
    company: 'Bangkok University',
    period: 'Present',
    points: ['Currently studying, with a focus on frontend and web development.'],
  },
]
