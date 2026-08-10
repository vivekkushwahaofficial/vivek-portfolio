import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

function SectionRail() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 85%", "end 15%"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 1],
    [1, 0.9, 0.45, 0.08],
  );

  return (
    <div
      ref={railRef}
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        top-11
        hidden
        h-full
        w-px
        lg:block
      "
      style={{
        left: "12px",
      }}
    >
      {/* Base rail */}
      <div
        className="
          absolute
          inset-0
          w-px
          bg-white/[0.045]
        "
      />

      {/* Section scroll trail */}
      <motion.div
        className="
          absolute
          left-0
          top-0
          h-full
          w-px
          origin-top
          bg-gradient-to-b
          from-blue-400/75
          via-blue-400/35
          to-transparent
        "
        style={{
          opacity: reducedMotion ? 1 : opacity,
        }}
      />

      {/* Section start node */}
      <motion.span
        className="
          absolute
          left-1/2
          top-0
          h-2.5
          w-2.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-400
          shadow-[0_0_14px_rgba(96,165,250,0.85)]
        "
        style={{
          opacity: reducedMotion ? 1 : opacity,
        }}
      />
    </div>
  );
}

export default SectionRail;