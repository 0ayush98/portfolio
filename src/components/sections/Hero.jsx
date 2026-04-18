import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Server, Database, Shield, Activity, Cloud } from "lucide-react";

const renderHoverText = (text, className = "") => (
  <span className={className}>
    {text.split("").map((char, index) => {
      if (char === " ") {
        return <span key={index}> </span>;
      }
      return (
        <span
          key={index}
          className="inline-block transition-transform duration-300 hover:scale-125 cursor-default"
        >
          {char}
        </span>
      );
    })}
  </span>
);

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize mouse position to range [-0.5, 0.5]
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  // Parallax transform multipliers
  const blob1X = useTransform(smoothX, [-0.5, 0.5], [-80, 80]);
  const blob1Y = useTransform(smoothY, [-0.5, 0.5], [-80, 80]);
  
  const blob2X = useTransform(smoothX, [-0.5, 0.5], [80, -80]);
  const blob2Y = useTransform(smoothY, [-0.5, 0.5], [80, -80]);

  const scrollTo = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-mesh"
    >
      {/* Immersive Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-white opacity-20" />
        
        {/* Floating Infrastructure Nodes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-primary/20 blur-[80px]"
            style={{
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              left: `${(i * 20) % 100}%`,
              top: `${(i * 30) % 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Human Message */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
               <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
               Ready for New Opportunities
            </div>
            
            <h1 className="text-6xl sm:text-7xl xl:text-8xl font-black text-foreground leading-[0.9] tracking-tighter">
              BUILDING <br />
              <span className="text-gradient">SCALABLE</span> <br />
              SOLUTIONS.
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed"
          >
            I build reliable <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-4">hybrid cloud infrastructure</span> that helps businesses grow. Experienced in managing complex systems and automating deployments at scale.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-6"
          >
            <button
              onClick={() => scrollTo('#projects')}
              className="px-8 py-5 bg-foreground text-background font-bold rounded-full hover:scale-105 transition-transform shadow-2xl shadow-foreground/20 group flex items-center gap-2"
            >
              See My Projects
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                →
              </motion.span>
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-8 py-5 glass-premium rounded-full font-bold hover:bg-white/5 transition-colors border-white/10"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Real-time stats ticker */}
          <div className="pt-12 grid grid-cols-3 gap-8 border-t border-border/50">
             {[
               { label: 'Projects Completed', value: '10+' },
               { label: 'Years Experience', value: '4+' },
               { label: 'Cloud Service', value: 'Global' }
             ].map((stat, i) => (
               <div key={i} className="space-y-1">
                 <div className="text-2xl font-black text-foreground">{stat.value}</div>
                 <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</div>
               </div>
             ))}
          </div>
        </div>

        {/* Right Side: Clean Cloud Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="lg:col-span-5 relative hidden lg:block"
        >
          <div className="relative h-[500px] w-full flex items-center justify-center">
             {/* Central Node */}
             <motion.div 
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ repeat: Infinity, duration: 4 }}
               className="w-32 h-32 rounded-3xl bg-primary/10 border border-primary/20 backdrop-blur-3xl flex items-center justify-center relative z-20 shadow-[0_0_50px_rgba(37,99,235,0.2)]"
             >
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white">
                   <Server size={32} />
                </div>
                {/* Orbiting circles */}
                <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
             </motion.div>

             {/* Orbiting Service Cards */}
             {[
               { icon: <Database />, label: "Database", delay: 0 },
               { icon: <Shield />, label: "Security", delay: 1 },
               { icon: <Activity />, label: "Monitoring", delay: 2 },
               { icon: <Cloud />, label: "Scaling", delay: 3 }
             ].map((service, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [Math.cos(i * 1.5) * 160, Math.cos(i * 1.5 + 0.2) * 160, Math.cos(i * 1.5) * 160],
                    y: [Math.sin(i * 1.5) * 160, Math.sin(i * 1.5 + 0.2) * 160, Math.sin(i * 1.5) * 160],
                  }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="absolute p-4 glass-premium rounded-2xl border border-white/10 flex items-center gap-3 z-30 shadow-xl"
                >
                  <div className="p-2 rounded-lg bg-white/5 text-primary">
                    {service.icon}
                  </div>
                  <span className="text-xs font-bold text-foreground/80">{service.label}</span>
                </motion.div>
             ))}

             {/* Connecting Lines (Decorative) */}
             <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 500 500">
                <circle cx="250" cy="250" r="160" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-primary" />
             </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
