import React,{useState} from 'react';
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';

const Home = () => {
    const [count, setCount] = useState(0);
    onPress = () => {
        setCount(prevCount => prevCount + 1)
    }
    return(
     <View style = {styles.container}>
        <View>
          <Text style = {{color: 'black'}}>Count : {count}</Text>
        </View>
        
          <TouchableOpacity onPress = {onPress}>
            <View style = {{margin:10, backgroundColor:'pink', padding: 10}}>
              <Text style = {{color:'black', fontSize:20, fontWeight:'bold'}}>Lorentz Factor</Text>
            </View>
          </TouchableOpacity>
        
        
        
          <TouchableOpacity>
            <View style = {{margin:10, backgroundColor:'pink', padding: 10}}>
              <Text style = {{color:'black', fontSize:20, fontWeight:'bold'}}>Spi Factor</Text>
            </View>
          </TouchableOpacity>
        
        
        
          <TouchableOpacity>
            <View style = {{margin:10, backgroundColor:'pink', padding: 10}}>
              <Text style = {{color:'black', fontSize:20, fontWeight:'bold'}}>Practice</Text>
            </View>
          </TouchableOpacity>
        
        
      </View> 
    );
};
const styles = StyleSheet.create({
    container: {
      flex:1, 
      backgroundColor: 'white',
      justifyContent:'center',
      alignItems: 'center'
    }
  });
export default Home;