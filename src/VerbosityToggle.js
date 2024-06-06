import styled from 'styled-components'
import { COLOR, SHADOW } from 'Utils'
import bookPicked from 'images/book-pick.svg'
import pagePicked from 'images/page-pick.svg'
import bookWide from 'images/book-pick-wide.svg'
import pageWide from 'images/page-pick-wide.svg'

const ToggleContainer = styled.button`
  display: flex;
  align-items: center;
  width: 6rem;
  border-radius: 8px;
  box-shadow: ${SHADOW.medium};
  border-radius: 8px;
  background-image: url(${({ verbosity }) =>
    verbosity === 'full' ? bookWide : pageWide});
  background-size: 62%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  transition: background-image 0.3s ease-in-out;
  transition: border 0.1s ease-in-out;

  &:hover {
    border: 2px solid ${COLOR.primary300};
  }
`

export const VerbosityToggle = ({
  contentVerbosity,
  togglePlainLanguage,
}) => {
  return (
    <ToggleContainer
      verbosity={contentVerbosity}
      onClick={togglePlainLanguage}
    />
  )
}
