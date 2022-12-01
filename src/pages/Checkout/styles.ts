import styled from 'styled-components'

export const CheckoutComponent = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  margin-top: 10rem;
  width: 100%;
`

export const CardContent = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme.palette.base.card};
  border-radius: 6px;
  margin-top: 0.75rem;

  form {
    margin-top: 2rem;

    .wrapper {
      display: flex;
      flex-direction: column;
      .row {
        margin-bottom: 1rem;
        display: flex;
        flex: auto;
        flex-grow: 1;
        flex-shrink: 1;
        input {
          margin-right: 0.75rem;
        }
      }

      .second > input {
        flex-basis: 100%;
      }

      .third > input:not(:first-child) {
        flex: auto;
      }

      .fourth > input:not(:first-child) {
        flex: auto;
      }

      .fourth > input:last-child {
        width: 3.75rem;
      }
    }
  }

  hr {
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.palette.base.button};
    border: none;
    margin: 1.5rem 0;
  }

  .itemsPrice {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`

export const InfoSection = styled.div`
  gap: 0.5rem;
  display: flex;
  margin-bottom: 2rem;
`
export const SelectPaymentMethod = styled.div`
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    gap: 0.75rem;
    width: 11rem;
    padding: 1rem;
    border-radius: 6px;
    background: ${(props) => props.theme.palette.base.button};
    font-size: 12px;
    color: ${(props) => props.theme.palette.base.text};
    svg {
      vertical-align: center;
    }
  }
`

export const CoffeeSelected = styled.div`
  display: flex;
  gap: 1.25rem;

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
`
