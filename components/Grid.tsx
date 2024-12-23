// /components/Grid.tsx
import React from "react";
import { BentoGrid } from "./ui/BentoGrid";
import { items } from "../data/griditems";

const Grid = () => {
  return (
    <div style={{ padding: "24px" }}>
      <h1>BentoGrid Example</h1>
      <BentoGrid items={items} />
    </div>
  );
};

export default Grid;