export const projects = [
  {
    id: "dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "A modern analytics platform that helps businesses track KPIs, revenue, subscriptions, and user engagement in real time.",
    tech: "Next.js · TypeScript · Tailwind CSS · Prisma · PostgreSQL",

    live: "https://dashboard-demo.com",
    github: "https://github.com/provash/dashboard",

    link: "/projects/dashboard",

    problem:
      "Growing SaaS companies need a centralized place to monitor business metrics and customer activity.",

    goals: [
      "Visualize key business metrics",
      "Track subscription growth",
      "Provide actionable insights through charts",
    ],

    highlights: [
      "Interactive KPI cards",
      "Real-time revenue tracking",
      "Advanced date-range filtering",
    ],

    features: [
      "Role-based dashboard",
      "Subscription analytics",
      "Custom chart reports",
      "Export reports to CSV",
    ],

    architecture: [
      "Next.js App Router",
      "Prisma ORM",
      "PostgreSQL database",
      "REST API integration",
    ],

    performance: [
      "Server-side rendering",
      "Optimized database queries",
      "Lazy-loaded charts",
    ],

    security: [
      "Protected routes",
      "Input validation",
      "Environment variable management",
    ],

    challenge: "Designing a data-heavy interface without overwhelming users.",

    learning:
      "Learned scalable dashboard architecture and performance optimization.",
  },

  {
    id: "foodwala",
    title: "Restaurant Management System",
    description:
      "A complete restaurant platform for managing orders, reservations, menus, and staff operations.",

    tech: "MERN Stack · JWT · MongoDB",

    live: "https://foodwala-demo.com",
    github: "https://github.com/provash/foodwala",
    link: "/projects/foodwala",

    problem:
      "Restaurants often rely on multiple disconnected systems for orders and reservations.",

    goals: [
      "Centralize restaurant operations",
      "Improve order tracking",
      "Simplify reservation management",
    ],

    highlights: [
      "Customer dashboard",
      "Admin management panel",
      "Real-time order status updates",
    ],

    features: [
      "Table reservations",
      "Online ordering",
      "Staff management",
      "Sales reporting",
    ],

    architecture: [
      "React frontend",
      "Express API",
      "MongoDB database",
      "JWT authentication",
    ],

    performance: ["Optimized API responses", "Database indexing"],

    security: ["JWT auth", "Password hashing", "Role-based access control"],

    challenge: "Synchronizing order updates across multiple user roles.",

    learning: "Learned role-based application design and scalable REST APIs.",
  },

  {
    id: "nari-suraksha",
    title: "Women's Safety Platform",
    description:
      "A safety-focused application that allows emergency alerts, location sharing, and incident reporting.",

    tech: "Next.js · Node.js · MongoDB",

    live: "https://safety-demo.com",
    github: "https://github.com/provash/nari-suraksha",
    link: "/projects/nari-suraksha",
    problem:
      "Emergency situations require fast communication and location sharing.",

    goals: [
      "Enable quick SOS alerts",
      "Improve emergency response",
      "Provide secure reporting tools",
    ],

    highlights: [
      "One-tap SOS",
      "Live location sharing",
      "Emergency contact notifications",
    ],

    features: [
      "Incident reporting",
      "Emergency alerts",
      "Location tracking",
      "Contact management",
    ],

    architecture: ["Next.js frontend", "Node.js backend", "MongoDB storage"],

    performance: ["Optimized location updates", "Fast notification delivery"],

    security: ["Secure authentication", "Encrypted communication"],

    challenge: "Balancing user privacy with real-time emergency features.",

    learning: "Learned secure handling of sensitive location-based data.",
  },
];
