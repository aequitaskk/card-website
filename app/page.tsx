"use client";
import Header from "./components/Header";
import styled from "styled-components";
import SectionLayout from "./components/SectionLayout";
import { cards } from "./utils/cards";
import Card from "./components/Card";
import FullPage from "./components/FullPage";
import TextSection from "./components/TextSection";

export default function Home() {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionLayout>
          <div className="cards">
            {cards.map((card, index) => {
              return (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              );
            })}
          </div>
        </SectionLayout>

        <FullPage />

        <SectionLayout>
          <div className="cards">
            {cards.map((card, index) => {
              return (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              );
            })}
          </div>
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

      </MainStyled>
    </>
  );
}

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;

  .cards {
    display: grid;
    grid-template-columns: repeat(6, 30rem);
    gap: 4rem;
  }
`;
