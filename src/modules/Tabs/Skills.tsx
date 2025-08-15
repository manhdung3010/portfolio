"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: "🌐", color: "bg-orange-500" },
  { name: "CSS3", icon: "🎨", color: "bg-blue-500" },
  { name: "Bootstrap", icon: "🚀", color: "bg-purple-600" },
  { name: "TailwindCSS", icon: "🎨", color: "bg-cyan-500" },
  { name: "JavaScript", icon: "⚡", color: "bg-yellow-500" },
  { name: "TypeScript", icon: "📘", color: "bg-blue-600" },
  { name: "Vue.js", icon: "💚", color: "bg-green-500" },
  { name: "React.js", icon: "⚛️", color: "bg-cyan-500" },
  { name: "React Table", icon: "📊", color: "bg-blue-500" },
  { name: "React Hook Form", icon: "📋", color: "bg-pink-500" },
  { name: "React Router", icon: "🛣️", color: "bg-red-500" },
  { name: "Vite", icon: "⚡", color: "bg-purple-500" },
  { name: "Framer Motion", icon: "🎭", color: "bg-purple-600" },
  { name: "Redux", icon: "🔄", color: "bg-purple-600" },
  { name: "Astro.js", icon: "⭐", color: "bg-purple-500" },
  { name: "Next.js", icon: "▲", color: "bg-black" },
  { name: "Node.js", icon: "🟢", color: "bg-green-600" },
  { name: "Express.js", icon: "🚂", color: "bg-gray-600" },
  { name: "Go", icon: "🔵", color: "bg-blue-600" },
  { name: "PHP", icon: "🐘", color: "bg-purple-600" },
  { name: "Laravel", icon: "🔥", color: "bg-red-600" },
  { name: "Prisma", icon: "🔮", color: "bg-gray-800" },
  { name: "Kotlin", icon: "🟠", color: "bg-orange-600" },
  { name: "PostgreSQL", icon: "🐘", color: "bg-blue-600" },
  { name: "MySQL", icon: "🐬", color: "bg-blue-500" },
  { name: "MongoDB", icon: "🍃", color: "bg-green-600" },
  { name: "Firebase", icon: "🔥", color: "bg-orange-500" },
  { name: "Supabase", icon: "🟢", color: "bg-green-600" },
  { name: "Docker", icon: "🐳", color: "bg-blue-600" },
  { name: "AI", icon: "🤖", color: "bg-purple-600" },
  { name: "npm", icon: "📦", color: "bg-red-600" },
  { name: "Yarn", icon: "🧶", color: "bg-blue-500" },
  { name: "bun", icon: "🍞", color: "bg-orange-500" },
  { name: "Github", icon: "🐙", color: "bg-black" },
];

export default function Skills() {
  return (
    <div className="space-y-8">
      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 lg:gap-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center gap-2 p-2 lg:p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-200 cursor-pointer group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.02 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <div className={`w-8 h-8 lg:w-12 lg:h-12 ${skill.color} rounded-full flex items-center justify-center text-white text-sm lg:text-lg font-bold shadow-lg group-hover:shadow-xl transition-shadow`}>
              {skill.icon}
            </div>
            <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* GitHub Icon */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}