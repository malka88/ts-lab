import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 100vw;
  position: relative;

  background-color: #C9EAF8;
`

const Title = styled.h2`
  padding-top: 3rem;
  font-size: ${props => props.theme.fontxxl};
  color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-bottom: 2px solid ${props => props.theme.text};
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
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding-bottom: 3rem;
  padding-top: 3rem;

  @media (max-width: 64em){
    flex-direction: row;
    width: 100%;
  }

  @media (max-width: 48em){
    flex-direction: column;
    align-items: center;
  }
`

const Items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 64em){
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
  }

  @media (max-width: 48em){
    width: 80%;
  }
`

const Item = styled.div`
  border: 2px solid ${props => props.theme.text};
  border-left: 10px dashed ${props => props.theme.text};
  box-shadow: inset -10px 0px ${props => props.theme.highlight};
  color: ${props => props.theme.text};
  width: 30%;
  margin: 1rem;
  padding: 1rem;
  background-color: ${props => props.theme.body};

  @media (max-width: 64em){
    width: 70%;
  }

`

const Number = styled.span`
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  font-size: ${props => props.theme.fontlg};
`

const SubTitle = styled.span`
  display: block;
  font-size: ${props => props.theme.fontlg};
  font-weight: 700;
  padding-top: 1rem;

  @media (max-width: 64em){
    font-size: ${props => props.theme.fontmd};
  }

  @media (max-width: 48em){
    font-size: ${props => props.theme.fontsm};
  }
`

const Content = styled.span`
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

const Benefits = () => {
  return (
      <Section id='Benefits'>
        <Title>Преимущества</Title>
        <Container>
          <Items>
            <Item>
              <Number>01/</Number>
              <SubTitle>Командная работа</SubTitle>
              <Content>Вы почувствуете, какого это, работать вместе над одним проектом, распределять задачи и учиться находить подход к разным людям.</Content>
            </Item>
            <Item>
              <Number>02/</Number>
              <SubTitle>Проектный подход</SubTitle>
              <Content>Вы будете учиться создавая интересные проекты, поэтому результат обучения будет виден с первых занятий.</Content>
            </Item>
            <Item>
              <Number>03/</Number>
              <SubTitle>Партнеры</SubTitle>
              <Content>С нами сотрудничает множество крупных партнеров, поэтому ваши успехи в обучении сразу заметят и заинтересуются вашей кандидатурой.</Content>
            </Item>
          </Items>
          <Items>
            <Item>
              <Number>04/</Number>
              <SubTitle>Интерактивный формат занятий</SubTitle>
              <Content>Вы будете не пассивными слушателями, а активными участниками рабочего процесса, благодаря чему общение друг с другом и преподавателем будет происходить в свободной форме.</Content>
            </Item>
            <Item>
              <Number>05/</Number>
              <SubTitle>Сертификат об обучении</SubTitle>
              <Content>При окончании обучения вам выдается сертификат, подтверждающий ваши навыки и служащий дополнительным бонусом при трудоустройстве.</Content>
            </Item>
            <Item>
              <Number>06/</Number>
              <SubTitle>Востребованность на рынке</SubTitle>
              <Content>Все наши направления имеют большой спрос у работодателей, поэтому ваше время не будет потрачено понапрасну.</Content>
            </Item>
          </Items>
        </Container>
      </Section>
  )
}

export default Benefits