import React from 'react'
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
  margin: auto;
  border-bottom: 2px solid ${props => props.theme.body};
  width: fit-content;

  @media (max-width: 64em){
    font-size: ${props => props.theme.fontxl};
  }

  @media (max-width: 48em){
    font-size: ${props => props.theme.fontlg};
  }
`

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

`

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Items = styled.ul`
  color: ${props => props.theme.body};
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &>*:nth-of-type(2n+1){
    justify-content: start;

    @media (max-width: 64em){
      justify-content: end;
      padding-right: 1rem;
    }
  }

  &>*:nth-of-type(2n){
    justify-content: end;

    @media (max-width: 64em){
      justify-content: end;
      padding-right: 1rem;
    }
  }
`

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  padding-bottom: 1rem;

  @media (max-width: 64em){
    margin-bottom: 1rem;
  }
`

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 2px solid ${props => props.theme.body};
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 64em){
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 75%;
  }

  @media (max-width: 48em){
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
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

const CoursesItem = ({title, level, subtext, firstSub, secondSub, thirdSub}) => {
  return (
    <Item>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle><br/>
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
  
  return (
    <Section id="Courses">
      <Title>Курсы</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
            <CoursesItem
              title="Веб-разработчик"
              level="Получите навыки создания сайтов и веб-приложений"
              subtext="Чему научитесь:"
              firstSub="верстка - основы HTML5/ CSS3"
              secondSub="интерактивность - модули и фреймворки JS"
              thirdSub="кроссплатформенность - разработка под различные устройства"/>
            <CoursesItem
              title="Геймдизайнер"
              level="Получите навыки проектирования интересных игровых миров и создания увлекательного опыта"
              subtext="Чему научитесь:"
              firstSub="создание качественных игровых миров"
              secondSub="грамотная монетизация своих творений"
              thirdSub="геймификация неигровых продуктов"/>
            <CoursesItem
              title="SMM-специалист"
              level="Получите навыки продвижения в соцсетях, создания контента и работы с аудиторией"
              subtext="Чему научитесь:"
              firstSub="создание и анализ рекламы в соцсетях"
              secondSub="создание фото и видео контента"
              thirdSub="умение работать с аудиторией"/>
            <CoursesItem
              title="3D-дженералист"
              level="Получите навыки для работы с 3D в любой сфере"
              subtext="Чему научитесь:"
              firstSub="создание моделей в 3d редакторах"
              secondSub="работа с текстурами, формой и цветом"
              thirdSub="анимация объектов"/>
            <CoursesItem
              title="Аналитик данных"
              level="Получите навык преобразованния сырых данных в полезную информацию"
              subtext="Чему научитесь:"
              firstSub="изучение язык запросов SQL"
              secondSub="освоение библиотеки Python"
              thirdSub="работа c файлами, HTML-страницами и API"/>
          </Items>
      </Container>
    </Section>
  )
}

export default Courses