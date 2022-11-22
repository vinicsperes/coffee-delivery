import styled from 'styled-components'
import '../../global.css'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  background: ${(props) => props.theme.background};

  padding: 2rem 10rem;

  .actions {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }

  .location {
    display: flex;
    background: ${(props) => props.theme.palette.purple.light};
    padding: 0.5rem;
    gap: 0.25rem;
    border-radius: 6px;
    color: ${(props) => props.theme.palette.purple.dark};
    line-height: 130%;
    font-size: 14px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cart {
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 8px;
    background: ${(props) => props.theme.palette.yellow.light};
    position: relative;

    span {
      position: absolute;
      right: -0.5rem;
      top: -0.5rem;

      width: 1.25rem;
      height: 1.25rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 999px;
      background: ${(props) => props.theme.palette.yellow.dark};

      font-size: 14px;
      font-weight: bold;
      color: ${(props) => props.theme.palette.white};
    }
  }
`
