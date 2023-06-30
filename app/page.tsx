"use client";
import Header from "./components/Header";
import styled from "styled-components";
import SectionLayout from "./components/SectionLayout";
import { cards } from "./utils/cards";
import Card from "./components/Card";
import FullPage from "./components/FullPage";
import TextSection from "./components/TextSection";
import ZoomSection from "./components/ZoomSection";
import HorizontalWrapper from "./components/HorizontalWrapper";

export default function Home() {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={-1400}>
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
          </HorizontalWrapper>
        </SectionLayout>

        <FullPage />

        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={1400}>
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
          </HorizontalWrapper>
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        {/* <SectionLayout>
          <ZoomSection />
        </SectionLayout> */}
      </MainStyled>
    </>
  );
}

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;

  .cards {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(6, 30rem);
    gap: 4rem;
  }
`;
