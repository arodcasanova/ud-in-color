import styled from 'styled-components'
import { SHADOW } from 'Utils'
import rohan from 'images/rohan.png'
import suzanne from 'images/suzanne.png'
import monique from 'images/monique.png'

const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.67rem 1.4rem;
  border-radius: 8px;
  box-shadow: ${SHADOW.medium};
  margin-right: 1rem;

  & > *:not(:last-child) {
    margin-right: 1.24rem;
  }
`

const VOICE_SELECTED_STYLE = `
  filter: grayscale(0);
  transform: scale(1.2);
`

const VoiceButton = styled.button`
  border-radius: 99px;
  height: 2rem;
  width: 2rem;
  background-image: url(${({ background }) => background});
  background-size: cover;
  cursor: pointer;
  filter: grayscale(1);
  transition: filter 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;

  &:hover {
    ${VOICE_SELECTED_STYLE}
  }

  ${({ selected }) => selected && VOICE_SELECTED_STYLE}
`

export const VoiceSelector = ({
  chosenVoice,
  chooseVoice,
}) => {
  return (
    <SelectorContainer aria-label="VoiceSelector">
      <VoiceButton
        aria-label="Choose Suzanne"
        background={suzanne}
        selected={chosenVoice === 'suzanne'}
        onClick={() => chooseVoice('suzanne')}
      />
      <VoiceButton
        aria-label="Choose Monique"
        background={monique}
        selected={chosenVoice === 'monique'}
        onClick={() => chooseVoice('monique')}
      />
      <VoiceButton
        aria-label="Choose Rohan"
        background={rohan}
        selected={chosenVoice === 'rohan'}
        onClick={() => chooseVoice('rohan')}
      />
    </SelectorContainer>
  )
}
