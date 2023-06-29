"use client";

import { Abril_Fatface } from "next/font/google";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const abril = Abril_Fatface({
  subsets:["latin"],
  weight: '400',
})

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
`;

export default Header;
