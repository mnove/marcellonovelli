import type { Node, BuiltInNode } from "@xyflow/react";

export type BadgeType =
  | "business"
  | "design"
  | "operations"
  | "frontend"
  | "backend"
  | "entrepreneurship";

export interface NodeData extends Record<string, unknown> {
  label: string;
  badges?: BadgeType[];
}

export type EndNodeType = Node<NodeData, "endNode">;
export type StartNodeType = Node<NodeData, "startNode">;
export type FlowNodeType = Node<NodeData, "flowNode">;
export type FlowNodeSecondaryType = Node<NodeData, "flowNodeSecondary">;

export type AppNode =
  | BuiltInNode
  | EndNodeType
  | StartNodeType
  | FlowNodeType
  | FlowNodeSecondaryType;
