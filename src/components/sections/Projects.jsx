import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { ExternalLink, Database, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Secure AWS Architecture",
    description: "Designed a multi-VPC AWS architecture (Ingress, Egress, Inspection, Workloads) implementing North-South and East-West traffic control. Implemented Zero-Trust networking in private subnets and centralized traffic inspection.",
    tech: ["AWS", "VPC", "WIZ Compliance", "Zero-Trust"],
    metrics: ["100% WIZ Compliance", "Multi-VPC Setup"]
  },
  {
    title: "Real-Time Data Streaming Pipeline",
    description: "Implemented real-time ingestion pipeline using Kinesis Data Streams and Firehose, streaming IoT data into S3. Optimized storage via Parquet conversion and partitioned datasets for Athena querying.",
    tech: ["AWS Kinesis", "AWS Glue", "S3", "Athena"],
    metrics: ["Real-time Ingestion", "Storage Optimized"]
  },
  {
    title: "Legacy Migration: EC2 to ECS",
    description: "Engineered migration from EC2 to ECS Fargate, reducing operational overhead. Architected CI/CD pipelines using Azure DevOps for automated deployments to ECR and ECS with reusable Terraform modules.",
    tech: ["ECS Fargate", "Azure DevOps", "Terraform", "ECR"],
    metrics: ["Reduced Ops Overhead", "Automated CI/CD"]
  },
  {
    title: "Infrastructure Automation",
    description: "Migrated configuration management from SaltStack to Ansible across 250+ servers. Reduced configuration drift and manual effort by standardizing workflows using Ansible automation for Linux/Windows.",
    tech: ["Ansible", "SaltStack", "Linux", "Windows"],
    metrics: ["250+ Servers", "Zero Config Drift"]
  },
  {
    title: "Kubernetes Infrastructure Provisioning",
    description: "Architected infrastructure on Hetzner Cloud using Terraform. Deployed and managed a multi-node RKE2 cluster using Helm, running high-availability services like Galera MariaDB and MinIO.",
    tech: ["Kubernetes (RKE2)", "Terraform", "Helm", "Hetzner Cloud"],
    metrics: ["Multi-node RKE2", "HA Services"]
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(timer);
  }, [currentIndex]); // Resets timer when manually changed

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95
    })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
           <div className="max-w-2xl text-left">
             <div className="text-primary font-mono text-sm mb-4 uppercase tracking-[0.3em]">Portfolio</div>
             <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter">FEATURED <br /> <span className="text-gradient">PROJECTS.</span></h2>
           </div>
           
           <div className="flex gap-4">
              <button 
                onClick={() => paginate(-1)}
                className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => paginate(1)}
                className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg"
              >
                <ChevronRight size={24} />
              </button>
           </div>
        </div>

        <div className="relative h-[600px] md:h-[500px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}
              className="absolute inset-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-10 md:p-14 rounded-[3rem] bg-card border border-border/50 shadow-2xl h-full items-center">
                
                {/* Visual Icon Section */}
                <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
                   <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                      <Database size={48} />
                   </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-10 space-y-8">
                  <div className="space-y-4 text-left">
                     <h3 className="text-3xl md:text-5xl font-black text-foreground leading-tight tracking-tight">
                        {projects[currentIndex].title}
                     </h3>
                     <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                        {projects[currentIndex].description}
                     </p>
                  </div>

                  <div className="flex flex-wrap gap-4 items-center justify-between pt-4 border-t border-border/30">
                     <div className="flex flex-wrap gap-3">
                        {projects[currentIndex].metrics.map((m, i) => (
                          <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/5 border border-primary/20 text-primary text-sm font-bold">
                             <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                             {m}
                          </div>
                        ))}
                     </div>

                     <div className="flex flex-wrap gap-2">
                        {projects[currentIndex].tech.map((t, i) => (
                          <span key={i} className="text-[10px] font-mono font-bold text-muted-foreground px-3 py-1.5 rounded-lg border border-border bg-muted/30 uppercase">
                             {t}
                          </span>
                        ))}
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-12">
           {projects.map((_, i) => (
             <button
               key={i}
               onClick={() => {
                 setDirection(i > currentIndex ? 1 : -1);
                 setCurrentIndex(i);
               }}
               className={`h-2 rounded-full transition-all duration-500 ${
                 i === currentIndex ? "w-12 bg-primary" : "w-2 bg-border"
               }`}
             />
           ))}
        </div>
      </div>
    </section>
  );
}
