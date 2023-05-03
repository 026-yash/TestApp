import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';

const LorentzFactor = () => {
  const [speed, setSpeed] = useState(0);
  const [lf, setlf] = useState(0);
  const calc = (speed) => {
    
    const lfact = (1 / Math.sqrt(1 - Math.pow(parseInt(speed),2) / (Math.pow(3 * Math.pow(10,9)))));
    
    setlf(parseInt(lfact));
    
    
  }
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerText}>Lorerntz factor</Text>
      </View>
      
      <View style = {{ flex:1,alignItems: 'center',justifyContent:'center'}}>
        {/* image */}
        <Image 
          style = {{
            
            justifyContent: 'center',
            width: "80%",
            height: "80%"
          }}
          source = {require('../lfactor.png')}

        />
      </View>

      <View style = {{flex:1,padding: 10,backgroundColor: 'white',}}>
        <View style = {{flexDirection:'row',justifyContent:'center'}}>
          <View style = {{justifyContent:'center'}}>
            <Text style = {{color: 'black', fontSize: 20}}>Enter speed:</Text>
          </View>
          
          
          <TextInput
            style = {{color: 'black',borderWidth: 1}}
            placeholder = "eg 20"
            onChangeText = {newSpeed => setSpeed(speed)}
            onSubmitEditing = {speed => calc(speed)}
            blurOnSubmit = {true}
          />
          
          
        </View>
        
        <View style = {{flex:2, marginTop: 20,flexDirection:'row',justifyContent:'center'}}>
          <Text style = {{color: 'black',  fontSize: 20}}>Lorentz factor = </Text>  
          <Text style = {{color: 'black'}}>{parseInt(lf)}</Text>
        </View>
      </View>
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  header:{
    margin: 5,
    padding: 5,
    
    backgroundColor:'pink',
    
  },
  headerText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
})

export default LorentzFactor;