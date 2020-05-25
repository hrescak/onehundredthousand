import * as React from 'react'

import { City } from '../interfaces'
import {shadeForPopulation} from '../utils/color'
import styled from 'styled-components'
import { useState } from 'react'

type Props = {
  data: City
}
const Title = styled.span<{color:string}>`
  font-size: 5rem;
  font-weight: bold;
  color: ${p=>p.color};
  cursor: pointer;
  @media (max-width: ${p=>p.theme.breakpoints.xl}) {
    font-size: 4rem;
  }
  @media (max-width: ${p=>p.theme.breakpoints.l}) {
    font-size: 3rem;
  }
  @media (max-width: ${p=>p.theme.breakpoints.m}) {
    font-size: 2rem;
  }
  @media (max-width: ${p=>p.theme.breakpoints.s}) {
    font-size: 1.5rem;
  }
`
const Accent = styled.span`
  color: ${p=>p.theme.colors.accent};
`

const ListItem: React.FunctionComponent<Props> = ({ data }) => {
  const [showPopulation,setShowPopulation] = useState(false)
  return(
  <Title color={shadeForPopulation(data.population)} onClick={e=>setShowPopulation(!showPopulation)}>
    {!showPopulation &&
      <span>{data.name}</span>
    }
    {showPopulation &&
      <Accent>{data.population.toLocaleString('en-US')}</Accent>
    }
    {' '}
  </Title>
)}

export default ListItem
