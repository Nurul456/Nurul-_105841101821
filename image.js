import {View, Image  } from 'react-native'

const ImageT = () => {
    return (
        <View style={{
           alignItems:'center',
           justifyContent:'center',
        }}>
        <Image source={require('./assets/images.jpg')}Style={{while: 100, height:100}}></Image>
        </View>
    )

}

export default ImageT