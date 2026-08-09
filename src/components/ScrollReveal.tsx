import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

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

    // Respect environments where IntersectionObserver is unavailable.
    if (!("IntersectionObserver" in window)) {
      setShow(true);
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
        // Reveal as soon as a small part of the section enters.
        threshold: 0.05,

        // Start the reveal slightly before the element reaches
        // the center of the viewport.
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={
        show
          ? "animate-fadeUp"
          : "opacity-0"
      }
    >
      {children}
    </div>
  );
}

export default ScrollReveal;