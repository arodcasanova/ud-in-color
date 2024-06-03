import styled from 'styled-components'

export const MAX_SITE_WIDTH = '40rem'
export const VERTICAL_SECTION_PADDING = '3rem'
export const HORIZONTAL_SECTION_PADDING = '2rem'

export const BoundedCenteringContainer = styled.div`
  > * {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > * > * {
    width: 100%;
    max-width: ${MAX_SITE_WIDTH};
    padding: ${VERTICAL_SECTION_PADDING} ${HORIZONTAL_SECTION_PADDING};
  }
`
