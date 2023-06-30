"use client";

import React, { useRef } from "react";
import hover3d from "../utils/hover";
import { styled } from "styled-components";
import Image from "next/image";

function ZoomSection() {
  const hero = useRef<HTMLDivElement>(null);

  const hover = hover3d(hero, {
    x: 5,
    y: 10,
    z: 4,
  });

  const hover2 = hover3d(hero, {});

  const hover3 = hover3d(hero, {})

  return (
    <ZoomStyled ref={hero}>
      <div className="image" style={{ height: "50rem", width: "100%" }}>
        <Image
          src="/images/galaxy.jpg"
          alt="Galaxy"
          fill
          sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            background: "var(--color-bg)",
          }}
        />

        <Image
          src="/images/franco.jpg"
          alt="Franco"
          className="franco"
          width={500}
          height={500}
          style={{
            objectFit: "cover",
            objectPosition: "50% 0%",
            transform: hover2.transform,
            transition: hover2.transition,
          }}
        />

        <Image
          src="/images/harper.jpg"
          alt="harper"
          className="harper"
          width={500}
          height={500}
          style={{
            objectFit: "cover",
            objectPosition: "50% 0%",
            transform: hover3.transform,
            transition: hover3.transition,
          }}
        />
      </div>
    </ZoomStyled>
  );
}

const ZoomStyled = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--color-border);

  .image {
    border-radius: 8px;

    img {
      border-radius: 8px;
    }
  }

  .franco {
    position: absolute;
    top: 10%;
    right: 3rem;
  }

  .harper {
    position: absolute;
    top: 10%;
    left: 3rem;
  }
`;

export default ZoomSection;
