import styled from 'styled-components'
import backgroundIntro from '../../../../assets/backgroundIntro.png'
import { rgba } from 'polished'

export const IntroArticle = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  width: 100%;
  height: 34rem;
  margin-top: 6.5rem;

  background: ${(props) => `url(${backgroundIntro}) no-repeat center,
    linear-gradient(
      0deg,
      ${props.theme.palette.white} 0%,
      ${rgba(props.theme.palette.background, 0.001)} 50%,
      ${props.theme.palette.background} 100%
      )`};
  background-size: cover;
  @media only screen and (max-width: 700px) {
    margin-top: 10rem;
  }
  @media only screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    img {
      width: 80%;
    }
  }
  @media only screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    padding: 8rem;
    img {
      width: 40%;
    }
  }

  .container {
    width: 100%;
    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1050px) {
      align-items: center;
      justify-content: center;
      img {
        display: none;
      }
    }
  }

  .title {
    max-width: 36.75rem;
    width: 100%;
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

  @media (max-width: 1050px) {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
  }
`
