import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.text};
  position: relative;
`

const Title = styled.h2`
  padding-top: 3rem;
  font-size: ${props => props.theme.fontxxl};
  color: ${props => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px soItemd ${props => props.theme.body};
  width: fit-content;

  @media (max-width: 64em){
    font-size: ${props => props.theme.fontxl};
  }

  @media (max-width: 48em){
    font-size: ${props => props.theme.fontlg};
  }
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const SvgContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Items = styled.ul`
  color: ${props => props.theme.body};
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em){
    flex-direction: column;
    width: 80%;
  }

  @media (max-width: 48em){
    flex-direction: column;
    width: 70%;
  }
`

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 64em){
    margin-bottom: 1rem;
  }
`

const ItemContainer = styled.div`
  width: 80%;
  height: fit-content;
  padding: 1rem;
  border: 2px solid ${props => props.theme.body};
`

const Box = styled.div`
  height: fit-content;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${props => props.theme.body};

  ul{
    padding-left: 2rem;
  }
`

const SubTitle = styled.span`
  display: block;
  font-size: ${props => props.theme.fontxl};
  font-weight: 700;

  @media (max-width: 64em){
    font-size: ${props => props.theme.fontlg};
  }

  @media (max-width: 48em){
    font-size: ${props => props.theme.fontmd};
  }
`

const Text = styled.span`
  display: block;
  font-size: ${props => props.theme.fontlg};
  margin: 0.5rem 0;

  @media (max-width: 64em){
    font-size: ${props => props.theme.fontmd};
  }

  @media (max-width: 48em){
    font-size: ${props => props.theme.fontsm};
  }
`

const CoursesItem = ({title, duration, level, subtext, addToRef, firstSub, secondSub, thirdSub}) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle><br/>
          <Text>{duration}</Text>
          <Text>{level}</Text>
          <Text>{subtext}</Text>
          <ul>
            <li><Text>{firstSub}</Text></li>
            <li><Text>{secondSub}</Text></li>
            <li><Text>{thirdSub}</Text></li>
          </ul>
        </Box>
      </ItemContainer>
    </Item>
  )
}

const Courses = () => {
  
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach( (el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: '0'
        }, {
          y: '-30',

          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=100px',
            end: 'bottom center',
            scrub: true
          }
        }
      )
      
    } )
  
    return () => {
      
    };
  }, [])
  
  return (
    <Section id="Courses">
      <Title>Курсы</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <CoursesItem
            addToRef={addToRefs}
            title="Веб-разработка"
            duration="Срок обучения: 6 месяцев"
            level="Уровень подготовки: с нуля"
            subtext="Чему научитесь:"
            firstSub="верстка - основы HTML5/ CSS3"
            secondSub="интерактивность - модули и фреймворки JS"
            thirdSub="кроссплатформенность - разработка под различные устройства"/>
          <CoursesItem
            addToRef={addToRefs}
            title="Геймдизайн"
            duration=""
            level=""
            subtext="Описание"
            firstSub=""
            secondSub=""
            thirdSub=""/>
        </Items>
      </Container>
    </Section>
  )
}

export default Courses