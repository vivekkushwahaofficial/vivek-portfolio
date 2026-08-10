// import { motion, useReducedMotion } from "motion/react";
// import {
//   Braces,
//   Bot,
//   Database,
//   GitBranch,
//   Server,
//   Box,
// } from "lucide-react";

// import profileImg from "../assets/profile.png";

// interface MiniHeroNetworkProps {
//   className?: string;
// }

// const nodes = [
//   {
//     id: "docker",
//     label: "Docker",
//     icon: Box,
//     position: "left-1/2 top-[3%] -translate-x-1/2",
//     color: "slate",
//   },
//   {
//     id: "java",
//     label: "Java",
//     icon: Braces,
//     position: "left-[3%] top-[27%]",
//     color: "blue",
//   },
//   {
//     id: "spring",
//     label: "Spring Boot",
//     icon: Server,
//     position: "right-[3%] top-[27%]",
//     color: "blue",
//   },
//   {
//     id: "ai",
//     label: "AI",
//     icon: Bot,
//     position: "left-[3%] bottom-[21%]",
//     color: "blue",
//   },
//   {
//     id: "postgres",
//     label: "PostgreSQL",
//     icon: Database,
//     position: "right-[3%] bottom-[21%]",
//     color: "slate",
//   },
//   {
//     id: "github",
//     label: "GitHub",
//     icon: GitBranch,
//     position: "left-1/2 bottom-[3%] -translate-x-1/2",
//     color: "slate",
//   },
// ];

// function MiniHeroNetwork({
//   className = "",
// }: MiniHeroNetworkProps) {
//   const reducedMotion = useReducedMotion();

//   return (
//     <div
//       aria-hidden="true"
//       className={`
//         pointer-events-none
//         absolute
//         left-1/2
//         top-1/2
//         z-0
//         h-[250px]
//         w-[250px]
//         -translate-x-1/2
//         -translate-y-1/2

//         /* IMPORTANT:
//            Do not apply opacity here.
//            WelcomeScreen controls final visibility.
//         */
//         opacity-100

//         sm:h-[290px]
//         sm:w-[290px]

//         md:h-[320px]
//         md:w-[320px]

//         lg:h-[350px]
//         lg:w-[350px]

//         ${className}
//       `}
//     >
//       {/* =====================================================
//           SOFT NETWORK GLOW
//       ====================================================== */}

//       <div
//         aria-hidden="true"
//         className="
//           absolute
//           inset-[15%]
//           rounded-full
//           bg-blue-500/[0.045]
//           blur-2xl
//         "
//       />

//       {/* =====================================================
//           OUTER ORBIT
//       ====================================================== */}

//       <motion.div
//         className="
//           absolute
//           inset-[14%]
//           rounded-full
//           border
//           border-blue-400/[0.28]
//         "
//         animate={
//           reducedMotion
//             ? undefined
//             : {
//               rotate: 360,
//             }
//         }
//         transition={{
//           duration: 70,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       {/* =====================================================
//           INNER ORBIT
//       ====================================================== */}

//       <motion.div
//         className="
//           absolute
//           inset-[28%]
//           rounded-full
//           border
//           border-cyan-400/[0.22]
//         "
//         animate={
//           reducedMotion
//             ? undefined
//             : {
//               rotate: -360,
//             }
//         }
//         transition={{
//           duration: 50,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       {/* =====================================================
//           CONNECTIONS
//       ====================================================== */}

//       <svg
//         className="
//           absolute
//           inset-0
//           h-full
//           w-full
//           overflow-visible
//         "
//         viewBox="0 0 350 350"
//         fill="none"
//         aria-hidden="true"
//       >
//         {/* Docker → Center */}

//         <line
//           x1="175"
//           y1="48"
//           x2="175"
//           y2="130"
//           stroke="rgba(56,189,248,0.40)"
//           strokeWidth="1.2"
//         />

//         {/* Java → Center */}

//         <line
//           x1="52"
//           y1="118"
//           x2="132"
//           y2="158"
//           stroke="rgba(59,130,246,0.38)"
//           strokeWidth="1.2"
//         />

//         {/* Spring Boot → Center */}

//         <line
//           x1="298"
//           y1="118"
//           x2="218"
//           y2="158"
//           stroke="rgba(59,130,246,0.38)"
//           strokeWidth="1.2"
//         />

//         {/* AI → Center */}

//         <line
//           x1="52"
//           y1="262"
//           x2="132"
//           y2="205"
//           stroke="rgba(59,130,246,0.34)"
//           strokeWidth="1.2"
//         />

//         {/* PostgreSQL → Center */}

//         <line
//           x1="298"
//           y1="262"
//           x2="218"
//           y2="205"
//           stroke="rgba(59,130,246,0.34)"
//           strokeWidth="1.2"
//         />

//         {/* GitHub → Center */}

