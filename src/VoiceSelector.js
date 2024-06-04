import styled from 'styled-components'

const SelectorContainer = styled.div`
  display: flex;
  padding: 1rem;
  border: 1px grey solid;
  border-radius: 8px;
  margin-right: 2rem;
`

const VoiceButton = styled.button`
  border-radius: 99;
  height: 1rem;
  margin-right: 1rem;
`

export const VoiceSelector = ({ chooseVoice }) => {
  return (
    <SelectorContainer aria-label="VoiceSelector">
      <VoiceButton
        aria-label="Choose Suzanne"
        onClick={() => chooseVoice('suzanne')}
      >
        Suzzane
      </VoiceButton>
      <VoiceButton onClick={() => chooseVoice('monique')}>
        Monique
      </VoiceButton>
      <VoiceButton onClick={() => chooseVoice('rohan')}>
        Rohan
      </VoiceButton>
    </SelectorContainer>
  )
}
