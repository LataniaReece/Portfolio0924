import { ProjectType } from "../types/Project";

export default [
  {
    title: "Recipe Haven",
    description: `A dynamic recipe app built with Next.js, TypeScript, and Tailwind CSS, leveraging the Edamam API for real-time data. It integrates Supabase with PostgreSQL for managing users and saving favorites, and uses NextAuth with Google for secure authentication.`,
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Edamam API",
      "Supabase",
      "PostgreSQL",
      "NextAuth",
      "Google Authentication",
    ],
    liveLink: "https://recipe-nextjs-app.vercel.app/",
    githubLink: "https://github.com/LataniaReece/recipe-haven",
    image: "/assets/projectImgs/recipehaven.png",
  },
  {
    title: "Blog Fullstack App",
    description: `A responsive, full-stack blog app. Uses
        Node.js, Prisma, and PostgreSQL with React, Tailwind CSS and Framer Motion. Also manages state and data with
        Redux Toolkit and RTK Query.`,
    tags: [
      "Node",
      "PostgreSQL",
      "TypeScript",
      "React",
      "Redux Toolkit",
      "Tests",
      "Framer Motion",
    ],
    liveLink: "https://blog-fullstack-app-ui.vercel.app/",
    githubLink: "https://github.com/LataniaReece/blog_fullstack_app",
    image: "/assets/projectImgs/blogFullstack.png",
  },
  {
    title: "Notes App",
    description: `A sleek and dynamic frontend notes application that harnesses
        ReactQuill for rich text editing and Tailwind CSS for an
        intuitive, responsive design.`,
    tags: [
      "React",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
      "Playwright",
      "Unit Tests",
    ],
    liveLink: "https://latania-notesapp.netlify.app",
    githubLink: "https://github.com/LataniaReece/Notes-App",
    image: "/assets/projectImgs/notesApp.png",
  },
  {
    title: "MediaDB App",
    description: `A responsive frontend streaming app using the third-party API
        “themoviedb” for movie and TV data. Developed with React + TypeScript 
        using Context API for state management. Select components are also backed by 
        robust unit tests.`,
    tags: ["React", "JavaScript", "TypeScript", "Context API", "Unit Tests"],
    liveLink: "https://mediadb.netlify.app/",
    githubLink: "https://github.com/LataniaReece/MediaDB",
    image: "/assets/projectImgs/mediadb.png",
  },
  {
    title: "Budget App",
    description: `A responsive frontend budget app using react-chartjs-2 and 
        @mui/x-data-grid for data presentation. Built with React + TypeScript using 
        Context API for state management, and backed by robust unit tests.`,
    tags: [
      "React",
      "JavaScript",
      "TypeScript",
      "Context API",
      "react-chartjs-2",
      "Unit Tests",
    ],
    liveLink: "https://latania-budget-app.netlify.app/",
    githubLink: "https://github.com/LataniaReece/react-mui-budget-app",
    image: "/assets/projectImgs/budgetapp2023.png",
  },
] as ProjectType[];
