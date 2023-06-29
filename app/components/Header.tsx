"use client";

import { Abril_Fatface } from "next/font/google";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { CiBaseball } from "react-icons/ci";
import Image from "next/image";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

function Header() {
  return (
    <HeaderStyled>
      <nav>
        <div>
          <h2>Logo</h2>
        </div>
        <div className="input">
          <input type="text" placeholder="Search..." />
        </div>
        <ul className="nav-items">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Collectibles</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
        </ul>
      </nav>
      <div className="header-content">
        <div className="text-content">
          <h1 className={abril.className}>Buy, Collect, and Get Rewards</h1>
          <p>
            Collectors are picking up Challenge Rewards, Event Exclusives,
            Unique Cards and Collectibles!
          </p>
          <div className="buttons">
            <Button
              name="Show Now"
              background="#f2994a"
              color="#fff"
              border="1px solid #f2994a"
            />
            <Button name="Learn More" />
          </div>
        </div>
        <div className="image-content">
          <div className="image">
            <Image
              src="/images/ohtani.png"
              alt="hero"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
  }

  .nav-items {
    display: flex;
    align-items: center;
    gap: 2rem;

    li {
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: scale(1.1);
        color: white;
      }
    }
  }

  .input {
    flex: 2;
    display: flex;
    justify-content: center;

    input {
      width: 55%;
      padding: 0.6rem 0.8rem;
      border-radius: 8rem;
      background-color: #161616;
      border: 1px solid var(--color-border);

      &::placeholder {
        color: var(--color-border);
        font-weight: 500;
      }
    }
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: calc(100vh - 10vh);
    padding: 0 10rem 5rem 10rem;

    .text-content {
      > h1 {
        font-size: clamp(2rem, 5vw, 5rem);
        color: #f2994a;
        transition: all 0.1s linear;
        padding-bottom: 1.5rem;
      }
      
      .buttons {
        display: flex;
        gap:1rem;
        margin-top:2.5rem;
      }
    }

    .image-content {
      padding: 1rem;
      border-radius: 8px;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);

      img {
        border-radius: 8px;
      }
    }
  }
`;

export default Header;
