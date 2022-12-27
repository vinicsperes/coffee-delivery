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
  animation: blink 1.5s;
  animation-iteration-count: 1;
  
  @keyframes blink {
    50% {
      border-color: #fff;
    }
  }

  form {
    input:-webkit-autofill {
      -webkit-text-fill-color: ${(props) =>
        props.theme.palette.base.text} !important;
      -webkit-text-size-adjust: 14px !important;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px
        ${(props) => props.theme.palette.base.input} inset !important;
      padding: 0.75rem;
      line-height: 130% !important;
    }

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

  button {
    border: none;
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

  button:is(:focus, :hover) {
    padding: 0.9375rem;
    border: 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.palette.purple.main};
    cursor: pointer;
  }
`
