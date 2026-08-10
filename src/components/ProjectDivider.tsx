import { motion, useReducedMotion } from "motion/react";

function ProjectDivider() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="relative my-10 h-px w-full overflow-visible bg-white/[0.05]"
    >
      {/* Horizontal trail */}
      <motion.div
        className="
          absolute
          left-0
          top-0
          h-px
          w-full
          origin-left
          bg-gradient-to-r
          from-blue-400/60
          via-blue-400/25
          to-transparent
        "
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{
          once: true,
          amount: 0.8,
        }}
        transition={{
          duration: reducedMotion ? 0 : 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Moving node */}
      {!reducedMotion && (
        <motion.span
          className="
            absolute
            top-1/2
            h-1.5
            w-1.5
            -translate-y-1/2
            rounded-full
            bg-blue-400
            shadow-[0_0_12px_rgba(96,165,250,0.9)]
          "
          initial={{ left: "0%" }}
          whileInView={{ left: "100%" }}
          viewport={{
            once: true,
            amount: 0.8,
          }}
          transition={{
            duration: 1.2,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      )}
    </div>
  );
}

export default ProjectDivider;