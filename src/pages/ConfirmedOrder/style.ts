import styled from 'styled-components'

export const ConfirmedOrderContent = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;

  h1 {
    color: ${(props) => props.theme.palette.yellow.dark};
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    gap: 6.375rem;

    margin-top: 2.5rem;
  }
`

export const DeliveryInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  div {
  }
  padding: 2.5rem;

  width: 32.875rem;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid ${(props) => props.theme.palette.purple.main};
  background: ${(props) => props.theme.palette.base.background};
`
