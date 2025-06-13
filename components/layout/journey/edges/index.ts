import type { Edge, EdgeTypes } from "@xyflow/react";

export const initialEdges: Edge[] = [
  {
    id: "sistemi->carv",
    source: "sistemi",
    target: "carv",
    animated: true,
    style: { stroke: "#10b981", strokeWidth: 3 },
  },
  {
    id: "sistemi->study-something",
    source: "sistemi",
    target: "study-something",
    animated: true,
    style: { stroke: "#10b981", strokeWidth: 3 },
  },

  {
    id: "study-something->carv",
    source: "study-something",
    target: "carv",
    animated: true,
    style: { stroke: "#10b981", strokeWidth: 3 },
  },
  {
    id: "carv->foodacity",
    source: "carv",
    target: "foodacity",
    animated: true,
    style: { stroke: "#3b82f6", strokeWidth: 3 },
  },

  {
    id: "carv->foodacity",
    source: "carv",
    target: "foodacity",
    animated: true,
    style: { stroke: "#3b82f6", strokeWidth: 3 },
  },
  {
    id: "foodacity->techstars",
    source: "foodacity",
    target: "techstars",
    animated: true,
    style: { stroke: "#8b5cf6", strokeWidth: 3 },
  },
  {
    id: "techstars->nickelytics",
    source: "techstars",
    target: "nickelytics",
    animated: true,
    style: { stroke: "#f59e0b", strokeWidth: 3 },
  },
  {
    id: "nickelytics->octeract",
    source: "nickelytics",
    target: "octeract",
    animated: true,
    style: { stroke: "#ef4444", strokeWidth: 3 },
  },
  {
    id: "octeract->stackzero",
    source: "octeract",
    target: "stackzero",
    animated: true,
    style: { stroke: "#ec4899", strokeWidth: 4 },
  },
];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
