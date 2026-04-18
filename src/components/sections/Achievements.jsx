import { motion } from "framer-motion";
import { TrendingUp, Zap, Award, Server, ShieldCheck, Clock } from "lucide-react";

const achievements = [
  {
    icon: <TrendingUp size={32} className="text-green-500" />,
    stat: "25-30%",
    label: "Cloud Cost Reduction",
    delay: 0.1
  },
  {
    icon: <Clock size={32} className="text-blue-500" />,
    stat: "40%",
    label: "Faster Infrastructure Setup",
    delay: 0.2
  },
  {
    icon: <ShieldCheck size={32} className="text-yellow-500" />,
    stat: "100%",
    label: "Security Compliance (WIZ)",
    delay: 0.3
  },
  {
    icon: <Server size={32} className="text-purple-500" />,
    stat: "10+",
    label: "Handled Projects",
    delay: 0.4
  },
  {
    icon: <Award size={32} className="text-red-500" />,
    stat: "4+",
    label: "Years Experience",
    delay: 0.5
  }
];

export default function Achievements() {
  return (
    <section className="py-24 bg-primary dark:bg-primary/90 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white/10 dark:bg-black/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-purple-500/30 dark:bg-purple-900/30 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center text-white">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="flex flex-col items-center p-6 rounded-3xl hover:bg-white/5 transition-colors duration-300"
            >
              <div className="mb-6 p-5 glass rounded-2xl shadow-xl hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tighter drop-shadow-md">
                {item.stat}
              </h4>
              <p className="text-primary-foreground/80 font-medium text-sm md:text-base tracking-wide uppercase">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
