import styled from 'styled-components'

export const ItemGrid = styled.div`
  flex: 1 1 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0.75rem 0.75rem 0.75rem 0;
  gap: 0.75rem;

  p {
    color: ${(props) => props.theme.palette.base.text};
  }
`
interface IconCircleProps {
  variant: string
}

export const IconCircle = styled.span<IconCircleProps>`
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  min-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;
  background: ${(props) => props.variant};
`
