import { StyleSheet, View, Dimensions } from "react-native"

function Card({ children }) {
  return (
    <View style={styles.card}>{children}</View>
  )
}

export default Card

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#3eb0d4',
        padding: 16,
        width: '100%',
        minHeight: 100,
        borderRadius: 8
    },
})