import { timeline } from "../data/timeline";
import TimelineItem from "./TimelineItem";
import { motion } from "framer-motion";

const Timeline: React.FC = () => {
  return (
    <section className="section">
      <h2
        style={{
          textAlign: "center",
          fontSize: "3rem",
          color: "#F2C200",
          marginBottom: "3rem",
        }}
      >
        Bubu's Journey
      </h2>

      <div style={{ maxWidth: "800px", margin: "auto" }}>
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TimelineItem {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
