import { StyleSheet, TextInput, View } from "react-native"

export default function Input({placeholder}) {
    return (
        <TextInput style={styles.input} placeholder={placeholder}/>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#cbcbcb',
        height: 44,
        borderRadius: 15,
        padding: 12
    },
    password: {}
})