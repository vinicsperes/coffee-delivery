import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import '../../global.css'

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.5rem;
  width: 100%;
  background: ${(props) => props.theme.palette.background};
  position: fixed;
`

export const HeaderContainer = styled.div`
  @media (max-width: 600px) {
    padding: 1rem 0;
    justify-content: center;
    gap: 2rem;
  }

  @media (max-width: 1300px) {
    padding: 1rem 2rem;
  }

  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 70rem;
  margin-right: auto;
  margin-left: auto;

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
  }
`
interface CartLinkProps {
  clickble: string
}

export const CartLink = styled(NavLink)<CartLinkProps>`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  background: ${(props) => props.theme.palette.yellow.light};
  position: relative;
  cursor: ${(props) => (props.clickble === '' ? 'not-allowed' : 'pointer')};

  .itemCounter {
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
`
