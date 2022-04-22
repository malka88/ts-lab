import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import Vector from '../icons/Vector'

const VectorContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    overflow: hidden;

    @media (max-width: 64em){
      transform: translateX(-90%);
    }

    svg{
        width: 100%;
        height: 100%;
    }
`

const DrawSvg = () => {
const ref = useRef(null)

gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  let element = ref.current;

  let svg = document.getElementsByClassName("svg-path")[0];

  const length = svg.getTotalLength();

  svg.style.strokeDasharray = length;
  svg.style.strokeDashoffset = length;

  let t1 = gsap.timeline({
    scrollTrigger:{
        trigger: element,
        start: "top center",
        end: "bottom bottom",
        onUpdate:(self) => {
            const draw = length * self.progress;
            svg.style.strokeDashoffset = length - draw;
        }
    }
  })

  return () => {
    if(t1) t1.kill();
  };
}, [])

  return (
    <VectorContainer ref={ref}>
    <Vector />
    </VectorContainer>
  )
}

export default DrawSvg