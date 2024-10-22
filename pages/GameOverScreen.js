import { Dimensions, Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import Title from '../components/UI/Title'
import Button from '../components/UI/Button'

function GameOverScreen({ onGameOver }) {
  const { width, height } = useWindowDimensions()

  let imageWidth = 300;

  if(width <= 360){
    imageWidth = 200
  }

  if(width > 424){
    imageWidth = 180
  }
  
  const imageStyle = {
    width: imageWidth,
    height: imageWidth,
    borderRadius: imageWidth / 2,
  }
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image style={styles.image} source={require('../assets/gameover.jpg')}/>
        </View>
        <Button onPress={onGameOver}>
          Play again
        </Button>
    </View>
    </ScrollView>
  )
}

export default GameOverScreen

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
      padding: 44,
      marginTop: 84,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 34
    },
    imageContainer: {
      
      overflow: 'hidden',
      margin: 24,
      borderWidth: 4,
      borderColor: 'blue'
    },
    image: {
      width: '100%',
      height: '100%',
    }
})