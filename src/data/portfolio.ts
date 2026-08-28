// Edit this file to replace placeholder content with your own.
// Language-independent fields (handle, contact info) live in `profile`.
// Everything user-facing that should switch between English and Thai
// (including the display name) lives in `content.en` / `content.th`
// with the same shape.

import type { Language } from '../i18n/language'

export const profile = {
  handle: 'Kritkhachon',
  email: 'kritkhachon.vani@bumail.net',
  resumeUrl: '#',
  social: {
    github: 'https://github.com/POPO112005',
    linkedin: 'https://www.linkedin.com/in/kritkhachon-vani/',
    email: 'mailto:kritkhachon.vani@bumail.net',
  },
}

interface SkillGroup {
  category: string
  items: string[]
}

interface ProjectContent {
  title: string
  description: string
  highlights: string[]
  tech: string[]
  github?: string
  demo?: string
  images: string[]
}

interface ExperienceItem {
  role: string
  company: string
  companyUrl?: string
  period: string
  points: string[]
}

export interface Content {
  name: string
  role: string
  roles: string[]
  tagline: string
  bio: string
  about: string
  education: string
  nav: {
    about: string
    skills: string
    projects: string
    experience: string
    contact: string
    resume: string
  }
  sectionTitles: {
    about: string
    skills: string
    projects: string
    experience: string
    contact: string
  }
  hero: {
    greeting: string
    viewProjects: string
    contactMe: string
  }
  aboutLabels: {
    education: string
    experience: string
  }
  skills: SkillGroup[]
  projects: ProjectContent[]
  experience: ExperienceItem[]
  contact: {
    sayHello: string
  }
  footer: {
    builtBy: string
    stack: string
  }
  projectModal: {
    techUsed: string
    keyboardHint: string
    code: string
    liveDemo: string
    close: string
    prevImage: string
    nextImage: string
    goToImage: string
    viewScreenshots: string
  }
}

