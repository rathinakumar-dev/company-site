import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";
import { Card } from "@/components/ui/card";

const StatsGrid = ({ stats, statsRef, statsInView, fadeUp }) => {
  return (
    <motion.ul
      ref={statsRef}
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      initial="hidden"
      animate={statsInView ? "visible" : "hidden"}
      className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 justify-items-center"
    >
      {stats.map(({ label, value, icon: Icon }) => (
        <motion.li
          key={label}
          variants={fadeUp}
          className="w-full max-w-[260px]"
        >
          <Card className="group relative overflow-hidden rounded-2xl border border-gray-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center justify-center gap-3">
              {/* Icon Wrapper */}
              <div className="p-3 rounded-full bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center">
                <Icon className="w-12 h-12 text-amber-600 dark:text-amber-500 stroke-[2.5]" />
              </div>

              {/* Count */}
              <span className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <CountUp
                  from={0}
                  to={value}
                  separator=","
                  duration={1.3}
                  className="count-up-text"
                />
                <span className="text-4xl">+</span>
              </span>

              {/* Label */}
              <span className="mt-1 text-base md:text-lg text-gray-600 dark:text-gray-300">
                {label}
              </span>
            </div>
          </Card>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default StatsGrid;
