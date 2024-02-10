import { CONFIG } from "site.config"
import React from "react"
import { TbFocus2 } from "react-icons/tb"
import styled from "@emotion/styled"
import { Emoji } from "src/components/Emoji"

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null
  return (
    <>
      <StyledTitle>
        <Emoji>🌟</Emoji> Try me
      </StyledTitle>
      <StyledWrapper>
        {CONFIG.projects.map((project, idx) => (
          <a
            key={idx}
            href={`${project.href}`}
            rel="noreferrer"
            target="_blank"
          >
            <TbFocus2 className="icon" />
            <div className="name">{CONFIG.projects[0].name}</div>
          </a>
        ))}
      </StyledWrapper>
    </>
  )
}

export default ServiceCard

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  padding: 2rem;
  position: relative;
  z-index: 0;
  margin: 20px;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};

  &::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.gray4};
    background-repeat: no-repeat;
    background-position: 0 0;
    filter: blur(80px);
    background-image: conic-gradient(
      transparent,
      #ff2600,
      #ff2600,
      #3300ff,
      #b94b38,
      #b94b38,
      transparent 70%
    );
    animation: rotate 6s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.gray4};
    border-radius: 5px;
  }

  > a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.green12}; // Adjust color as needed
    cursor: pointer;

    :hover {
      color: ${({ theme }) =>
        theme.scheme === "light" ? "white" : theme.colors.gray12};
      background-color: ${({ theme }) =>
        theme.scheme === "light" ? "#f23d1d" : theme.colors.blue10};
    }

    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    .name {
      font-size: 1.4rem;
      line-height: 1.25rem;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  @keyframes opacityChange {
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`
