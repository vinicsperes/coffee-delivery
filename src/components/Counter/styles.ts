import styled from 'styled-components'

export const CounterContainer = styled.div`
  width: 4.5rem;
  height: 2.375rem;
  border-radius: 6px;
  background: ${(props) => props.theme.palette.base.button};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme.palette.purple.main};

    button {
      display: flex;
      background: none;
      color: inherit;
      border: none;
      font: inherit;
      cursor: pointer;
      :hover {
        color: ${(props) => props.theme.palette.purple.dark};
      }
      svg {
        vertical-align: center;
      }
    }
  }
`
