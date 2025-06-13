import { Handle, Position, type NodeProps } from "@xyflow/react";
import {
  EndNodeType,
  StartNodeType,
  FlowNodeType,
  FlowNodeSecondaryType,
  BadgeType,
} from "./types";

// Badge color mapping
const getBadgeColor = (type: BadgeType): string => {
  const colors = {
    business: "bg-amber-500",
    design: "bg-pink-500",
    operations: "bg-blue-500",
    frontend: "bg-emerald-500",
    backend: "bg-red-500",
    entrepreneurship: "bg-purple-500",
  };
  return colors[type];
};

// Badge component
const Badge = ({ type }: { type: BadgeType }) => (
  <span
    className={`${getBadgeColor(
      type
    )} text-white text-xs px-2 py-1 rounded-full font-medium`}
  >
    {type}
  </span>
);

// Badges container component
const BadgesContainer = ({ badges }: { badges?: BadgeType[] }) => {
  if (!badges || badges.length === 0) return null;

  return (
    <div className="absolute -top-2 -right-2 flex flex-wrap gap-1 max-w-24">
      {badges.map((badge, index) => (
        <Badge key={index} type={badge} />
      ))}
    </div>
  );
};

export const EndNode = ({ data }: NodeProps<EndNodeType>) => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl shadow-lg text-white text-center font-semibold max-w-sm">
      <BadgesContainer badges={data.badges} />
      <div
        style={{ padding: "12px 16px", fontSize: "13px", lineHeight: "1.4" }}
      >
        {data.label}
      </div>

      <Handle
        type="target"
        position={Position.Bottom}
        className="!border-purple-500 !border-2 !rounded-full !w-4 !h-4 !bg-purple-800 !outline-none"
      />
    </div>
  );
};

export const StartNode = ({ data }: NodeProps<StartNodeType>) => {
  return (
    <div className="relative bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-lg text-white text-center font-semibold max-w-sm">
      <BadgesContainer badges={data.badges} />
      <div
        style={{ padding: "12px 16px", fontSize: "13px", lineHeight: "1.4" }}
      >
        {data.label}
      </div>

      <Handle
        type="source"
        position={Position.Top}
        className="!border-green-500 !border-2 !rounded-full !w-4 !h-4 !bg-green-800 !outline-none"
      />
    </div>
  );
};

export const FlowNode = ({ data }: NodeProps<FlowNodeType>) => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg text-white text-center font-semibold max-w-sm">
      <BadgesContainer badges={data.badges} />
      <div
        style={{ padding: "12px 16px", fontSize: "13px", lineHeight: "1.4" }}
      >
        {data.label}
      </div>

      <Handle
        type="target"
        position={Position.Bottom}
        className="!border-blue-500 !border-2 !rounded-full !w-4 !h-4 !bg-blue-800 !outline-none"
      />

      <Handle
        type="source"
        position={Position.Top}
        className="!border-blue-500 !border-2 !rounded-full !w-4 !h-4 !bg-blue-800 !outline-none"
      />
    </div>
  );
};

export const FlowNodeSecondary = ({
  data,
}: NodeProps<FlowNodeSecondaryType>) => {
  return (
    <div className="relative bg-background rounded-xl shadow-lg text-white text-center font-semibold max-w-sm border-dashed border-3 border-gray-500">
      <BadgesContainer badges={data.badges} />
      <div
        style={{ padding: "12px 16px", fontSize: "13px", lineHeight: "1.4" }}
      >
        {data.label}
      </div>

      <Handle
        type="target"
        position={Position.Bottom}
        className="!border-gray-500 !border-2 !rounded-full !w-4 !h-4 !bg-gray-800 !outline-none"
      />

      <Handle
        type="source"
        position={Position.Top}
        className="!border-gray-500 !border-2 !rounded-full !w-4 !h-4 !bg-gray-800 !outline-none"
      />
    </div>
  );
};
