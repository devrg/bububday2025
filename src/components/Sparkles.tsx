import { motion } from "framer-motion";

interface Props {
  count: number;
}

const Sparkles: React.FC<Props> = ({ count }) => {
  const items = Array.from({ length: count });

  return (
    <>
      {items.map((_, i) => (
        <motion.div
          key={i}
          className="sparkle"
          initial={{ opacity: 0, x: Math.random() * 800 - 400, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -80, -160],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
          }}
          style={{ left: Math.random() * 100 + "%" }}
        />
      ))}
    </>
  );
};

export default Sparkles;
