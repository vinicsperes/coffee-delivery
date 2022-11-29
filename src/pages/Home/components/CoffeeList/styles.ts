import styled from 'styled-components'

export const CoffeeListComponent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin-right: auto;
  margin-left: auto;
`

export const CoffeeListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin: 3.5rem auto;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1050px) {
    padding: 0;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 3.5rem 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const OurCoffees = styled.section`
  margin: 2rem auto;
  width: 100%;
  @media (max-width: 1300px) {
    display: flex;
    max-width: 52.5rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 700px) {
    padding: 2rem 5rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 1050px) {
    display: flex;
    max-width: 35rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
