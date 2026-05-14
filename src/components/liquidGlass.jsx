import LiquidGlassModule from "liquid-glass-react";

import "./liquidGlass.css";

const LiquidGlass = LiquidGlassModule.default ?? LiquidGlassModule;

export default function LiquidGlassWrapper({
  children,
  className = "intro-glass",
  style = { position: "fixed", top: "10%", left: "50%" },
  padding = "16px 32px",
  cornerRadius = 999,
}) {
  return (
    <LiquidGlass
      className={className}
      style={style}
      padding={padding}
      cornerRadius={cornerRadius}
      overLight
    >
      <div className="intro-content">{children}</div>
    </LiquidGlass>
  );
}

