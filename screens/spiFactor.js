import React from 'react';
import {Text, View, StyleSheet,Image, TextInput} from 'react-native';

const SpiFactor = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {{color:'black',fontSize:20, fontWeight:'bold'}}>Spi factor</Text>
            </View>
            <View style = {{alignItems:'center',flex:1,justifyContent:'center'}}>
                <Image
                    style = {{ 
                           
                    }}
                    source = {require('../spiFactor.png')}
                />
            </View>
            <View style ={{ justifyContent:'space-evenly',flexDirection:'column'}}>
                <View style = {{flexDirection:'row',margin:5}}>
                    <View style = {{justifyContent:'center', alignItems:'center',flex:1}}>
                        <Text style = {{color:'black',fontWeight:'bold'}}>tH</Text>
                    </View>
                    
                    <TextInput
                        style = {{color:'black', borderWidth:1,flex:5}}
                        placeholder = "tH"
                    />
                </View>
                <View style = {{flexDirection:'row',margin:5}}>
                    <View style = {{justifyContent:'center',flex:1,alignItems:'center'}}>
                        <Text style = {{color:'black',fontWeight:'bold'}}>tm</Text>
                    </View>
                        
                    <TextInput
                        style = {{color:'black', borderWidth:1,flex:5}}
                        placeholder = "tm"
                    />
                </View>
                <View style = {{flexDirection:'row',margin:5}}>
                    <View style = {{justifyContent:'center', alignItems:'center',flex:1}}>
                        <Text style = {{color:'black',fontWeight:'bold'}}>ts</Text>
                    </View>

                     
                    <TextInput
                        style = {{color:'black', borderWidth:1,flex:5}}
                        placeholder = "ts"
                    />
                    
                </View>
                
            </View>
            <View style = {{alignItems:'center', flex:2,justifyContent:'flex-start', marginTop:10}}>
                <Text style = {{color:'black',fontSize:25, }}>result = </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    header:{
        backgroundColor:'pink',
        margin:5,
        alignItems:'center',
        padding: 5
    }
});

export default SpiFactor;