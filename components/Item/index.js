import React from 'react'
import {Text, ListItem, Left, Body, Right} from 'native-base'

const Item = ({item}) => {
  if (item.header) {
    return (
      <ListItem itemDivider>
        <Left />
        <Body style={{marginRight: 40}}>
          <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
        </Body>
        <Right />
      </ListItem>
    )
  } else if (!item.header) {
    return (
      <ListItem style={{marginLeft: 0}}>
        <Body>
          <Text>{item.name}</Text>
        </Body>
      </ListItem>
    )
  }
}

export default Item
