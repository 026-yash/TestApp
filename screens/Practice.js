import React from 'react';
import {Text, View, StyleSheet,TextInput,TouchableOpacity} from 'react-native';

const Practice = () =>{
    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {{color: 'black', fontSize: 20,fontWeight:'bold'}}>Practice Section</Text>
            </View>
            <View style = {{flex:1,justifyContent:'center'}}>
                <View style = {{flexDirection: 'row',justifyContent:'center'}}>
                    <View style = {{justifyContent:'center'}}>
                        <Text style = {{color:'black', margin: 5, fontWeight:'bold',fontSize:20}}>Enter Speed:</Text>
                    </View>
                    
                    <TextInput
                        style = {{color: 'black', borderWidth: 1}}
                        placeholder = "eg.20"
                    />
                </View>
            </View>
            <View style = {{flex:1, justifyContent:'center'}}>
                <View style = {{flexDirection: 'row',justifyContent:'center'}}>
                    <View style = {{justifyContent:'center'}}>
                        <Text style = {{color:'black',margin:5, fontWeight:'bold',fontSize:20}}>Enter lorentz factor:</Text>
                    </View>
                    
                    <TextInput
                        style = {{color: 'black', borderWidth: 1}}
                        placeholder = "eg.50"
                    />
                </View>
            </View>
            <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity >
                    <Text style = {{color: 'white',fontSize:20,fontWeight:'bold',backgroundColor:'black',padding:10}}>Submit</Text>
                </TouchableOpacity>
            </View>
            <View style = {{flex:4,backgroundColor:'green'}}>

            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: 'white'
    },
    header:{
        backgroundColor: 'pink',
        margin:5,
        padding: 5,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default Practice;