import * as React from 'react'
import ListItem from './ListItem'
import { City } from '../interfaces'
import styled from 'styled-components'

type Props = {
  items: City[]
}

const ListWrapper = styled.div`
  line-height: 1.2;
`

const List: React.FunctionComponent<Props> = ({ items }) => (
  <ListWrapper>
    {items.map((item) => (
      <span key={item.name}>
        <ListItem data={item} />
      </span>
    ))}
  </ListWrapper>
)

export default List
