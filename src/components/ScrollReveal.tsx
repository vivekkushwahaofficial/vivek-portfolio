import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
}

function ScrollReveal({ children }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={show ? "animate-fadeUp" : "opacity-0"}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;