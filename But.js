import { StyleSheet, Text, View, Image, Button }  from 'react-native';

const ButtonCostum =   () => {
    return (
      <View style={{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',//kolom
        alignItems:'flex-end',//baris
        flexDirection:'row',
        marginBottom:100,
        }}>
      <View style={{
        backgroundColor:'red',
        width:150,
        height:80,
        borderRadius:10,
        marginRight:10,
        }}>
          <Text style={{
            color:'white',
            textAlign:'center',
            lineHeight:70,
            fontSize:20,
            fontWeight:'bold'
          }}>
            Login
          </Text>
    </View>
    <View style={{
      backgroundColor:'blue',
      width:150,
      height:80,
      borderRadius:10,
      marginLeft:10
    }}>
      <Text style={{
        color:'white',
        textAlign:'center',
        lineHeight:70,
        fontSize:20,
        fontWeight:'bold'
      }}>
        Register
      </Text>
    </View>
    </View>
    );
  }
  export default ButtonCostum