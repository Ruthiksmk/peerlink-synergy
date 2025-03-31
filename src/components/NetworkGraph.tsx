
import { useEffect, useRef } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  label?: string;
  color: string;
}

interface Connection {
  from: number;
  to: number;
}

const NetworkGraph = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = 400;

    // Define nodes
    const nodes: Node[] = [
      { id: 1, x: containerWidth * 0.2, y: containerHeight * 0.3, size: 14, color: "#8B5CF6" },
      { id: 2, x: containerWidth * 0.4, y: containerHeight * 0.5, size: 16, color: "#0EA5E9" },
      { id: 3, x: containerWidth * 0.6, y: containerHeight * 0.2, size: 12, color: "#8B5CF6" },
      { id: 4, x: containerWidth * 0.7, y: containerHeight * 0.6, size: 15, color: "#0EA5E9" },
      { id: 5, x: containerWidth * 0.8, y: containerHeight * 0.4, size: 13, color: "#8B5CF6" },
      { id: 6, x: containerWidth * 0.3, y: containerHeight * 0.7, size: 11, color: "#0EA5E9" },
      { id: 7, x: containerWidth * 0.5, y: containerHeight * 0.3, size: 12, color: "#8B5CF6" },
    ];

    // Define connections
    const connections: Connection[] = [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 3, to: 5 },
      { from: 2, to: 6 },
      { from: 3, to: 7 },
      { from: 4, to: 5 },
      { from: 6, to: 7 },
      { from: 5, to: 7 },
    ];

    // Clear SVG
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }

    // Draw connections first (so they appear below nodes)
    connections.forEach(connection => {
      const fromNode = nodes.find(node => node.id === connection.from);
      const toNode = nodes.find(node => node.id === connection.to);
      
      if (fromNode && toNode) {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", fromNode.x.toString());
        line.setAttribute("y1", fromNode.y.toString());
        line.setAttribute("x2", toNode.x.toString());
        line.setAttribute("y2", toNode.y.toString());
        line.setAttribute("stroke", "#8B5CF6");
        line.setAttribute("stroke-width", "1");
        line.setAttribute("opacity", "0.4");
        line.classList.add("node-connection");
        svgRef.current?.appendChild(line);
      }
    });

    // Draw nodes
    nodes.forEach(node => {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", node.x.toString());
      circle.setAttribute("cy", node.y.toString());
      circle.setAttribute("r", node.size.toString());
      circle.setAttribute("fill", node.color);
      svgRef.current?.appendChild(circle);

      // Pulse animation for nodes
      circle.setAttribute("opacity", "0.8");
      circle.classList.add("animate-pulse-slow");
    });

    // Responsive adjustment
    const handleResize = () => {
      if (!containerRef.current || !svgRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      svgRef.current.setAttribute("width", newWidth.toString());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <svg ref={svgRef} width="100%" height="400" className="bg-transparent"></svg>
    </div>
  );
};

export default NetworkGraph;
