import styled from 'styled-components'

export const CoffeeListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const OurCoffees = styled.section`
  margin: 2rem 10rem;
  padding: 0 10rem;
`
