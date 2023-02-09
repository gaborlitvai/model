import "./styles.css";
import React from "react";

export default function App() {
  const modelRef = React.useRef();

  return (
    <model-viewer   
      src="./airmax_colored_left.glb"
    //  skybox-image="./belfast_sunset_4k.hdr"
      environment-image="./studio_small_08_4k.hdr"
      
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
