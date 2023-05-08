import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from "../config/particlesConfig";

function ParticlesBackground() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    <>
      <Particles id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig} style={{zIndex:"-10"}}/>
    </>
  );
}

export default ParticlesBackground;
