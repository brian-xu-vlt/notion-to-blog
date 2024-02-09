import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"
import Image from "next/image"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      <Image
        src={CONFIG.profile.image}
        width={40}
        height={40}
        css={{ position: "relative" }}
        alt="profile_image"
      />
      {CONFIG.blog.title}
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
  margin: 1.25rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`
