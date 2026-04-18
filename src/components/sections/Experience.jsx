import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Binary Semantics Pvt Ltd",
    role: "DevOps Engineer",
    period: "Sep 2025 – Present",
    description: [
      "Engineered cloud infrastructure on AWS using EKS and Terragrunt.",
      "Architected GitOps workflows using ArgoCD on Kubernetes, reducing manual deployment effort and improving release consistency.",
      "Optimized security posture using IAM and WIZ, ensuring compliance and reducing cloud security risks.",
      "Optimized data pipelines using Kinesis, Glue, and Athena, reducing query latency and storage costs via Parquet and partitioning."
    ]
  },
  {
    company: "GIIT Solutions",
    role: "DevOps & CloudOps Engineer",
    period: "June 2024 – Aug 2025",
    description: [
      "Engineered migration from SaltStack to Ansible across 250+ servers, reducing configuration drift and improving deployment consistency.",
      "Optimized infrastructure by migrating workloads from AMD to ARM-based instances, reducing compute costs by ~25–30% while maintaining performance.",
      "Maintained hybrid Linux and Windows environments supporting Python and .NET applications, improving operational stability.",
      "Architected multi-node Kubernetes provisioning using Terraform and Helm, reducing QA/Dev setup time by ~40%."
    ]
  },
  {
    company: "GYL Digital Solution Pvt. Ltd, Pune",
    role: "DevOps Engineer",
    period: "Aug 2023 – May 2024",
    description: [
      "Engineered CI/CD pipelines using Jenkins and Docker, improving deployment consistency and reducing manual effort.",
      "Automated operational tasks using Python and Bash, improving team productivity.",
      "Maintained infrastructure on AWS, reducing operational issues and improving system reliability."
    ]
  },
  {
    company: "Cognizant Technology Solutions, Bangalore",
    role: "Programmer Analyst",
    period: "Feb 2022 – Aug 2023",
    description: [
      "Engineered CI/CD pipelines using Jenkins, reducing deployment time and manual release errors.",
      "Containerized applications using Docker, improving deployment consistency across environments.",
      "Automated workflows using Python and Bash, reducing repetitive development tasks.",
      "Maintained MEAN stack applications, ensuring stable performance and deployment readiness."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            My professional journey managing cloud infrastructure and DevOps operations.
          </p>
        </div>

        <div className="relative space-y-8">
          {/* Main timeline line */}
          <div className="absolute left-0 md:left-[31px] top-0 bottom-0 w-px bg-border md:translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-12 md:pl-24 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-[24px] top-2 w-4 h-4 rounded-full border-2 border-primary bg-background z-10 group-hover:bg-primary transition-colors duration-300" />
              
              <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    <div className="text-primary font-semibold text-lg">{exp.company}</div>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm font-medium bg-muted/50 px-3 py-1 rounded-full border border-border w-fit">
                    <Calendar size={14} className="mr-2" />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-muted-foreground leading-relaxed">
                       <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 mr-3 flex-shrink-0" />
                       {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
