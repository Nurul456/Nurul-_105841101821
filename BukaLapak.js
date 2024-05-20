import { StyleSheet, Text, View, Image, Button } from 'react-native';
const TextCostum = () => {
    return (
        <View style={{
            flex:1,
            backgroundColor: 'white',
            justifyContent: 'flex-start', //kolom
            alignItems:'center', //baris
        }}>
            <Text style={{
                fontSize: 40,
                fontWeight: 'bold',
                marginTop: 30,
                marginBottom:50,
            }}>BUKA LAPAK</Text>
        </View>
    )
}
export default TextCostum;