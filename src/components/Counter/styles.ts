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

    p {
      display: flex;
      svg {
        vertical-align: center;
      }
    }
  }
`
