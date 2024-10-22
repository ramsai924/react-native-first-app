import { Alert, Pressable, StyleSheet, Text, View, Dimensions } from "react-native"

function Button({ children, onPress, disabled, isCustomComponent }) {
  return ( 
    <View style={styles.buttonContainer}>
      <Pressable 
        disabled={disabled} 
        style={({pressed}) => pressed || disabled ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} 
        onPress={onPress} 
        android_ripple={{ color: 'white' }}
      >
        {
          isCustomComponent ? children : <Text style={styles.buttonText}>{children}</Text>
        }
      </Pressable>
    </View>
  )
}

export default Button;

const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: '#0d67a6',
      borderRadius: 34,
      overflow: 'hidden'
    },
    buttonInnerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: deviceWidth <=360 ? 8 : 16,
      paddingHorizontal: deviceWidth <=360 ? 18 : 34,
      elevation: 5
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
      opacity: 0.5
    }
})