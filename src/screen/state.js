import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import Flag from 'react-native-flags-kit';


const state = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        const res = async () => {
            const response = await fetch('https://api.covid19api.com/summary')
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setData(jsonResponse.Countries);
        };
        res();
    }, []);


    return (
        <View>

            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}


                renderItem={({ item }) => {


                    return (
                        <View>

                            <List.Section>
                                <List.Accordion
                                    title={item.Country}
                                    left={props => <Flag code={item.CountryCode} />
                                    }
                                >
                                    <View style={styles.container}>
                                        <View style={styles.old}>
                                            <Text style={styles.CNFold}>Confirmed: {item.TotalConfirmed}</Text>
                                            <Text style={styles.RCold}>Recovered: {item.TotalRecovered}</Text>
                                            <Text style={styles.DTHold}>Death: {item.TotalDeaths}</Text>
                                        </View>
                                        <View style={styles.old}>
                                            <Text style={styles.CNFold}>New Confirmed: {item.NewConfirmed}</Text>
                                            <Text style={styles.RCold}>New Recovered: {item.NewRecovered}</Text>

                                            <Text style={styles.DTHold}>New Death: {item.NewDeaths}</Text>
                                        </View>




                                    </View>
                                </List.Accordion>


                            </List.Section>





                        </View>
                    );
                }}

            />

        </View>);


};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        //alignItems: 'center',
        backgroundColor: '#F5FCFF',
        fontSize: 30,
        flexDirection: 'row'
    },

    old: {
        width: '50%'
    },
    new: {
        width: '50%',
        
    },
    CNFold : {
        color: 'red',
        fontSize: 17
    },
    RCold : {
        color: 'green',
        fontSize: 17
    },
    DTHold : {
        color: '#ff9933',
        fontSize: 17
    }

});

export default state;

