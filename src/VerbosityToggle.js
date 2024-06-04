import styled from 'styled-components'
import { COLOR, SHADOW } from 'Utils'

const GIST_UNSELECTED_STYLE = `
  background-color: white;
  color: ${COLOR.neutral600};
`

const GIST_SELECTED_STYLE = `
  background-color: ${COLOR.primary100};
  color: ${COLOR.primary700};
`

const ToggleContainer = styled.button`
  padding: 1rem;
  box-shadow: ${SHADOW.medium};
  border-radius: 8px;
  ${({ verbosity }) =>
    verbosity === 'full'
      ? GIST_UNSELECTED_STYLE
      : GIST_SELECTED_STYLE};
  transition: color 0.3s ease-in-out;

  &:hover {
    background-color: ${COLOR.primary100};
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
    >
      toggle plain language
    </ToggleContainer>
  )
}