export const content: Record<Language, Content> = {
  en: {
    name: 'Kritkhachon Vanichakul',
    role: 'Frontend Developer',
    roles: ['Frontend Developer'],
    tagline: 'Turning designs into clean, responsive interfaces.',
    bio: "I build and ship production web apps for real clients \n— currently a 4th-year Information technology student at Bangkok University.",
    about:
      "I've spent time in the field as a Frontend Developer at Cosi (Center of Specialty Innovation), shipping production features end-to-end. Now in my 4th year studying Information Technology at Bangkok University, I bring that real-world experience into every project I build — from ConteX Skills, a learning platform with a full progress-tracking dashboard, to a community tourism site powered by a Go backend. React, Next.js, TypeScript, Tailwind, and a solid handle on REST/GraphQL APIs make up my toolkit, and I'm always adding to it.",
    education: 'Bangkok University (4th Year)',
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      resume: 'Resume',
    },
    sectionTitles: {
      about: 'About Me',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Get In Touch',
    },
    hero: {
      greeting: "Hi, I'm",
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
    },
    aboutLabels: {
      education: 'Education',
      experience: 'Experience',
    },
    skills: [
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
    ],
    projects: [
      {
        title: '1MOBY',
        description:
          'A skill-development and learning platform that helps employees in companies build and track their skills.',
        highlights: [
          'Dashboard for tracking skill progress and learning milestones',
          'REST API and data layer built with PostgreSQL',
          'Built with Next.js, TypeScript, and Tailwind CSS, running on Bun',
        ],
        tech: ['Next.js', 'Bun', 'Tailwind CSS', 'TypeScript', 'PostgreSQL'],
        github: undefined,
        demo: 'https://1mobyspj.vercel.app/',
        images: ['/1moby.png', '/1moby2.png', '/1moby3.png'],
      },
      {
        title: 'Tourism',
        description: 'Help recommend tourist attractions in the community to website visitors.',
        highlights: [
          'You can see the colored dots on the map to indicate the type of tourist attractions in each region.',
          'Go backend with Prisma handling data access',
          'Responsive UI built with React, TypeScript, and Tailwind CSS',
        ],
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Bun', 'Go', 'Prisma'],
        github: undefined,
        demo: undefined,
        images: ['/tourism1.jpg', '/tourism2.jpg', '/tourism3.jpg', '/tourism4.jpg'],
      },
    ],
    experience: [
      {
        role: 'Frontend Developer',
        company: 'Cosi (Center of Specialty Innovation)',
        companyUrl: 'https://cosi.bu.ac.th/',
        period: '2025',
        points: ['Building and maintaining frontend features as part of the team.'],
      },
      {
        role: 'Studying Computer Science / IT',
        company: 'Bangkok University',
        period: 'Present',
        points: ['Currently studying, with a focus on frontend and web development.'],
      },
    ],
    contact: {
      sayHello: 'Say Hello',
    },
    footer: {
      builtBy: 'Built by',
      stack: 'React · TypeScript · Vite',
    },
    projectModal: {
      techUsed: 'Tech used',
      keyboardHint: 'Use ← → keys or click thumbnails to navigate',
      code: 'Code',
      liveDemo: 'Live demo',
      close: 'Close',
      prevImage: 'Previous image',
      nextImage: 'Next image',
      goToImage: 'Go to image',
      viewScreenshots: 'View screenshots',
    },
  },
  th: {
    name: '\nกริชขจร\nวณิชกุล',
    role: 'นักพัฒนาเว็บฟรอนต์เอนด์',
    roles: ['นักพัฒนาเว็บฟรอนต์เอนด์'],
    tagline: 'เปลี่ยนดีไซน์ให้กลายเป็นหน้าเว็บที่ใช้งานได้จริง',
    bio: 'ผมสร้างและส่งมอบเว็บแอปพลิเคชันจริงให้ลูกค้า \n— ปัจจุบันกำลังศึกษาชั้นปีที่ 4 สาขาเทคโนโลยีสารสนเทศ ที่มหาวิทยาลัยกรุงเทพ',
    about:
      'ผมเคยลงสนามจริงในตำแหน่ง Frontend Developer ที่ Cosi (Center of Specialty Innovation) ดูแลฟีเจอร์หน้าบ้านตั้งแต่ต้นจนจบ ตอนนี้กำลังศึกษาชั้นปีที่ 4 สาขาเทคโนโลยีสารสนเทศ ที่มหาวิทยาลัยกรุงเทพ และนำประสบการณ์ตรงนั้นมาใช้ในทุกโปรเจกต์ที่สร้าง — ตั้งแต่ 1moby แพลตฟอร์มเรียนรู้ที่มีแดชบอร์ดติดตามความก้าวหน้าแบบเต็มรูปแบบ ไปจนถึงเว็บไซต์ท่องเที่ยวชุมชนที่ขับเคลื่อนด้วย Go backend เครื่องมือหลักของผมคือ React, Next.js, TypeScript, Tailwind และมีพื้นฐาน REST/GraphQL API ที่แน่น และยังคงพัฒนาต่อเนื่องเสมอ',
    education: 'มหาวิทยาลัยกรุงเทพ (ปี 4)',
    nav: {
      about: 'เกี่ยวกับ',
      skills: 'ทักษะ',
      projects: 'โปรเจกต์',
      experience: 'ประสบการณ์',
      contact: 'ติดต่อ',
      resume: 'เรซูเม่',
    },
    sectionTitles: {
      about: 'เกี่ยวกับฉัน',
      skills: 'ทักษะ',
      projects: 'โปรเจกต์',
      experience: 'ประสบการณ์',
      contact: 'ติดต่อฉัน',
    },
    hero: {
      greeting: 'สวัสดีครับ ผม',
      viewProjects: 'ดูโปรเจกต์',
      contactMe: 'ติดต่อฉัน',
    },
    aboutLabels: {
      education: 'การศึกษา',
      experience: 'ประสบการณ์',
    },
    skills: [
      {
        category: 'ภาษาโปรแกรม',
        items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL'],
      },
      {
        category: 'ฟรอนต์เอนด์',
        items: ['React', 'Next.js', 'Vite', 'Tailwind CSS'],
      },
      {
        category: 'แบ็กเอนด์',
        items: ['Node.js', 'Express', 'PostgreSQL', 'REST / GraphQL'],
      },
      {
        category: 'เครื่องมือ & คลาวด์',
        items: ['Docker', 'AWS', 'Git', 'CI/CD', 'Linux'],
      },
    ],
    projects: [
      {
        title: '1MOBY',
        description: 'แพลตฟอร์มพัฒนาและติดตามทักษะที่ช่วยให้พนักงานในบริษัทสร้างและติดตามทักษะของตัวเอง',
        highlights: [
          'แดชบอร์ดสำหรับติดตามความก้าวหน้าและเป้าหมายการเรียนรู้',
          'REST API และชั้นข้อมูลที่สร้างด้วย PostgreSQL',
          'พัฒนาด้วย Next.js, TypeScript และ Tailwind CSS รันบน Bun',
        ],
        tech: ['Next.js', 'Bun', 'Tailwind CSS', 'TypeScript', 'PostgreSQL'],
        github: undefined,
        demo: 'https://1mobyspj.vercel.app/',
        images: ['/1moby.png', '/1moby2.png', '/1moby3.png'],
      },
      {
        title: 'Tourism',
        description: 'เว็บไซต์แนะนำสถานที่ท่องเที่ยวในชุมชนให้กับผู้เข้าชม',
        highlights: [
          'มีจุดสีบนแผนที่บอกประเภทของสถานที่ท่องเที่ยวในแต่ละพื้นที่',
          'Go backend ทำงานร่วมกับ Prisma สำหรับจัดการข้อมูล',
          'UI ที่ตอบสนองทุกขนาดหน้าจอ พัฒนาด้วย React, TypeScript และ Tailwind CSS',
        ],
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Bun', 'Go', 'Prisma'],
        github: undefined,
        demo: undefined,
        images: ['/tourism1.jpg', '/tourism2.jpg', '/tourism3.jpg', '/tourism4.jpg'],
      },
    ],
    experience: [
      {
        role: 'นักพัฒนาเว็บฟรอนต์เอนด์',
        company: 'Cosi (Center of Specialty Innovation)',
        companyUrl: 'https://cosi.bu.ac.th/',
        period: '2025',
        points: ['สร้างและดูแลฟีเจอร์หน้าบ้านในฐานะส่วนหนึ่งของทีม'],
      },
      {
        role: 'กำลังศึกษาวิทยาการคอมพิวเตอร์ / เทคโนโลยีสารสนเทศ',
        company: 'มหาวิทยาลัยกรุงเทพ',
        period: 'ปัจจุบัน',
        points: ['กำลังศึกษาอยู่ โดยเน้นด้านฟรอนต์เอนด์และการพัฒนาเว็บ'],
      },
    ],
    contact: {
      sayHello: 'ทักทายฉันสิ',
    },
    footer: {
      builtBy: 'สร้างโดย',
      stack: 'React · TypeScript · Vite',
    },
    projectModal: {
      techUsed: 'เทคโนโลยีที่ใช้',
      keyboardHint: 'ใช้ปุ่ม ← → หรือคลิกที่ภาพตัวอย่างเพื่อดูรูปอื่น',
      code: 'โค้ด',
      liveDemo: 'ดูตัวอย่าง',
      close: 'ปิด',
      prevImage: 'รูปก่อนหน้า',
      nextImage: 'รูปถัดไป',
      goToImage: 'ไปที่รูปที่',
      viewScreenshots: 'ดูภาพหน้าจอ',
    },
  },
}
