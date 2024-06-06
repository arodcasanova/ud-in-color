import { useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { SHADOW } from 'Utils'
import prev from 'images/prev.svg'
import next from 'images/next.svg'

const HeaderWithShadow = styled.header`
  box-shadow: ${SHADOW.high};
`

const NavWithHorizontalLayoutAndNarrowPadding = styled.nav`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

const HomeButton = styled.button`
  border-radius: 99px;
  padding: 1rem;
  transition: background-color 0.4s ease-in-out;

  &:hover {
    background-color: #afd8f880;
  }
`

const ArrowButton = styled.button`
  border-radius: 99px;
  height: 2.5rem;
  width: 2.5rem;
  margin-right: 2rem;
  background-image: url(${({ background }) => background});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? '.1' : '1')};
  transition: background-color 0.4s ease-in-out;

  &:hover {
    background-color: #afd8f880;
  }
`

const boundWithin = ({ value, min, max }) => {
  const atLeastMin = Math.max(min, value)
  const atLeastMinAtMostMax = Math.min(max, atLeastMin)
  return atLeastMinAtMostMax
}

export const HeaderWithContentControls = ({
  contentPosition,
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

  const prevDisabled = contentPosition === 0
  const nextDisabled =
    contentPosition === maxContentPosition - 1

  return (
    <HeaderWithShadow>
      <NavWithHorizontalLayoutAndNarrowPadding>
        <HomeButton
          aria-label="UD: return to chapter 1"
          style={{ marginRight: '4rem' }}
          onClick={resetContentPosition}
        >
          UD
        </HomeButton>
        <ArrowButton
          disabled={prevDisabled}
          aria-label={`previous chapter: ${
            prevDisabled && 'disabled, already at start'
          }`}
          background={prev}
          onClick={decrementContentPosition}
        />
        <ArrowButton
          disabled={nextDisabled}
          aria-label={`next chapter. ${
            nextDisabled && 'disabled, already at end'
          }`}
          background={next}
          onClick={incrementContentPosition}
        />
      </NavWithHorizontalLayoutAndNarrowPadding>
    </HeaderWithShadow>
  )
}
