import styled from 'styled-components'

export const VerbosityToggle = ({ togglePlainLanguage }) => {
  return (
    <button className="toggle-btn" onClick={togglePlainLanguage}>
      toggle plain language
      <div className="thumb"></div>
    </button>
  )
}
