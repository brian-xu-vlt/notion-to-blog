import { CONFIG } from "site.config"
import Image from "next/image"
import React from "react"
import styled from "@emotion/styled"
import { Emoji } from "src/components/Emoji"

type Props = {}

const ProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="content">
        <div className="top">
          <Image src={CONFIG.profile.image} fill alt="" />
        </div>
        <div className="mid">
          <div className="name">{CONFIG.profile.name}</div>
          <div className="roles">
            {CONFIG.profile.roles.map((role) => (
              <div className="role" key={role}>
                {role}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="content">
        <div className="text-sm mb-2 bio ">{CONFIG.profile.bio}</div>
      </div>
    </StyledWrapper>
  )
}

export default ProfileCard

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > .title {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  > .content {
    margin-bottom: 2.25rem;
    border-radius: 1rem;
    width: 100%;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.gray4};
    @media (min-width: 768px) {
      padding: 1rem;
    }
    @media (min-width: 1024px) {
      padding: 1rem;
    }
    .top {
      position: relative;
      width: 100%;
      &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
    }
    .mid {
      text-align: center;
      display: flex;
      padding: 0.5rem;
      flex-direction: column;
      .name {
        font-size: 1.55rem;
        line-height: 1.75rem;
        font-weight: 700;
        margin-bottom: 1.5em;
      }
      .roles {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
      }
      .role {
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: ${({ theme }) => theme.colors.gray11};
      }
      .bio {
        color: ${({ theme }) => theme.colors.gray12};
        text-align: center;
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
    }
  }
`
