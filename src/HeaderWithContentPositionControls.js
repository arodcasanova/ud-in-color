import { useEffect, useCallback } from 'react'
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
  const atLeastMin = Math.max(min, value)
  const atLeastMinAtMostMax = Math.min(max, atLeastMin)
  return atLeastMinAtMostMax
}

export const HeaderWithContentControls = ({
  maxContentPosition,
  setContentIndex,
}) => {
  const resetContentPosition = useCallback(
    () =>
      setContentIndex((prev) => ({
        ...prev,
        position: 0,
      })),
    [setContentIndex]
  )

  const incrementContentPosition = useCallback(
    () =>
      setContentIndex((prev) => ({
        ...prev,
        position: boundWithin({
          value: prev.position + 1,
          min: 0,
          max: maxContentPosition - 1,
        }),
      })),
    [setContentIndex, maxContentPosition]
  )

  const decrementContentPosition = useCallback(
    () =>
      setContentIndex((prev) => ({
        ...prev,
        position: boundWithin({
          value: prev.position - 1,
          min: 0,
          max: maxContentPosition - 1,
        }),
      })),
    [setContentIndex, maxContentPosition]
  )

  // keyboard control
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowRight':
          incrementContentPosition()
          break
        case 'ArrowLeft':
          decrementContentPosition()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [decrementContentPosition, incrementContentPosition])

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
