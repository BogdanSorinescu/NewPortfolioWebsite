import LiquidGlassModule from "liquid-glass-react";
import ImageOfMe from '../assets/ImageOfMe.png';
import './liquidGlass.css';

const LiquidGlass = LiquidGlassModule.default ?? LiquidGlassModule;


export default function Index() {
  return (
    <div id="testPage">
      <img src={ImageOfMe.src} alt="Me" className="profile-image" />
      <LiquidGlass
        className="intro-glass"
        padding="25px 50px"
        cornerRadius={999}
      >
        <div className="intro-content">
          <h2>Hello, my name is Bogdan!</h2>
        </div>
      </LiquidGlass>
    </div>
  );
}
