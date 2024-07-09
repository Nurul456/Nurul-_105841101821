import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './Components/LoginPage';
import MyProfil from './Components/MyProfil';

// Import gambar
import Home from './assets/home.jpg';
import HomeActive from './assets/home merah.jpg'; 
import Shop from './assets/shop.jpg';
import ShopActive from './assets/shop merah.jpg';
import Bag from './assets/bag.jpg';
import BagActive from './assets/bag merah.jpg';
import Favorites from './assets/favorites.jpg';
import FavoritesActive from './assets/favorites merah.jpg';
import Profil from './assets/profil.jpg';
import ProfilActive from './assets/profil merah.jpg';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title='Go to Login'
        onPress={() => navigation.navigate('LoginPage')}
      />
    </View>
  );
}

function ShopScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Shop Screen</Text>
    </View>
  );
}

function BagScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bag Screen</Text>
    </View>
  );
}

function FavoriteScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Favorite Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

          switch (route.name) {
            case 'Home':
              iconSource = focused ? HomeActive : Home;
              break;
            case 'Shop':
              iconSource = focused ? ShopActive : Shop;
              break;
            case 'Bag':
              iconSource = focused ? BagActive : Bag;
              break;
            case 'Favorites':
              iconSource = focused ? FavoritesActive : Favorites;
              break;
            case 'Profil':
              iconSource = focused ? ProfilActive : Profil;
              break;
          }

          return <Image source={iconSource} style={{ width: size, height: size }} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Bag" component={BagScreen} />
      <Tab.Screen name="Favorites" component={FavoriteScreen} />
      <Tab.Screen name="Profil" component={MyProfil} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
