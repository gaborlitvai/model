import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const modelRef = React.useRef();
  const [annots, setAnnots] = useState([]);

  const handleClick = (event) => {
    const { clientX, clientY } = event;

    if (modelRef.current) {
      let hit = modelRef.current.positionAndNormalFromPoint(clientX, clientY);
      if (hit) {
        setAnnots((annots) => {
          return [...annots, hit];
        });
      }
    }
  };

  return (
    <model-viewer   
      src="./airmax_colored_left.glb"
    //  skybox-image="./belfast_sunset_4k.hdr"
      environment-image="./studio_small_08_4k.hdr"
      
      auto-rotate
      camera-controls
      ar
      ar-modes="webxr"
      onClick={handleClick}
      ref={(ref) => {
        modelRef.current = ref;
      }}
    >
    </model-viewer>
  );
}
