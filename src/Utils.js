import styled from 'styled-components'

export const MAX_SITE_WIDTH = '70rem'
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
    padding: ${VERTICAL_SECTION_PADDING}
      ${HORIZONTAL_SECTION_PADDING};
  }
`

export const COLOR = {
  primary100: '#EFF8FF',
  primary200: '#A9D4F5',
  primary300: '#62A2D8',
  primary400: '#3283C7',
  primary500: '#2268A2',
  primary600: '#1A4971',
  primary700: '#203D54',
  neutral100: '#F8F9FA',
  neutral200: '#E1E7EB',
  neutral300: '#CFD6DE',
  neutral400: '#B8C4CE',
  neutral500: '#8795A7',
  neutral600: '#5F6B7A',
  neutral700: '#222934',
  greenAccent100: '#E6FFFE',
  greenAccent200: '#A8EEEB',
  greenAccent300: '#6DD7D3',
  greenAccent400: '#3BAEA',
  greenAccent500: '#299187',
  greenAccent600: '#1A655E',
  greenAccent700: '#114544',
  yellowAccent100: '#FFFCF4',
  yellowAccent200: '#FDF3D7',
  yellowAccent300: '#FAE29F',
  yellowAccent400: '#F4C964',
  yellowAccent500: '#CAA53D',
  yellowAccent600: '#8C6D20',
  yellowAccent700: '#5C4813',
  redAccent100: '#FCE8E8',
  redAccent200: '#F5AAAA',
  redAccent300: '#E46464',
  redAccent400: '#DD2F30',
  redAccent500: '#B82020',
  redAccent600: '#891A1B',
  redAccent700: '#611818',
}

export const SHADOW = {
  medium:
    'rgba(0, 0, 0, 0.1) 0px 15px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
  high: 'rgba(0, 0, 0, 0.12) 0px 12px 50px -12px',
}
