import styled from "styled-components";
import { ConfettiComponent } from "../Confetti";
import logoreact from "../../assets/react.png";
import { Mostrarequipos } from "../../api/equipo";
import { useEffect, useState } from "react";
const MemberComponent = ({ img, name = " ", cargo = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <img width={500} height={400} src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{cargo}</Position>
    </Item>
  );
};

export function Team() {
  const [equipo, setEquipo] = useState([]);
  const mostrarequipo = async () => {
    const docs = await Mostrarequipos();
    setEquipo([...docs]);
  };
  useEffect(() => {
    mostrarequipo();
  }, []);
  return (
    <Section id="team">
      <ConfettiComponent />
      <Title>React - Firebase</Title>

      <Container>
        {equipo.map((data) => (
          <MemberComponent
            key={data.id}
            img={data.icono}
            name={data.nombre}
            cargo={data.cargo}
          />
        ))}
      </Container>
    </Section>
  );
}
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  overflow: hidden;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;

//elementos de las tarjetas
const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;

  backdrop-filter: blur(4px);

  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: 30em) {
    width: 70vw;
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.carouselColor};
  border: 1px solid ${(props) => props.theme.text};
  padding: 1rem;

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;

const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  font-weight: 400;
`;
