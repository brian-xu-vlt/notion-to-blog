import { CONFIG } from "site.config"
import React from "react"
import { AiFillCodeSandboxCircle } from "react-icons/ai"
import styled from "@emotion/styled"
import { Emoji } from "src/components/Emoji"
import { css, keyframes } from "@emotion/react"

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
            <AiFillCodeSandboxCircle className="icon" />
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

// const StyledWrapper = styled.div`
//   display: flex;
//   padding: 0.25rem;
//   margin-bottom: 2.25rem;
//   flex-direction: column;
//   border-radius: 1rem;
//   background-color: ${({ theme }) =>
//     theme.scheme === "light" ? "white" : theme.colors.gray4};
//   > a {
//     display: flex;
//     padding: 0.75rem;
//     gap: 0.75rem;
//     align-items: center;
//     border-radius: 1rem;
//     color: ${({ theme }) => theme.colors.gray11};
//     cursor: pointer;

//     :hover {
//       color: ${({ theme }) => theme.colors.gray12};
//       background-color: ${({ theme }) => theme.colors.gray5};
//     }
//     .icon {
//       font-size: 1.5rem;
//       line-height: 2rem;
//     }
//     .name {
//       font-size: 0.875rem;
//       line-height: 1.25rem;
//     }
//   }
// `

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
    background-image: conic-gradient(
      transparent,
      rgb(255, 66, 32),
      rgb(185, 75, 56),
      rgb(213, 32, 0),
      rgb(185, 75, 56),
      #ff2600,
      #b94b38,
      transparent 80%
    );
    animation: rotate 4s linear infinite;
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
    color: ${({ theme }) => theme.colors.gray11}; // Adjust color as needed
    cursor: pointer;

    :hover {
      color: ${({ theme }) =>
        theme.colors.gray12}; // Adjust hover color as needed
      background-color: ${({ theme }) =>
        theme.scheme === "light" ? "#f23d1d" : theme.colors.blue10};
    }

    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  // Include the opacityChange animation if you plan to apply it to a specific element
  @keyframes opacityChange {
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`
