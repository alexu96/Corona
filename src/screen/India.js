import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native'
import Searchbar from '../components/Searchbar'
import IndiaHeader from '../components/IndiaHeader';


const India = () => {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [fetched, setFetched] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [stateSearchedByUser, setState] = useState()
  const [isStateFound, setIsStateFound] = useState(true)
  const [distDataAr, setDistDataAr] = useState([])


  function searchState(state) {
    //console.log(data)
    //console.log('here in search', state)
    const states = Object.keys(data)
    const searchedState = states.filter(item =>
      item.trim().toLowerCase().match(state.trim().toLowerCase())
    )
    if (searchedState.length === 0) {
      setIsStateFound(false)
    } else {
      setIsStateFound(true)
      setState(data[searchedState[0]])
      const distDataAr = Object.keys(data[searchedState[0]].districtData).map(key => ({
        ...data[searchedState[0]].districtData[key],
        name: key,
      }))
      setDistDataAr(distDataAr)
      //console.log(data[searchedState[0]])
      //console.log(distDataAr)
    }
  }

  //Making API
  useEffect(() => {
    fetch('https://api.covid19india.org/state_district_wise.json')
      .then(res => res.json())
      .then(res => {
        setData(res)
        setIsLoading(false)
        setHasError(false)
        setFetched(true)
      })
      .catch(e => {
        console.log(e)
        setHasError(true)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <View>
      <Searchbar searchState={searchState} />
      <FlatList
        data={distDataAr}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<IndiaHeader />}


        renderItem={({ item }) => {
          return (
            <View style={styles.textView}>

              <View style={styles.state}>
                <Text style={styles.text}>{item.name}</Text>

              </View>
              <View style={styles.data}>

                <View>
                  <Text style={styles.newCNF}>{item.delta.confirmed}↑</Text>
                  <Text>{item.confirmed}</Text>

                </View>

                <View>
                  <Text></Text>
                  <Text>{item.active}</Text>

                </View>

                <View>
                  <Text style={styles.newRCV}>{item.delta.recovered}↑</Text>
                  <Text>{item.recovered}</Text>

                </View>
                <View>
                  <Text style={styles.newDTH}>{item.delta.recovered}↑</Text>
                  <Text >{item.deceased}</Text>

                </View>



              </View>



            </View>
          );

        }}

      />

    </View>
  )
}

const styles = StyleSheet.create({
  textView: {

    width: '96%',
    padding: 23,
    // alignItems: ,
    justifyContent: 'space-between',
    margin: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.49

  },
  data: {

    width: '75%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,




  },
  state: {
    width: '25%',
    backgroundColor: 'white',
    justifyContent: 'center'

  },
  text: {

    fontSize: 13.3,
    fontWeight: 'bold',

  },
  newCNF: {
    color: 'red'
  },
  newRCV: {
    color: 'green'
  },
  newDTH: {
    color: '#ff9933'
  }

})

export default India

