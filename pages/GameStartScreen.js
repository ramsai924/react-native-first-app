import { Alert, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import Card from '../components/Card'
import Button from '../components/UI/Button'
import { useState } from 'react'
import Title from '../components/UI/Title';

function GameStartScreen({ onSelectNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const resetEnteredValue = () => {
        setEnteredNumber('')
    }

    const onConfirm= () => {
        const choosenNumber = parseInt(enteredNumber)

        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99){
            Alert.alert('Invalid Number', 'Enter valid number', [{text: 'Re-enter', style: 'default', onPress: resetEnteredValue }])
            return;
        }

        onSelectNumber(choosenNumber)
    }

  return (
    <ScrollView>
        <KeyboardAvoidingView behavior='position'>
            <View style={styles.container}>
                <Title>Enter a guess number</Title>
                <Card>
                    <View style={styles.startScreenContainer}>
                        <View>
                            <Text style={styles.title}>Enter the number</Text>
                        </View>
                        <View>
                            <TextInput 
                            style={styles.textInputContainer} 
                            keyboardType='number-pad' 
                            maxLength={2} 
                            autoCapitalize='none' 
                            value={enteredNumber}
                            onChangeText={(text) => setEnteredNumber(text)}
                        />
                        </View>
                        <View style={styles.buttonsContainer}>
                            <View style={styles.button}>
                                <Button disabled={!enteredNumber} onPress={resetEnteredValue}>Reset</Button>
                            </View>
                            <View style={styles.button}>
                                <Button disabled={!enteredNumber} onPress={onConfirm}>Confirm</Button>
                            </View>
                        </View>
                    </View>
                </Card>
            </View>
        </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default GameStartScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 34,
        paddingVertical: 16,
        paddingHorizontal: 24,
        gap: 24
    },
    startScreenContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8
    },
    titleContainer: {
        paddingVertical: 16,
        color: 'red'
    },
    textInputContainer: {
        padding: 12,
        borderBottomWidth: 3,
        borderBottomColor: '#07538f',
        width: 80,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 8,
        marginTop: 8
    },
    button: {
        flex: 1
    }
})