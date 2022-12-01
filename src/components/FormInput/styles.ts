import styled from 'styled-components'

export const InputContent = styled.input`
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.palette.base.button};

  font-size: 14px;
  color: ${(props) => props.theme.palette.base.text};
  line-height: 130%;

  height: 2.625rem;
  width: 12.5rem;

  background: ${(props) => props.theme.palette.base.input};
  padding: 0.75rem;

  ::placeholder {
    font-size: 14px;
    color: ${(props) => props.theme.palette.base.label};
  }

  :hover {
    border-color: ${(props) => props.theme.palette.yellow.dark};
  }

  :focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.palette.yellow.dark};
  }
`
