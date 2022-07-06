import React from 'react'
import styled from 'styled-components'
import Particles from "react-tsparticles";
import particlesConfig from "../assets/particlesConfig.json";
import { loadFull } from "tsparticles";

const VideoContainer = styled.section`
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;

    video{
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
`

const CoverVideo = () => {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <VideoContainer>
      <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
      />  
    </VideoContainer>
  )
}

export default CoverVideo