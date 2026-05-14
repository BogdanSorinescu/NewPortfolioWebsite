import LiquidGlassModule from "liquid-glass-react";

import './liquidGlass.css';

const LiquidGlass = LiquidGlassModule.default ?? LiquidGlassModule;


export default function LiquidGlassWrapper({ children }) {
  return (
    
      <LiquidGlass
        className="intro-glass"
        padding="25px 50px"
        cornerRadius={999}
    >
      <div className="intro-content">{children}</div>
      </LiquidGlass>
  );
}
