import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ListHeader from '../components/ListHeader';

const home = (props) => {

    const [data, setData] = useState(null);



    useEffect(() => {
        const res = async () => {
            const response = await fetch('https://api.covid19india.org/data.json')
            const jsonResponse = await response.json();
           // console.log(jsonResponse.statewise);
            setData(jsonResponse.statewise);
        };
        res();
    }, []);


    if (data === null) return <View></View>


    return (


        <View>
            <FlatList
                data={data}
                ListHeaderComponent={<ListHeader />}
                renderItem={({ item }) => {
                    return (

                        <TouchableOpacity>
                        <View style={styles.textView} >



                            <View style={styles.state}>
                                <View>
                                    <Text style={styles.text}>{item.state}</Text>
                                    <Text style={styles.time}>{item.lastupdatedtime}</Text>

                                </View>

                            </View>

                            <View style={styles.data}>
                                <View>
                                    <Text style={styles.newCNF}>{item.deltaconfirmed}↑</Text>

                                    <Text >{item.confirmed}</Text>

                                </View>
                                <View>
                                    <Text></Text>
                                    <Text>{item.active}</Text>

                                </View>
                                <View>
                                    <Text style={styles.newRCV}>{item.deltarecovered}↑</Text>

                                    <Text>{item.recovered}</Text>

                                </View>

                                <View>
                                    <Text style={styles.newDTH}>{item.deltadeaths}↑</Text>

                                    <Text>{item.deaths}</Text>

                                </View>


                            </View>




                        </View>
                        </TouchableOpacity>

                    );
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );


};

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


    textConfirmDelta: {
        color: 'red',
        marginVertical: 0
    },
    newCNF: {
        color: 'red'
    },
    newRCV: {
        color: 'green'
    },
    newDTH: {
        color: '#ff9933'
    },
    time: {
        fontSize: 13
    }



});

export default home;