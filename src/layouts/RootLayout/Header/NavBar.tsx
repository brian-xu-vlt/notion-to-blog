import styled from "@emotion/styled"
import Link from "next/link"

const NavBar: React.FC = () => {
  return (
    <StyledWrapper className="">
      <Link href="/mdw-book-intro">Push Me !!!</Link>
    </StyledWrapper>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => (theme.scheme === "light" ? "white" : "black")};
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? theme.colors.indigo9 : theme.colors.indigo11};
`
