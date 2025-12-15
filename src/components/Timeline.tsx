import { timeline } from "../data/timeline";
import TimelineItem from "./Timelineitem.tsx";
import { motion } from "framer-motion";

const Timeline: React.FC = () => (
  <section className="section timeline">
    <h2 style={{ textAlign: "center", color: "#FFD93D" }}>Bubu's Journey</h2>
    {timeline.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <TimelineItem {...item} />
      </motion.div>
    ))}
  </section>
);

export default Timeline;
