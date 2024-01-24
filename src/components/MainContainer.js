import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { Typography } from '../components';

export default function MainContainer({children}) {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#3629B7"
            />
            <View style={styles.title}>
                <Typography color={'#fff'} size={18} type={600}>Log in</Typography>
            </View>
            <View style={styles.subContainer}>
                {children}
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
        maxHeight: '85%',
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
    },
    title: {
        marginBottom: 38,
    }
});