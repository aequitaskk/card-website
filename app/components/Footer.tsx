import Image from "next/image";
import React from "react";
import { styled } from "styled-components";
import {
  AiFillMail,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

function Footer() {
  return (
    <FooterStyled>
      <footer>
        <div className="container">
          <div className="logo-container">
            <div className="logo">
              <Image src="/images/logo.png" alt="Logo" height={40} width={40} />
              <h2>Baseball Card</h2>
            </div>
            <div className="socials">
              <AiFillGithub />
              <AiFillTwitterCircle />
              <AiFillInstagram />
              <AiFillLinkedin />
            </div>
          </div>
          <div className="right-container">
            <p>
              Be among the first to receive exclusive updates and earn early
              access to product releases. Enter your e-mail address and you’ll
              receive an email with a one-time 10% off coupon upon signup.
            </p>
            <div className="input">
              <input type="text" placeholder="Enter your email address" />
              <button>
                <AiFillMail />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  position: relative;
  z-index: 10;
  padding: 5rem 2rem 0 2rem;
  background-color: var(--color-bg);
  border-top: 1px solid var(--color-border);

  .container {
    display: flex;
    justify-content: space-between;
    gap: 3rem;

    .logo-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 50%;

      .logo {
        display: flex;
        align-items: center;
        gap: 1rem;

        h2 {
          font-weight: bold;
          font-size: 25px;
        }
      }

      .socials {
        display: flex;
        gap: 0.5rem;
        font-size: 1.5rem;
        svg {
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          &:hover {
            color: white;
          }
        }
      }
    }
    .right-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: space-between;

      .input {
        position: relative;

        input {
          width: 100%;
          padding: 0.6rem 0.8rem;
          border-radius: 8px;
          background-color: #161616;
          border: 1px solid var(--color-border);
          &::placeholder {
            color: var(--color-border);
            font-weight: 500;
          }
        }
        button {
          position: absolute;
          right: 2rem;
          top: 45%;
          transform: translateY(-50%);
          cursor: pointer;
          background-color: transparent;
          transition: all 0.3s ease-in-out;
          font-size: 1.5rem;
          &:hover {
            color: white;
            transform: translateY(-50%) translateX(0.5rem);
          }
        }
      }
    }
  }
`;

export default Footer;
