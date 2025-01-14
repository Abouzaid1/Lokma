import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import Animated, {
    useSharedValue,
    withTiming,
    withSpring,
    useAnimatedStyle,
    Easing
} from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { appwriteGetSession } from '@/appwrite/auth';
export default function index() {
    const theme = useColorScheme()
    const router = useRouter()
    useEffect(() => {
        const check = async () => {
            const signedIn = await appwriteGetSession()
            if (signedIn) {
                router.push('/(tabs)')
            }
        }
        check()
    }, [])
    const opacity = useSharedValue(1)
    const [count, setCount] = useState(0)
    const splashScreenData = [
        {
            image: require('../../assets/images/Splash1.jpeg'),
            title: "لقمة هو تطبيق بيجمع بين الناس اللي بيحبوا يطبخوا في بيوتهم واللي بيدوروا على أكل بيتي نظيف وطعمه مميز."
        },
        {
            image: require('../../assets/images/Splash2.jpeg'),
            title: "يتيح للطباخين عرض وجباتهم وتوصيلها بسهولة، وللزبائن طلب الأكل اللي بيحبوه بكل راحة."
        },
        {
            image: require('../../assets/images/Splash3.jpeg'),
            title: "هدفنا دعم الطباخين المحليين وتقديم تجربة فريدة تجمع بين جودة الأكل ودفء البيت."
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            opacity.value = withTiming(0, { duration: 0, easing: Easing.inOut(Easing.quad), });
            setCount((prevCount) => (prevCount === splashScreenData.length - 1 ? 0 : prevCount + 1));
        }, 4000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        opacity.value = withTiming(0, { duration: 0, easing: Easing.inOut(Easing.quad), });
        setTimeout(() => {
            opacity.value = withTiming(1, { duration: 500, easing: Easing.inOut(Easing.quad), });
        }, 100)
    }, [count]);

    const pressHandler = () => {
        router.navigate("/(auth)/signIn")
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 80, justifyContent: "space-between", backgroundColor: Colors[theme!].background }}>
            <Animated.View style={[
                { width: "100%", alignItems: 'center', opacity },
            ]}>
                <View style={{ width: "90%", height: 350, borderRadius: 20, overflow: "hidden" }}>
                    <Image source={splashScreenData[count].image} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </View>
                <Image source={require('../../assets/images/MainLogo.png')} style={{ marginTop: 20, width: 150, height: 100, objectFit: "contain" }} />
                <View style={{ width: "90%", alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: "300", textAlign: "center" }}>{splashScreenData[count].title}</Text>
                </View>
            </Animated.View>
            <TouchableOpacity onPress={pressHandler} style={{ width: "90%", height: 50, marginBottom: 100, backgroundColor: Colors[theme!].primary, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, color: "white" }}>أبدا</Text>
            </TouchableOpacity>
        </View>
    )
}