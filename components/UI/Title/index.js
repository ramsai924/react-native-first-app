import { StyleSheet, Text, View,Dimensions } from "react-native"

function Title({ children }) {
  return (
    <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{children}</Text>
    </View>
  )
}

export default Title;

const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
        padding: deviceWidth <= 360 ? 8 : 16,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 8
    },
    titleText: {
        fontSize: deviceWidth <= 360 ? 14 : 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    }
})