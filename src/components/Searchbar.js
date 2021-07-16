import React, { useState, useEffect } from 'react'
import { View, Text, Platform, StyleSheet, TextInput } from 'react-native'
import { SearchBar } from 'react-native-elements'
// import { cos } from 'react-native-reanimated'

const Searchbar = props => {
  const [input, setInput] = useState('')

  const handleInput = input => setInput(input)

  return (
    <SearchBar
      placeholder='Search the State name'
      platform='android'
      containerStyle={{
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 10,
      }}
      value={input}
      onChangeText={v => handleInput(v)}
      onEndEditing={() => props.searchState(input)}
    />
  )
}

export default Searchbar