//         <line
//           x1="175"
//           y1="302"
//           x2="175"
//           y2="220"
//           stroke="rgba(56,189,248,0.34)"
//           strokeWidth="1.2"
//         />
//       </svg>

//       {/* =====================================================
//           DATA PARTICLES
//       ====================================================== */}

//       {!reducedMotion && (
//         <>
//           <motion.span
//             aria-hidden="true"
//             className="
//               absolute
//               left-[24%]
//               top-[39%]
//               h-1
//               w-1
//               rounded-full
//               bg-cyan-300
//               shadow-[0_0_10px_rgba(34,211,238,1)]
//             "
//             animate={{
//               opacity: [0, 1, 0],
//               x: [0, 55],
//               y: [0, 25],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />

//           <motion.span
//             aria-hidden="true"
//             className="
//               absolute
//               right-[24%]
//               top-[39%]
//               h-1
//               w-1
//               rounded-full
//               bg-blue-300
//               shadow-[0_0_10px_rgba(59,130,246,1)]
//             "
//             animate={{
//               opacity: [0, 1, 0],
//               x: [0, -55],
//               y: [0, 25],
//             }}
//             transition={{
//               duration: 3.3,
//               delay: 0.7,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         </>
//       )}

//       {/* =====================================================
//           TECHNOLOGY NODES
//       ====================================================== */}

//       {nodes.map((node, index) => {
//         const Icon = node.icon;
//         const blue = node.color === "blue";

//         return (
//           <motion.div
//             key={node.id}
//             className={`
//               absolute
//               ${node.position}

//               flex
//               h-[38px]
//               min-w-[78px]
//               items-center
//               gap-1.5
//               rounded-lg
//               border
//               px-2

//               shadow-[0_8px_25px_rgba(0,0,0,0.25)]

//               ${blue
//                 ? "border-blue-400/45 bg-[#071329]/95"
//                 : "border-slate-500/40 bg-[#0a1020]/95"
//               }
//             `}
//             initial={{
//               opacity: 0,
//               scale: 0.9,
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//             }}
//             transition={{
//               duration: 0.5,
//               delay: 0.15 + index * 0.06,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >
//             <span
//               className={`
//                 flex
//                 h-6
//                 w-6
//                 shrink-0
//                 items-center
//                 justify-center
//                 rounded-md

//                 ${blue
//                   ? "bg-blue-500/20 text-blue-200"
//                   : "bg-slate-500/20 text-slate-200"
//                 }
//               `}
//             >
//               <Icon
//                 size={12}
//                 strokeWidth={1.6}
//               />
//             </span>

//             <span
//               className="
//                 whitespace-nowrap
//                 text-[8px]
//                 font-medium
//                 text-slate-100
//               "
//             >
//               {node.label}
//             </span>
//           </motion.div>
//         );
//       })}

//       {/* =====================================================
//           CENTER PROFILE
//       ====================================================== */}

//       <motion.div
//         className="
//           absolute
//           left-1/2
//           top-1/2
//           flex
//           h-[96px]
//           w-[82px]
//           -translate-x-1/2
//           -translate-y-1/2
//           flex-col
//           items-center
//           rounded-xl
//           border
//           border-blue-400/45
//           bg-[#07101f]/98
//           p-1.5
//           shadow-[0_0_35px_rgba(37,99,235,0.18)]
//         "
//         initial={{
//           opacity: 0,
//           scale: 0.9,
//         }}
//         animate={{
//           opacity: 1,
//           scale: 1,
//         }}
//         transition={{
//           duration: 0.7,
//           delay: 0.35,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//       >
//         {/* Profile image */}

//         <div
//           className="
//             h-[52px]
//             w-[52px]
//             overflow-hidden
//             rounded-lg
//             border
//             border-white/[0.14]
//           "
//         >
//           <img
//             src={profileImg}
//             alt=""
//             className="
//               h-full
//               w-full
//               object-cover
//             "
//           />
//         </div>

//         {/* Name */}

//         <span
//           className="
//             mt-1
//             text-[8px]
//             font-medium
//             text-white
//           "
//         >
//           Vivek Kumar
//         </span>

//         {/* Role */}

//         <span
//           className="
//             text-[6px]
//             text-slate-400
//           "
//         >
//           Software Engineer
//         </span>

//         {/* Status */}

//         <span
//           className="
//             mt-1
//             flex
//             items-center
//             gap-1
//             font-mono
//             text-[5px]
//             uppercase
//             tracking-[0.18em]
//             text-slate-500
//           "
//         >
//           <span
//             aria-hidden="true"
//             className="
//               h-1
//               w-1
//               rounded-full
//               bg-emerald-400
//               shadow-[0_0_7px_rgba(52,211,153,0.8)]
//             "
//           />

//           Available
//         </span>
//       </motion.div>
//     </div>
//   );
// }

// export default MiniHeroNetwork;