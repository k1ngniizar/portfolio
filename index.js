const stacks = [
  "TYPESCRIPT",
  "REACT",
  "NEXT.JS",
  "TAILWIND CSS",
  "JAVASCRIPT",
  "HTML",
  "CSS",
  "NODE.JS",
  "EXPRESS.JS",
  "POSTGRESQL",
  "MONGODB",
  "GIT",
  "GITHUB",
];

const projects = [
  {
    color: "#14e0778d",
    img: "https://res.cloudinary.com/dh4kjwb0h/image/upload/v1788998129/affprop_kdio89.png",
    alt: "Affprop hero image with a bold text that reads monetize and discover premium properties effortlessly.",
    title: "AFFPROP",
    desc: "The modern real estate marketplace connecting sellers, buyers, and affiliate partners. Share verified listings and earn high commissions on every closing.",
    link: "https://affprop.vercel.app",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
  },
  {
    color: "#fff6ef",
    img: "https://res.cloudinary.com/dh4kjwb0h/image/upload/v1788871892/kuzzy_cryha9.png",
    alt: "Kuzzy about info image",
    title: "KUZZYLIFE STORE",
    desc: "Kuzzy Market Systems is a technology-powered marketplace that connects customers to trusted local businesses and independent operators.",
    link: "https://kuzzylife.com/about",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    color: "#F2F2EB",
    img: "https://res.cloudinary.com/dh4kjwb0h/image/upload/v1791313739/Screenshot_2026-10-06_195233_ngztws.png",
    alt: "Hero section image of Create Group website.",
    title: "Create Groups",
    desc: "Create groups let's you group people randomly whether it's just for a fun game, to share responsibilities, class grouping, debate teams, etc.",
    link: "https://k1ngniizar.github.io/match/",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    color: "#730c9c",
    img: "https://res.cloudinary.com/dh4kjwb0h/image/upload/v1788871891/wordchamps_hsmti8.png",
    alt: "wordchamps case study hero image",
    title: "WORDCHAMPS",
    desc: "A competitive word game platform designed to challenge and entertain. Players can challenge each other in real-time matches and climb the leaderboard to become the ultimate Wordchamp.",
    link: "https://works.bromuno.com/wordchamps-case",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    color: "#f5b59b",
    img: "https://res.cloudinary.com/dh4kjwb0h/image/upload/v1788871892/bromuno_knbsyx.png",
    alt: "Image of bromuno's hero section.",
    title: "BROMUNO",
    desc: "Contributed to the design and development of a responsive landing page and sub-pages for a Bromuno, focusing on translating the design into a clean, functional, and user-friendly web experience.",
    link: "https://works.bromuno.com/",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    color: "#ff5c35",
    img: "https://res.cloudinary.com/dh4kjwb0h/image/upload/v1792431066/Screenshot_2026-10-19_181812_o3blb9.png",
    alt: "Image of genfolio hero section.",
    title: "GENFOLIO",
    desc: "GenFolio is a browser-based portfolio studio for creating and exporting a personal portfolio.",
    link: "https://k1ngniizar.github.io/genfolio/",
    stack: ["HTML", "TypeScript", "Tailwind CSS"],
  },
  {
    color: "#eab24a",
    img: "https://res.cloudinary.com/dh4kjwb0h/image/upload/v1788873340/caphub_abcdoh.png",
    alt: "Hero section image of caphub's website.",
    title: "CAPHUB STORE",
    desc: "Built this simple gadget store as a production-like project while still learning and improving my skills. This project gave me more hands-on experience with TypeScript, Tailwind CSS, and Next.js, while also helping me better understand how to structure and build a real-world application.",
    link: "https://caphub-seven.vercel.app/",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    color: "#0b2434",
    img: "https://res.cloudinary.com/dh4kjwb0h/image/upload/v1788873340/tenzies_d0ztrn.png",
    alt: "Image of a simple tenzies game layout.",
    title: "TENZIES",
    desc: "A simple and fun browser game! Built this while following a  tutorial and learning the fundamentals of React.js. It was a great little project for getting hands-on with React concepts and understanding how they come together to build an interactive application.",
    link: "https://k1ngniizar.github.io/tenzies/",
    stack: ["React.js", "JavaScript", "Tailwind CSS"],
  },
];

const skillContainer = document.getElementById("skill-container");
const projectContainer = document.getElementById("project-container");

skillContainer.innerHTML = `
${stacks.map((stack) => `<p>${stack}</p>`).join("")}
${stacks.map((stack) => `<p>${stack}</p>`).join("")}
`;

projectContainer.innerHTML = `
${projects
  .map(
    (project, idx) => `
    <div
              style="border-color: ${project.color}"
              class="project-details-container ${idx % 2 ? "project-details-container-reverse" : ""}"
            >
              <div class="about-image">
                <img
                  src=${project.img}
                  alt=${project.alt}
                />
              </div>
              <article class="about-details">
                <div>
                    <h3 style="color: ${project.color}">${project.title}</h3>
                    <div>${project.stack.map((s) => `<span>${s}</span>`).join("")}</div>
                </div>
                <p>
                  ${project.desc}
                </p>
                <a target="_blank" href=${project.link}
                  >View project here...</a
                >
              </article>
            </div>
    `,
  )
  .join("")}
`;
