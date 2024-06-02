import styled from 'styled-components'

const HeaderWithShadow = styled.header`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`

const NavWithHorizontalLayoutAndNarrowPadding = styled.nav`
  display: flex;
  align-items: baseline;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

const boundWithin = ({ value, min, max }) => {
  const greaterThanMin = Math.max(min, value)
  const greaterThanMinAndLessThanMax = Math.min(max, greaterThanMin)
  return greaterThanMinAndLessThanMax
}

export const HeaderWithContentControls = ({
  maxContentPosition,
  setContentIndex,
}) => {
  const resetContentPosition = () =>
    setContentIndex((prev) => ({
      ...prev,
      position: 0,
    }))

  const incrementContentPosition = () =>
    setContentIndex((prev) => ({
      ...prev,
      position: boundWithin({
        value: prev.position + 1,
        min: 0,
        max: maxContentPosition - 1,
      }),
    }))

  const decrementContentPosition = () =>
    setContentIndex((prev) => ({
      ...prev,
      position: boundWithin({
        value: prev.position - 1,
        min: 0,
        max: maxContentPosition - 1,
      }),
    }))

  return (
    <HeaderWithShadow>
      <NavWithHorizontalLayoutAndNarrowPadding>
        <button style={{ marginRight: '4rem' }} onClick={resetContentPosition}>
          UD
        </button>
        <button
          style={{ marginRight: '2rem' }}
          onClick={decrementContentPosition}
        >
          prev
        </button>
        <button
          style={{ marginRight: '2rem' }}
          onClick={incrementContentPosition}
        >
          next
        </button>
      </NavWithHorizontalLayoutAndNarrowPadding>
    </HeaderWithShadow>
  )
}
