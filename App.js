import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <View style={{flex:1,}}>
      <View style={{flex:1,flexDirection:'row'}}>
      <View style={{flex:1,backgroundColor:'red'}}></View>
      </View>
      
    <View style={{flex:1,backgroundColor:'blue',}}></View>
    </View>
  
    
  );
}