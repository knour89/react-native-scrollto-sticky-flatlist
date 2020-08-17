import React from 'react'
import {FlatList} from 'react-native'
import {AppLoading} from 'expo'
import {Container} from 'native-base'
import * as Font from 'expo-font'
import {Ionicons} from '@expo/vector-icons'
import StickyHeader from './components/StickyHeader'
import Item from './components/Item'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: false,
      data: [
        {name: 'Movies', header: true},
        {name: 'Interstellar', header: false},
        {name: 'Dark Knight', header: false},
        {name: 'Pop', header: false},
        {name: 'Pulp Fiction', header: false},
        {name: 'Burning Train', header: false},
        {name: 'Music', header: true},
        {name: 'Adams', header: false},
        {name: 'Nirvana', header: false},
        {name: 'Amrit Maan', header: false},
        {name: 'Oye Hoye', header: false},
        {name: 'Eminem', header: false},
        {name: 'Places', header: true},
        {name: 'Jordan', header: false},
        {name: 'Punjab', header: false},
        {name: 'Ludhiana', header: false},
        {name: 'Jamshedpur', header: false},
        {name: 'India', header: false},
        {name: 'People', header: true},
        {name: 'Jazzy', header: false},
        {name: 'Appie', header: false},
        {name: 'Baby', header: false},
        {name: 'Sunil', header: false},
        {name: 'Arrow', header: false},
        {name: 'Things', header: true},
        {name: 'table', header: false},
        {name: 'chair', header: false},
        {name: 'fan', header: false},
        {name: 'cup', header: false},
        {name: 'cube', header: false},
      ],
      stickyHeaderIndices: [],
      activeIndex: 0,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    this.setState({isReady: true})

    const arr = []
    this.state.data.map(obj => {
      if (obj.header) {
        arr.push(this.state.data.indexOf(obj))
      }
    })
    arr.push(0)
    this.setState({
      stickyHeaderIndices: arr,
    })
  }

  getItemLayout = (_, index) => ({length: 50, offset: 50 * index, index})

  scrollToItem = idx => {
    this.setState(prevState => ({
      ...prevState,
      activeIndex: idx,
    }))
    this.flatListRef.scrollToIndex({animated: true, index: '' + idx})
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }

    return (
      <Container>
        <StickyHeader
          data={this.state.data}
          scrollToItem={this.scrollToItem}
          activeIndex={this.state.activeIndex}
        />
        <FlatList
          ref={ref => {
            this.flatListRef = ref
          }}
          data={this.state.data}
          getItemLayout={this.getItemLayout}
          keyExtractor={item => item.name}
          renderItem={({item}) => <Item item={item} />}
          stickyHeaderIndices={this.state.stickyHeaderIndices}
        />
      </Container>
    )
  }
}
