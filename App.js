import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ImageBackground,  } from 'react-native';
import GameStartScreen from './pages/GameStartScreen';
import GameScreen from './pages/GameScreen';
import GameOverScreen from './pages/GameOverScreen';
import { useEffect, useMemo, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [userEnteredNumber, setUserEnteredNumber] = useState(null);
  const [gameCompleted, setCompleted] = useState(false)

  // const [fontsLoaded, error] = useFonts({
  //   'open-sans': require('./fonts/OpenSans.ttf'),
  //   'nunito': require('./fonts/Nunito.ttf')
  // })

  const onSelectNumber = (number) => {
    setUserEnteredNumber(number)
  }

  const onGameOver = () => {
    setCompleted(!gameCompleted)
  }

  // useEffect(() => {
  //   if(!fontsLoaded){
  //     SplashScreen.hideAsync()
  //   }
  // }, [fontsLoaded])

  const currentScreen = useMemo(() => {
    switch(true){
      case gameCompleted: 
        return <GameOverScreen onGameOver={onGameOver}/>
      case userEnteredNumber === null:
        return <GameStartScreen onSelectNumber={onSelectNumber}/>;
      case userEnteredNumber !== null: 
        return <GameScreen onSelectNumber={onSelectNumber} userEnteredNumber={userEnteredNumber} onGameOver={onGameOver}/>
      default: 
        return <Text>404 Page not found</Text>
    }
  }, [userEnteredNumber, gameCompleted])

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient style={styles.rootScreen} colors={['#4e56ee', '#29b4ed', '#6ed6cc']}>
        <ImageBackground source={require('./assets/background2.jpg')} resizeMode='cover' style={styles.rootScreen} imageStyle={{ opacity: .5 }}>
          <SafeAreaView>
              {currentScreen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    height: '100%'
  },
});
