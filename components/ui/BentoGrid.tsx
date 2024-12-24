// /components/BentoGrid.tsx
import React, { CSSProperties } from "react";
import "../BentoGrid.css";

type BentoGridItemProps = {
  title: string;
  subtitle: string;
  width: number; // Width in grid units
  height: number; // Height in grid units
  imageUrl?: string; // Optional image URL
};

type BentoGridProps = {
  items: BentoGridItemProps[];
};

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  title,
  subtitle,
  width,
  height,
  imageUrl,
}) => {
  const itemStyle: CSSProperties = {
    gridColumnEnd: `span ${width}`,
    gridRowEnd: `span ${height}`,
  };

  return (
    <div className="bento-grid-item" style={itemStyle}>
      <div className="bento-grid-content">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      {imageUrl && <img src={imageUrl} alt={title} className="bento-grid-image" />}
    </div>
  );
};

export const BentoGrid: React.FC<BentoGridProps> = ({ items }) => {
  return (
    <div className="bento-grid">
      {items.map((item, index) => (
        <BentoGridItem
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          width={item.width}
          height={item.height}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};
