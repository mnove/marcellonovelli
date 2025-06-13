import type { NodeTypes } from "@xyflow/react";

import { AppNode } from "./types";
import { EndNode, FlowNode, FlowNodeSecondary, StartNode } from "./custom-node";

export const initialNodes: AppNode[] = [
  {
    id: "stackzero",
    type: "endNode",
    position: { x: 200, y: 0 },
    data: {
      label: "2022-Present | StackZero | Co-Founder, Full-Stack Developer",
      badges: ["entrepreneurship", "frontend", "backend"],
    },
  },
  {
    id: "octeract",
    position: { x: 200, y: 100 },
    type: "flowNode",
    data: {
      label: "2021-2022 | Octeract | Product & Operations Lead (Web / SaaS)",
      badges: ["business", "operations"],
    },
  },
  {
    id: "nickelytics",
    position: { x: 200, y: 200 },
    type: "flowNode",
    data: {
      label:
        "2020-2021 | Nickelytics | Product Manager & Design Engineer (Web)",
      badges: ["business", "design", "frontend"],
    },
  },
  {
    id: "techstars",
    position: { x: 200, y: 300 },
    data: {
      label: "2019-2020 | Techstars | Product Development & Growth Associate",
      badges: ["business"],
    },
    type: "flowNode",
  },
  {
    id: "foodacity",
    position: { x: 200, y: 400 },
    type: "flowNode",
    data: {
      label: "2018-2019 | Foodacity | Project Lead / Product Design",
      badges: ["design", "business"],
    },
  },
  {
    id: "carv",
    position: { x: 200, y: 500 },
    data: {
      label: "2017-2018 | Carv | Operations Lead",
      badges: ["operations"],
    },
    type: "flowNode",
  },
  {
    id: "study-something",
    position: { x: 400, y: 550 },
    data: { label: "Study" },
    type: "flowNodeSecondary",
  },
  {
    id: "sistemi",
    position: { x: 200, y: 600 },
    type: "startNode",
    data: {
      label: "2015 | Sistemi | Accounting Intern",
      badges: ["business"],
    },
  },
];

export const nodeTypes = {
  // Add any of your custom nodes here!
  endNode: EndNode,
  startNode: StartNode,
  flowNode: FlowNode,
  flowNodeSecondary: FlowNodeSecondary,
} satisfies NodeTypes;
