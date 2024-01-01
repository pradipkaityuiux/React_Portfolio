import styled from "styled-components"

export const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 30vw) 1fr;
  gap: 2rem;
  margin-block: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #ebebeb;
  @media screen and (max-width:666px){
    grid-template-columns: 1fr;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
`
export const ImageContainer = styled.div`
  border-radius: 0.6rem;
  width: 100%;
  height: 16rem;
  overflow: hidden;
  position: relative;
`
export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
`
export const Description = styled.p`
  font-size: 1rem;
  font-weight: normal;
  color: #616161;
  margin-bottom: 0.6rem;
`
export const Image = styled.img`
  border-radius: 0.8rem;
  box-shadow: 4px 4px 6px 0 rgba(0,0,0,0.2);
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top right;
`
export const ImageHover = styled.img`
  width: 100%;
  height: auto;
  /* object-fit: cover;
  object-position: top; */
  animation: scroll ${props => props.duration}s 0.4s linear infinite alternate;
  @keyframes scroll {
    0%{
      transform: translateY(0);
    }
    100%{
      transform: translateY(calc(-100% + 16rem));
    }
  }
`
export const ChipsContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  margin-bottom: 1rem;
`
export const Chips = styled.p`
  font-size: 1rem;
  color: #FFF;
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 5rem;
`
export const LinkContainer = styled.div`
  margin-top: auto;
  display: flex;
  gap: 1rem;
  align-items: center;
`
export const StyledLink = styled.a`
  font-size: 1rem;
  color: #0042d9;
  background-color: #e8efff;
  padding: 0.4rem 0.8rem;
  border-radius: 4rem;
  &>i{
    margin-left: 4px;
  }
  &:hover{
    background-color: #dee8ff;
  }
`
export const Casestudy = styled.p`
  font-size: 1rem;
  background-color: #FFF;
  border: 1px solid #0042d9;
  color: #0042d9;
  padding: 0.4rem 0.8rem;
  border-radius: 2rem;
`
export const Github = styled.a`
  color: #000;
  &>i{
    font-size: 2rem;
  }
`
export const Book = styled.span`
  background-color: #ffffff;
  padding: 0.2rem 0.4rem 0.2rem;
  box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.2);
  border-radius: 50%;
  cursor: pointer;
  &>i{
    font-size: 1.4rem;
    margin-top: 3px;
    color: #264EE4;
  }
`