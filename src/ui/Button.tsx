import styled from '@emotion/styled'
import { css } from '@emotion/react'

export interface ButtonProps {
  size?: 's' | 'm' | 'l'
  fixSize?: 's' | 'm' | 'l'
}

const sizeS = () =>
  css`
    height: 36px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;
  `

const sizeM = () =>
  css`
    height: 48px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 18px;
  `

const sizeL = () =>
  css`
    height: 60px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 20px;
  `
const sizeMap = {
  s: sizeS,
  m: sizeM,
  l: sizeL,
}
const fixSizeMap = {
  s: '180px',
  m: '210px',
  l: '250px',
}

export const Button = styled.button<ButtonProps>`
  border-radius: 6px;
  background-color: #3a3a3a;
  color: #fff;
  width: 100%;
  max-width: ${props => props.fixSize && fixSizeMap[props.fixSize]};

  &:hover,
  &:focus {
    border-color: #303030;
  }

  ${props => {
    return props.size && [sizeMap[props.size]] 
  }
}

  &.size-s {
    height: 36px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;
  }

  &.size-m {
    height: 48px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 18px;
  }

  &.size-l {
    height: 60px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 20px;
  }
`