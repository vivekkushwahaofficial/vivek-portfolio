import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Activity,
  ArrowUpRight,
  GitCommitHorizontal,
  GitPullRequest,
  Star,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const GITHUB_USERNAME = "vivekkushwahaofficial";
const GITHUB_PROFILE = `https://github.com/${GITHUB_USERNAME}`;

const CONTRIBUTION_GRAPH = `https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${GITHUB_USERNAME}&theme=github_dark`;

const STREAK_GRAPH = `https://streak-stats.demolab.com?user=${GITHUB_USERNAME}&hide_border=true&theme=transparent`;

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
    >
      {children}

      <ArrowUpRight
        size={15}
        strokeWidth={1.8}
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}

export default function GitHub() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="github"
      aria-labelledby="github-title"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-cyan-400/70" />

            <span className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-300/80">
              GitHub Activity
            </span>
          </div>

          <h2
            id="github-title"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Engineering work,
            <span className="text-zinc-500"> in public.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            A live view of my open-source work, coding activity, repositories,
            and contributions on GitHub.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.65fr)_minmax(280px,0.75fr)]">
          {/* Contribution Graph */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 0.05,
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors duration-500 hover:border-white/[0.14] sm:p-6 lg:p-7"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <Activity
                    size={17}
                    strokeWidth={1.7}
                    className="text-cyan-300"
                  />

                  <h3 className="text-sm font-medium text-white">
                    Contribution activity
                  </h3>
                </div>

                <p className="mt-2 text-xs leading-5 text-zinc-500">
                  Generated from public GitHub activity.
                </p>
              </div>

              {/* GitHub Profile Icon */}
              <a
                href={`${GITHUB_PROFILE}?tab=overview`}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Vivek's GitHub profile"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-400 transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
              >
                <FaGithub size={17} />
              </a>
            </div>

            {/* Contribution Graph */}
            <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-black/20 p-3 sm:p-4">
              <img
                src={CONTRIBUTION_GRAPH}
                alt="GitHub contribution activity for Vivek Kumar"
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
            </div>

            {/* Graph Footer */}
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <GitCommitHorizontal
                  size={15}
                  strokeWidth={1.7}
                  className="text-zinc-400"
                />
                Public contribution history
              </div>

              <ExternalLink href={`${GITHUB_PROFILE}?tab=overview`}>
                View GitHub
              </ExternalLink>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 0.12,
            }}
            className="flex flex-col gap-5"
          >
            {/* Coding Consistency */}
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors duration-500 hover:border-white/[0.14] sm:p-6">
              <div className="mb-5 flex items-center gap-2">
                <GitPullRequest
                  size={17}
                  strokeWidth={1.7}
                  className="text-cyan-300"
                />

                <h3 className="text-sm font-medium text-white">
                  Coding consistency
                </h3>
              </div>

              <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-black/20 p-3">
                <img
                  src={STREAK_GRAPH}
                  alt="GitHub contribution streak information for Vivek Kumar"
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full"
                />
              </div>
            </div>

            {/* Source Verification */}
            <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/[0.05] blur-3xl"
              />

              <div className="relative">
                {/* GitHub Icon */}
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-200">
                  <FaGithub size={20} />
                </div>

                <h3 className="text-base font-medium text-white">
                  Explore the source
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  See repositories, commits, pull requests, and the projects
                  behind this portfolio.
                </p>
              </div>

              <div className="relative mt-8 flex flex-wrap gap-5">
                <ExternalLink href={GITHUB_PROFILE}>
                  GitHub Profile
                </ExternalLink>

                <ExternalLink href={`${GITHUB_PROFILE}?tab=repositories`}>
                  Repositories
                </ExternalLink>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Verification */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-zinc-600"
        >
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
            Activity sourced from GitHub
          </span>

          <span className="inline-flex items-center gap-2">
            <Star size={13} strokeWidth={1.6} />
            No manually generated statistics
          </span>
        </motion.div>
      </div>
    </section>
  );
}
