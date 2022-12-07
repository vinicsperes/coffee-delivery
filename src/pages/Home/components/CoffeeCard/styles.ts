import styled from 'styled-components'
import { Text, Title } from '../../../../styles/themes/textRule'

export const CardContainer = styled.div`
  img {
    margin-top: -1.25rem;
  }

  padding: 0 1.5625rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  width: 16rem;

  border-radius: 6px 36px 6px 36px;

  background: ${(props) => props.theme.palette.base.card};

  .tagList {
    margin: 0.75rem 0 1rem 0;
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
  }

  footer {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    .actions {
      display: flex;
      gap: 0.5rem;
      margin-left: 1.4375rem;

      .cartButton {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 8px;
        border-radius: 8px;
        background: ${(props) => props.theme.palette.purple.dark};
        border: none;

        :hover {
          background: ${(props) => props.theme.palette.purple.main};
        }
      }
    }
  }
`
export const CoffeeTag = styled.p`
  font-weight: bold;
  font-size: 10px;
  color: ${(props) => props.theme.palette.yellow.dark};

  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  background: ${(props) => props.theme.palette.yellow.light};
`
export const Description = styled(Text).attrs({
  size: 's',
  color: 'label',
})`
  margin: 0.5rem 1.25rem;
`
export const Price = styled(Title).attrs({
  size: 'm',
  color: 'text',
})`
  margin-left: 2px;
`
