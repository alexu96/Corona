import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const ListHeader = (props) => {
    return (

        <View style={styles.textView1} >

            <View style={styles.state1}>
                <Text style={styles.stateText}>States</Text>
                <Icon name='bar-chart' color='black' size={40} />


            </View>

            <View style={styles.data1}>
                <View style={styles.a1} >
                    <Text style={styles.Confirmed}>CONFIRMED</Text>
                    <Icon name='bed' color='#ff0000' size={40} />

                </View>

                <View  style={styles.a2}>
                    <Text style={styles.Active}>ACTIVE</Text>
                    <Icon name='ge' color='#666699' size={40} />

                </View>
                <View  style={styles.a3}>
                    <Text style={styles.Recovered}>RECOVERED</Text>
                    <Icon name='bed' color='#339933' size={40} />

                </View>
                <View  style={styles.a4}>
                    <Text style={styles.Death}>DEATH</Text>
                    <Icon name='exclamation-circle' color='#ff9933' size={40} />

                </View>

            </View>

        </View>

            


      
       
    );
};

const styles = StyleSheet.create({

    textView1: {
        width: '96%',
        padding: 33,
        // alignItems: ,
        justifyContent: 'space-between',
        margin: 7,
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

    a1: {

        alignItems: 'center'

    },

    a2: {

        alignItems: 'center'

    },
    a3: {

        alignItems: 'center'

    },
    a4: {

        alignItems: 'center'

    },
    Confirmed: {

        alignSelf: 'center',
        fontSize: 14,
        fontWeight: 'bold',

    },
    

    Active: {
        color: '#666699',
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        marginHorizontal: 2


    },
    Recovered: {
        color: '#339933',
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        marginHorizontal: 3


    },
    Death: {
        color:'#ff9933',
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        marginHorizontal: 4


    },
    data1: {

        width: '85%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginHorizontal: 20,




    },
    state1: {
        width: '15%',
  
    },
    stateText: {
        fontSize: 15,
        fontWeight: 'bold'
    }



});

export default ListHeader;

/* 
 <View style={styles.textView1} >

            <View style={styles.state1}>
                <Text>States</Text>
            </View>

            <View style={styles.data1}>
                <View style={styles.a1}>
                    <Text style={styles.Confirmed}>CONFIRMED</Text>
                </View>

                <View  style={styles.a2}>
                    <Text style={styles.Active}>ACTIVE</Text>
                </View>
                <View  style={styles.a3}>
                    <Text style={styles.Recovered}>RECOVERED</Text>

                </View>
                <View  style={styles.a4}>
                    <Text style={styles.Death}>DEATH</Text>
                </View>

            </View>

        </View>
*/