import { StyleSheet, View, StatusBar } from 'react-native';

export default function MainContainer() {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#3629B7"
            />
            <View style={styles.subContainer}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3629B7',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    subContainer: {
        minHeight: '85%',
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    }
});