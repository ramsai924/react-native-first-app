import { Alert, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import Button from '../components/UI/Button'
import Title from '../components/UI/Title'
import Card from '../components/Card'
import { AntDesign } from '@expo/vector-icons'
import { useEffect, useMemo, useState } from 'react'

function generateRandomNumber(min, max, excludeNumber){
  const newNumber = Math.floor(Math.random() * (max - min)) + min;
  if(newNumber === excludeNumber){
    return generateRandomNumber(min, max, excludeNumber)
  }else{
    return newNumber
  }
}


function GameScreen({ onSelectNumber, userEnteredNumber, onGameOver }) {
  const initialNumber = generateRandomNumber(1, 99, userEnteredNumber)
  const [choosenNumber, setChoosenNumber] = useState(initialNumber)
  const [choosenNumbers, setChoosenNumbers] = useState([1,3,4,5,6,7,8,9,0,11,23,44,55,66,77,88])

  function nextGuess(action){
    
let minNumber = 1;
let maxNumber = 99
    if((action === 'lower' && choosenNumber < userEnteredNumber) || (action === 'greater' && choosenNumber > userEnteredNumber)){
      Alert.alert('Sorry!', 'This is wrong', [{ text: 'Ok', style: 'default' }])
      return;
    }

    if(action === 'lower'){
        maxNumber = choosenNumber
    }else{
       minNumber = choosenNumber + 1
    }
    const guessNum = generateRandomNumber(minNumber, maxNumber, choosenNumber)
    setChoosenNumbers((prev) => [...prev, guessNum])
    setChoosenNumber(guessNum)
  } 

  useEffect(() => {
    if(choosenNumber === userEnteredNumber){
      onGameOver()
    }
  }, [choosenNumber, userEnteredNumber])

  return (
    // <ScrollView>
    <View style={styles.container}>
        <Title>Choosen Number - {userEnteredNumber}</Title>
        <Card>
          <View style={styles.numberViewContainer}>
            <Text style={styles.enteredNumberText}>{initialNumber}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button isCustomComponent  onPress={nextGuess.bind(this, 'lower')}>
                <AntDesign size={22} color={'white'} name='minuscircleo' />
              </Button>
            </View>
             <View style={styles.button}>
              <Button isCustomComponent  onPress={nextGuess.bind(this, 'greater')}>
                <AntDesign size={22} color={'white'} name='pluscircleo' />
              </Button>
            </View>
          </View>
        </Card>
        <View>
          <Button onPress={() => onSelectNumber(null)}>Go back</Button>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
          data={choosenNumbers}
          renderItem={(item) => (
            <View style={styles.guessItemContainer}>
              <Text>{item.item}</Text>
            </View>
          )}
        />
        </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 34,
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 24,
    height: '100%'
  },
  numberViewContainer: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  enteredNumberText: {
    fontSize: 54,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10
  },
  button: {
    flex: 1
  },
  guessItemContainer: {
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'white',
    padding: 12,
    marginVertical: 8
  }
})