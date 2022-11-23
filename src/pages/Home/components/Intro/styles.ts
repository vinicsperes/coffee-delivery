import styled from 'styled-components'
import backgroundIntro from '../../../../assets/backgroundIntro.png'
import { rgba } from 'polished'

export const IntroArticle = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;

  padding: 5.75rem 10rem;

  background: ${(props) => `url(${backgroundIntro}) no-repeat center,
    linear-gradient(
      0deg,
      ${props.theme.palette.white} 0%,
      ${rgba(props.theme.palette.background, 0.001)} 50%,
      ${props.theme.palette.background} 100%
      )`};
  background-size: cover;

  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    padding: 0rem;
    img {
      width: 70%;
    }
  }

  .container {
    width: 50%;
  }

  .title {
    line-height: 2rem;

    h2 {
      margin-top: 1rem;
      color: ${(props) => props.theme.palette.base.subtitle};
    }
  }
`
export const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 40rem;
  max-height: calc(100% - 4em);
  height: calc(100%);

  margin-top: 4.125rem;
`
