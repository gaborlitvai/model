import "./styles.css";
import React from "react";

export default function App() {
  const modelRef = React.useRef();

  return (
    <model-viewer   
      src="./airmax_colored_left.glb"
      auto-rotate
      camera-controls
      ar
      ar-modes="webxr"
      ref={(ref) => {
        modelRef.current = ref;
      }}
    >
    </model-viewer>
  );
}
