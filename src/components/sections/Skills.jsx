import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { 
  Code2, 
  Database, 
  Server, 
  Wrench, 
  Activity,
  Cloud,
  Shield,
  Box,
  Terminal
} from "lucide-react";

const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    Icon: Cloud,
    skills: ["AWS (EKS, ECS, Kinesis)", "Azure", "Hetzner Cloud", "On-premises Servers"]
  },
  {
    title: "Infrastructure as Code",
    Icon: Wrench,
    skills: ["Terraform", "Terragrunt", "Ansible", "SaltStack"]
  },
  {
    title: "Containerization",
    Icon: Box,
    skills: ["Kubernetes (EKS, RKE2)", "Docker", "Helm", "ArgoCD (GitOps)"]
  },
  {
    title: "Security & Compliance",
    Icon: Shield,
    skills: ["IAM Governance", "Identity Centre", "Zero-Trust", "WIZ Compliance"]
  },
  {
    title: "Data & Analytics",
    Icon: Database,
    skills: ["Kinesis Firehose", "AWS Glue", "Athena (Parquet)", "Dynamic Partitioning"]
  },
  {
    title: "CI/CD & Monitoring",
    Icon: Activity,
    skills: ["Azure DevOps", "Jenkins", "GitLab", "Prometheus", "Grafana", "Zabbix"]
  },
  {
    title: "Languages & Scripting",
    Icon: Terminal,
    skills: ["Python", "Bash", "C++", "MEAN stack"]
  }
];

export default function Skills() {
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
    <section id="skills" className="py-32 bg-background relative px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-6">
               <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
               Expertise
            </div>
          <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter">TECHNICAL <br /> <span className="text-gradient">SKILLS.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="glass-premium p-8 rounded-[2rem] border border-white/5 group hover:border-primary/50 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <category.Icon size={28} />
                </div>
                <div className="flex gap-1">
                   {[...Array(3)].map((_, i) => (
                     <div key={i} className="w-1 h-3 rounded-full bg-border group-hover:bg-primary/50 transition-colors" />
                   ))}
                </div>
              </div>
              
              <h3 className="font-black text-xl mb-6 tracking-tight text-foreground/90">{category.title}</h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 text-sm font-light text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
          
          {/* Decorative CTA card */}
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="hidden xl:flex lg:col-span-1 glass-premium p-8 rounded-[2rem] border-dashed border-primary/30 flex-col items-center justify-center text-center gap-4 group"
          >
             <div className="text-lg font-bold text-foreground opacity-60">Looking for a DevOps Expert?</div>
             <button onClick={() => scrollTo('#contact')} className="text-primary font-bold hover:underline">Get In Touch →</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
