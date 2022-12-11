import styled from 'styled-components'

export const CartContent = styled.main`
  #CartCardContent {
    width: 30rem;
  }

  .purpleBackground {
    background: ${(props) => props.theme.palette.purple.light};
  }

  .emptyCardContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.palette.yellow.dark};

    .iconWrapper {
      display: flex;
      align-items: center;

      svg {
        margin-bottom: 0.5rem;
        color: ${(props) => props.theme.palette.purple.main};
      }
    }

    p {
      font-family: ${({ theme }) => theme.fonts.baloo};
      color: ${(props) => props.theme.palette.purple.dark};
    }
  }
`

export const CoffeeSelected = styled.div`
  display: flex;
  gap: 1rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  .content {
    display: flex;
    flex-direction: column;

    .actions {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;
      margin-right: 3.125rem;
    }
  }
`
export const DeleteButton = styled.button`
  display: flex;
  gap: 0.4rem;
  padding: 0.5rem;
  background: ${(props) => props.theme.palette.base.button};
  border-radius: 6px;
  border: none;

  p {
    font-size: 12px;
    line-height: 160%;
    color: ${(props) => props.theme.palette.base.text};
  }

  :hover {
    background: ${(props) => props.theme.palette.base.hover};
  }
`

export const ConfirmOrderButton = styled.button`
  background: ${(props) => props.theme.palette.yellow.main};
  width: 100%;
  height: 2.875rem;
  border-radius: 6px;
  border: none;

  margin-top: 2rem;

  p {
    font-size: 14px;
    font-weight: bold;
    line-height: 160%;
    color: ${(props) => props.theme.palette.white};
  }

  :hover {
    background: ${(props) => props.theme.palette.yellow.dark};
  }
`
