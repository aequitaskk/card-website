"use client";

import Image from "next/image";
import React from "react";
import { styled } from "styled-components";

function FullPage() {
  return (
    <FullPageStyled>
      <div className="image">
        <Image
          src="/images/jazz.jpg"
          alt="Jazz"
          fill={true}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
    </FullPageStyled>
  );
}

const FullPageStyled = styled.div`
  .image {
    width: calc(100% - 10rem);
    height: 1000px;
    position: relative;
    border-radius: 1rem;
    border-radius: 8px;
    border: 1px solid var(--color-border);
    transition: border 0.3s ease-in-out;
  }
  
  img {
    padding: 1.5rem;
  }

  &:hover {
    border: 1px solid #f2994a;
  }
`;

export default FullPage;
