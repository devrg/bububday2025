import type { TimelineEntry } from "../data/timeline";

const TimelineItem: React.FC<TimelineEntry> = ({
  year,
  title,
  text,
  image,
}) => {
  return (
    <div className="timeline-item">
      <img src={image} alt="timeline" />
      <div className="timeline-item-content">
        <h3 style={{ color: "#F2C200", fontSize: "2rem", margin: 0 }}>
          {year}
        </h3>
        <h4 style={{ margin: "0.5rem 0" }}>{title}</h4>
        <p style={{ color: "#555" }}>{text}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
