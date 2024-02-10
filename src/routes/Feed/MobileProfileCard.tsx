import { CONFIG } from "site.config"
import Image from "next/image"
import React from "react"
import styled from "@emotion/styled"

type Props = {
  className?: string
}

const MobileProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="mid">
        <div className="wrapper">
          <Image
            src={CONFIG.profile.image}
            width={90}
            height={90}
            css={{ position: "relative" }}
            alt="profile_image"
          />
          <div className="wrapper">
            <div className="top">{CONFIG.profile.name}</div>
            <div className="roles">
              {CONFIG.profile.roles.map((role) => (
                <div className="mid" key={role}>
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mid bio">
        <div className="text-sm mb-2 bio ">{CONFIG.profile.bio}</div>
      </div>
    </StyledWrapper>
  )
}

export default MobileProfileCard

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  .bio {
    color: ${({ theme }) => theme.colors.gray12};
    padding: 1rem;
    line-height: 1.25rem;
  }

  @media (min-width: 1024px) {
    display: none;
  }

  .roles {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.gray11};
  }

  > .top {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  > .mid {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.gray4};
    > .wrapper {
      display: flex;
      gap: 1em;
      align-items: center;
      > .wrapper {
        display: flex;
        flex-direction: column;
        height: fit-content;
        gap: 1rem;
        > .top {
          font-size: 1.25rem;
          line-height: 1.75rem;
          font-weight: 700;
        }
        > .mid {
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: ${({ theme }) => theme.colors.gray11};
        }
        > .btm {
          text-align: justify;
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
      }
    }
  }
`
