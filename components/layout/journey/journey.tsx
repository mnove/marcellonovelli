"use client";

import {
  Controls,
  Panel,
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState,
  useReactFlow,
  type OnConnect,
} from "@xyflow/react";
import { useCallback, useLayoutEffect, useState } from "react";
import Dagre from "@dagrejs/dagre";
import "@xyflow/react/dist/style.css";
// import "./tailwind-config.js";
import { edgeTypes, initialEdges } from "./edges";
import { initialNodes, nodeTypes } from "./nodes";
import { Button } from "@/components/ui/button";
import type { Node, Edge } from "@xyflow/react";

export default function Journey() {
  return (
    <ReactFlowProvider>
      <JourneyDiagram />
    </ReactFlowProvider>
  );
}

export const JourneyDiagram = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isLayouted, setIsLayouted] = useState(false);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  const getLayoutedElements = (
    nodes: Node[],
    edges: Edge[],
    options: { direction: string }
  ) => {
    const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
    g.setGraph({ rankdir: options.direction });

    edges.forEach((edge) => g.setEdge(edge.source, edge.target));
    nodes.forEach((node) =>
      g.setNode(node.id, {
        ...node,
        width: node.measured?.width ?? 0,
        height: node.measured?.height ?? 0,
      })
    );

    Dagre.layout(g);

    return {
      nodes: nodes.map((node) => {
        const position = g.node(node.id);
        // We are shifting the dagre node position (anchor=center center) to the top left
        // so it matches the React Flow node anchor point (top left).
        const x = position.x - (node.measured?.width ?? 0) / 2;
        const y = position.y - (node.measured?.height ?? 0) / 2;

        return { ...node, position: { x, y } };
      }),
      edges,
    };
  };

  const { fitView } = useReactFlow();

  const onLayout = useCallback(
    (direction: any) => {
      console.log(nodes);
      const layouted = getLayoutedElements(nodes, edges, { direction });

      //@ts-ignore
      setNodes([...layouted.nodes]);
      setEdges([...layouted.edges]);

      window.requestAnimationFrame(() => {
        fitView();
      });
    },
    [nodes, edges, fitView, setNodes, setEdges]
  );

  // Auto-layout on initial render once nodes are measured
  useLayoutEffect(() => {
    if (!isLayouted && nodes.length > 0) {
      // Check if all nodes have been measured
      const allNodesMeasured = nodes.every(
        (node) => node.measured && node.measured.width && node.measured.height
      );

      if (allNodesMeasured) {
        onLayout("BT");
        setIsLayouted(true);
      }
    }
  }, [nodes, isLayouted, onLayout]);

  return (
    <div className="flex h-full w-full flex-row items-center justify-center mb-12 ">
      <div className="w-[25px] h-full bg-transparent p-4 relative border-r-2">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -rotate-90 whitespace-nowrap">
          <span className="text-white font-semibold text-sm">Recent</span>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">
          <span className="text-white font-bold text-lg">Timeline</span>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -rotate-90 whitespace-nowrap">
          <span className="text-white font-semibold text-sm">Beginning</span>
        </div>
      </div>
      <div className="h-[1000px] w-full overflow-hidden">
        <ReactFlow
          // onInit={onLoad}
          nodes={nodes}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          edges={edges}
          edgeTypes={edgeTypes}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          colorMode="dark"
          className="!bg-background"
          fitViewOptions={{ padding: 0.2 }}
          minZoom={0.5}
          maxZoom={1.5}
          defaultViewport={{ x: 0, y: 0, zoom: 1 }}
          draggable={false}
          nodesDraggable={false}
          nodesConnectable={false}
          nodesFocusable={false}
          edgesFocusable={false}
          edgesReconnectable={false}
          elementsSelectable={false}
          contentEditable={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
        >
          {/* <Background gap={20} size={1} /> */}
          <Controls />
          <Panel position="top-right">
            <Button variant="outline" onClick={() => onLayout("BT")}>
              Organize!
            </Button>
          </Panel>
        </ReactFlow>
      </div>
    </div>
  );
};
