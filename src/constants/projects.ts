export const projects = [
  {
    id: "dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "A modern analytics platform that helps businesses track KPIs, revenue, subscriptions, and user engagement in real time.",
    tech: "Next.js · TypeScript · Tailwind CSS · Prisma · PostgreSQL",

    live: "https://dashboard-demo.com",
    github: "https://github.com/provash/dashboard",

    link:"/projects/dashboard",

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
    link:"/projects/foodwala",

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
    link:"/projects/nari-suraksha",
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

  {
    id: "log-analyzer",
    title: "Automated Log Analyzer",
    description:
      "An enterprise tool that processes server logs and generates actionable insights from large datasets.",

    tech: "Node.js · Express.js · MongoDB",

    live: "https://log-demo.com",
    github: "https://github.com/provash/log-analyzer",
    link: "/projects/log-analyzer",
    problem:
      "Analyzing large log files manually is time-consuming and error-prone.",

    goals: [
      "Automate log processing",
      "Detect anomalies",
      "Generate operational reports",
    ],

    highlights: [
      "Log upload system",
      "Error categorization",
      "Dashboard analytics",
    ],

    features: [
      "File parsing",
      "Pattern detection",
      "Log filtering",
      "Summary reports",
    ],

    architecture: ["Express backend", "MongoDB storage", "Analytics engine"],

    performance: ["Batch processing", "Efficient data aggregation"],

    security: ["File validation", "Access-controlled reports"],

    challenge: "Processing large files while maintaining fast response times.",

    learning: "Learned data processing and backend optimization techniques.",
  },

  {
    id: "taskflow",
    title: "Team Collaboration Platform",
    description:
      "A project management application inspired by Trello and Jira for tracking tasks and team productivity.",

    tech: "Next.js · TypeScript · Prisma · PostgreSQL",

    live: "https://taskflow-demo.com",
    github: "https://github.com/provash/taskflow",
    link: "/projects/taskflow",
    problem: "Distributed teams need better visibility into project progress.",

    goals: [
      "Improve team collaboration",
      "Track project status",
      "Manage workflows efficiently",
    ],

    highlights: ["Kanban board", "Drag-and-drop tasks", "Activity timeline"],

    features: [
      "Task assignments",
      "Project workspaces",
      "Comments",
      "Deadline tracking",
    ],

    architecture: ["Next.js frontend", "Prisma ORM", "PostgreSQL database"],

    performance: ["Optimistic UI updates", "Efficient data fetching"],

    security: ["Workspace permissions", "Protected APIs"],

    challenge: "Keeping task updates synchronized across users.",

    learning: "Learned collaborative application architecture.",
  },

  {
    id: "ecommerce",
    title: "Multi-Vendor E-commerce Platform",
    description:
      "A scalable online marketplace where multiple vendors can manage products and orders independently.",

    tech: "Next.js · Stripe · Prisma · PostgreSQL",

    live: "https://shop-demo.com",
    github: "https://github.com/provash/ecommerce",
    link: "/projects/ecommerce",

    problem:
      "Small businesses need a unified platform to sell products online.",

    goals: [
      "Support multiple vendors",
      "Enable secure payments",
      "Improve shopping experience",
    ],

    highlights: ["Vendor dashboard", "Stripe payments", "Order tracking"],

    features: [
      "Product management",
      "Shopping cart",
      "Checkout flow",
      "Order history",
    ],

    architecture: [
      "Next.js frontend",
      "Stripe integration",
      "Prisma ORM",
      "PostgreSQL database",
    ],

    performance: [
      "Image optimization",
      "Server-side rendering",
      "Caching strategies",
    ],

    security: ["Secure payments", "Authentication", "Role-based permissions"],

    challenge: "Managing complex vendor-product-order relationships.",

    learning: "Learned payment integration and scalable marketplace design.",
  },
];
