import { Text } from 'react-native'
import {
    useFonts,
    Poppins_600SemiBold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black
} from '@expo-google-fonts/poppins';

export default function Typography({children, size, color, type}) {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        Poppins_900Black
    })

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    const fonts = {
        400: 'Poppins_400Regular',
        500: 'Poppins_500Medium',
        600: 'Poppins_600SemiBold',
        700: 'Poppins_700Bold',
        800: 'Poppins_800ExtraBold',
        900: 'Poppins_900Blac'
    }

    return (
        <Text style={{fontSize: size, color: color, fontFamily: fonts[type]}}>{children}</Text>
    )
}