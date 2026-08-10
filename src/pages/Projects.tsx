import {
  Code2,
  GitBranch,
  Globe,
  LockKeyhole,
  SearchCheck,
  Server,
} from "lucide-react";

import ScrollReveal from "../components/ScrollReveal";
import ProjectCaseStudy from "../components/ProjectCaseStudy";

function Projects() {
  return (
    <ScrollReveal>
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="relative overflow-hidden bg-[#050914] py-12 text-white sm:py-16 lg:py-20"
      >
        {/* =====================================================
            Background
            ===================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-1/2 top-20 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-500/[0.025] blur-3xl sm:top-24 sm:h-80 sm:w-80" />

          <div className="absolute bottom-24 right-0 h-48 w-48 rounded-full bg-purple-500/[0.018] blur-3xl sm:bottom-32 sm:h-64 sm:w-64" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* =====================================================
              Header
              ===================================================== */}

          <div className="mb-8 flex scroll-mt-32 flex-col justify-between gap-5 border-b border-white/[0.07] pb-7 sm:mb-10 sm:gap-7 sm:pb-8 lg:mb-12 lg:flex-row lg:items-end lg:pb-10">
            <div className="min-w-0">
              {/* Section marker */}

              <div className="mb-3.5 flex items-center gap-3 sm:mb-4 sm:gap-4">
                <span className="font-mono text-[10px] text-blue-400 sm:text-xs">
                  06
                </span>

                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-blue-500/60 sm:w-12"
                />

                <span className="text-[10px] tracking-[0.24em] text-slate-500 sm:text-xs sm:tracking-[0.28em]">
                  SELECTED WORK
                </span>
              </div>

              {/* Heading */}

              <h2
                id="projects-heading"
                className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
              >
                Software built around{" "}
                <span className="text-slate-500">
                  real problems.
                </span>
              </h2>
            </div>

            {/* Supporting description */}

            <p className="max-w-md text-sm leading-6 text-slate-500 sm:leading-7 lg:self-end">
              Projects focused on backend engineering, developer
              tooling, full-stack systems and practical software
              architecture.
            </p>
          </div>

          {/* =====================================================
              CodeVault — Flagship Project
              ===================================================== */}

          <div>
            <ProjectCaseStudy
              number="01"
              variant="flagship"
              eyebrow="FLAGSHIP PROJECT"
              title="CodeVault"
              description="Developer Coding Solution Management Platform that detects accepted coding solutions, extracts metadata and source code, and synchronizes solutions with GitHub."
              problem="Developers solve problems across multiple coding platforms, but manually preserving solutions, metadata and repository structure becomes repetitive and inconsistent."
              solution="CodeVault automates the workflow from coding-platform detection to GitHub synchronization using a browser extension, Spring Boot API and GitHub API integration."
              technologies={[
                "WXT",
                "React",
                "TypeScript",
                "Spring Boot",
                "Java",
                "GitHub API",
                "OAuth 2.0",
              ]}
              workflow={[
                {
                  label: "Coding Platform",
                  description: "LeetCode / GFG",
                  icon: Globe,
                },
                {
                  label: "Browser Extension",
                  description: "Detect submission",
                  icon: Code2,
                },
                {
                  label: "Extraction",
                  description: "Metadata + solution",
                  icon: SearchCheck,
                },
                {
                  label: "Spring Boot API",
                  description: "Secure API layer",
                  icon: Server,
                },
                {
                  label: "GitHub API",
                  description: "Repository sync",
                  icon: GitBranch,
                },
              ]}
              github="https://github.com/vivekkushwahaofficial/CodeVault"
              live="https://code-vault-website.vercel.app/"
            />
          </div>

          {/* =====================================================
              Secondary Projects
              ===================================================== */}

          <div className="mt-1">
            <ProjectCaseStudy
              number="02"
              variant="compact"
              eyebrow="INTERNSHIP PROJECT"
              title="Legal Aid Matching Platform"
              description="Backend contribution to a team-based legal assistance platform developed during the Infosys Springboard internship."
              problem="Users needed a structured platform for discovering appropriate legal assistance while maintaining secure role-based access and organized case information."
              solution="Implemented Spring Boot backend modules covering authentication, authorization, profiles, case management and lawyer/NGO directory APIs."
              technologies={[
                "Java",
                "Spring Boot",
                "Spring Security",
                "Spring Data JPA",
                "PostgreSQL",
                "JWT",
                "REST APIs",
              ]}
              workflow={[
                {
                  label: "React Frontend",
                  description: "User interface",
                  icon: Code2,
                },
                {
                  label: "Spring Boot",
                  description: "REST API layer",
                  icon: Server,
                },
                {
                  label: "JWT Security",
                  description: "Authentication",
                  icon: LockKeyhole,
                },
                {
                  label: "PostgreSQL",
                  description: "Persistent data",
                  icon: Server,
                },
              ]}
            />

            <ProjectCaseStudy
              number="03"
              variant="compact"
              eyebrow="FULL-STACK PROJECT"
              title="PeerNexus"
              description="Collaborative learning and messaging platform combining Spring Boot REST APIs with real-time WebSocket communication."
              problem="Students needed a focused environment for collaboration, peer learning and real-time communication."
              solution="Built a full-stack platform with JWT-secured access, WebSocket messaging, user presence tracking and persistent relational data."
              technologies={[
                "Java",
                "Spring Boot",
                "React",
                "PostgreSQL",
                "WebSockets",
                "JWT",
                "Docker",
                "Cloudinary",
              ]}
              workflow={[
                {
                  label: "React",
                  description: "Frontend application",
                  icon: Code2,
                },
                {
                  label: "Spring Boot",
                  description: "Backend APIs",
                  icon: Server,
                },
                {
                  label: "WebSockets",
                  description: "Real-time messaging",
                  icon: GitBranch,
                },
                {
                  label: "PostgreSQL",
                  description: "Application data",
                  icon: Server,
                },
              ]}
              github="https://github.com/vivekkushwahaofficial/peernexus"
              live="https://peernexus.vercel.app/"
            />

            <ProjectCaseStudy
              number="04"
              variant="compact"
              eyebrow="FULL-STACK PROJECT"
              title="Employee Management System"
              description="Full-stack employee management application demonstrating layered Spring Boot architecture, REST APIs and relational persistence."
              problem="Employee records require reliable CRUD operations, structured backend architecture and persistent relational storage."
              solution="Implemented a Controller-Service-Repository backend with Spring Data JPA and PostgreSQL, connected to a React frontend."
              technologies={[
                "Java",
                "Spring Boot",
                "React",
                "PostgreSQL",
                "Spring Data JPA",
                "Render",
                "Vercel",
              ]}
              workflow={[
                {
                  label: "React",
                  description: "Frontend application",
                  icon: Code2,
                },
                {
                  label: "REST API",
                  description: "Spring Boot backend",
                  icon: Server,
                },
                {
                  label: "Spring Data JPA",
                  description: "Persistence layer",
                  icon: GitBranch,
                },
                {
                  label: "PostgreSQL",
                  description: "Relational database",
                  icon: Server,
                },
              ]}
              github="https://github.com/Vivekkushwahaofficial/employee-management-system"
              live="https://employee-management-system-wnla.vercel.app/"
            />
          </div>

          {/* =====================================================
              End note
              ===================================================== */}

          <div className="mt-6 flex items-start gap-3 border-t border-white/[0.06] pt-4 text-[10px] leading-5 text-slate-600 sm:mt-7 sm:items-center sm:text-xs">
            <LockKeyhole
              size={13}
              className="mt-0.5 shrink-0 sm:mt-0 sm:h-3.5 sm:w-3.5"
            />

            <span>
              Projects emphasize API design, system integration and
              maintainable architecture.
            </span>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Projects;