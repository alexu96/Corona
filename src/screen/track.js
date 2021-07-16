import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Dimensions } from 'react-native';


const track = () => {

    const screenWidth = Dimensions.get('window').width

    const Symptom = ({symptom, icon, selected}) => {
        return (

            <View
            style={{backgroundColor: selected?colors.themeColor : colors.white,
             margin: 8, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 24, width: (screenWidth -64)/2}}
            >
                <Text style={{
                    fontSize:20,
                    fontWeight: '700',
                    color: selected? colors.white: colors.greyish
                }}>{symptom}</Text>
                <MaterialCommunityIcons name={icon} size={45} style={{
                    alignSelf: 'flex-end',
                    color: selected? colors.white: colors.themeColor
                }}/>

            </View>
        );
    }

    const colors = {
        themeColor: '#ffc66a',
        white: '#fff',
        background: '#f4f6fc',
        greyish: 'grey'
    }
    const symptoms = [{
        symptom: 'Cold',
        icon:'snowflake',
        selected: true
    },
    {
        symptom: 'Dry Cough',
        icon:'flash',
        selected: false
    },{
        symptom: 'Fever',
        icon:'thermometer',
        selected: false
    },{
        symptom: 'Breathing Difficulty',
        icon:'air-filter',
        selected: false
    },
]


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.background,
                paddingHorizontal: 8
            }}

        >
            <StatusBar backgroundColor={colors.background} barStyle='dark-content' />
            <View style={{
                padding: 16,
                flexDirection: 'row',
                justifyContent: 'space-between'

            }}>

                <View>
                    <Text style={{ fontSize: 18,fontWeight: 'bold' }}>COVID-19</Text>
                    <Text style={{ fontSize: 20 }}>Symptoms</Text>

                </View>


                <MaterialCommunityIcons name='thermometer' size={45} style={{ color: colors.white, backgroundColor: colors.themeColor}} />

            </View>
            <View style={{ borderTopWidth: 6, borderTopColor: colors.themeColor, borderRadius: 3, marginHorizontal: 16, width: 40 , marginTop: -5  }} />
            <View style={{ paddingHorizontal: 8, paddingVertical: 30 }}>
                <FlatList
                
                data={symptoms}
                numColumns={2}
                keyExtractor={item => item.symptom}
                renderItem={({item}) => <Symptom symptom={item.symptom} icon={item.icon} selected={item.selected}/>}
                
                 />
            </View>

        </View>
    );

};


export default track;