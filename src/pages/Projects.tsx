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
                className="relative overflow-hidden bg-[#050914] py-24 text-white sm:py-32"
            >
                {/* Ambient background */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                >
                    <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/[0.045] blur-3xl" />

                    <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-purple-500/[0.03] blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Section header */}
                    <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="text-xs font-medium tracking-[0.3em] text-blue-400">
                                    04
                                </span>

                                <span className="h-px w-12 bg-blue-500/60" />

                                <span className="text-xs tracking-[0.28em] text-slate-500">
                                    SELECTED WORK
                                </span>
                            </div>

                            <h2 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                                Software built around{" "}
                                <span className="text-slate-500">real problems.</span>
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-slate-500">
                            Projects focused on backend engineering, developer tooling,
                            full-stack systems and practical software architecture.
                        </p>
                    </div>

                    {/* ============================================================
              CODEVAULT — FLAGSHIP
          ============================================================ */}

                    <div className="mb-10">
                        <ProjectCaseStudy
                            number="01"
                            flagship
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

                    {/* ============================================================
              OTHER PROJECTS
          ============================================================ */}

                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Legal Aid */}
                        <ProjectCaseStudy
                            number="02"
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

                        {/* PeerNexus */}
                        <ProjectCaseStudy
                            number="03"
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

                        {/* Employee Management */}
                        <ProjectCaseStudy
                            number="04"
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

                    {/* Engineering note */}
                    <div className="mt-10 flex items-center gap-3 border-t border-white/[0.06] pt-6 text-xs text-slate-600">
                        <LockKeyhole size={14} />

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