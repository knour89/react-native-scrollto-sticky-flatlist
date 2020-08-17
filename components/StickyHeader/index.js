import React from 'react'
import {FlatList, StyleSheet, SafeAreaView} from 'react-native'
import {Text, Body, View, Button} from 'native-base'

const StickyHeader = ({scrollToItem, activeIndex, data}) => {
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={data}
          horizontal
          keyExtractor={item => item.name}
          renderItem={({item, index}) => {
            if (!item.header) return null
            return (
              <View
                style={{
                  borderBottomWidth: activeIndex === index ? 2 : 0,
                }}>
                <Body>
                  <Button transparent onPress={() => scrollToItem(index)}>
                    <Text style={styles.headerButton}>{item.name}</Text>
                  </Button>
                </Body>
              </View>
            )
          }}
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalFlatlist}
        />
      </View>
    </SafeAreaView>
  )
}

export default StickyHeader

const styles = StyleSheet.create({
  horizontalFlatlist: {
    height: 50,
    backgroundColor: '#fdd500',
  },
  headerButton: {
    fontWeight: 'bold',
    color: '#581f82',
  },
})
