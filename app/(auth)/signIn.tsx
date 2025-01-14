import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme.web'
import { useRouter } from 'expo-router'
import { account } from '@/appwrite/setup'
import { userSignIn } from '@/types/userTypes'
import { appwriteGetSession, appwriteSignIn } from '@/appwrite/auth'
export default function SignIn() {
    const theme = useColorScheme()
    const route = useRouter()
    useEffect(() => {
        const check = async () => {
            const signedIn = await appwriteGetSession()
            if (signedIn) {
                route.replace('/(tabs)')
            }
        }
        check()
    }, [])
    const handleClickToRegister = () => {
        route.navigate('/(auth)/register')
    }
    const [signInData, setSignInData] = useState<userSignIn>({
        email: "",
        password: ""
    })
    const handleInputChange = (e: any) => {
        setSignInData({
            ...signInData,
            [e._dispatchInstances.memoizedProps.nativeID]: e.nativeEvent.text
        })
        console.log(signInData);
    }
    const handleSignInBtn = async () => {
        if (signInData.email != "" && signInData.password != "") {
            appwriteSignIn(signInData.email, signInData.password).catch((err) => { Alert.alert("تنبيه", err.message) })
        }
        else {
            Alert.alert("تنبيه", "يرجى إدخال جميع البيانات")
        }
    }
    return (
        <View style={{ justifyContent: "center", paddingTop: 40, paddingHorizontal: 20, direction: "rtl" }}>
            <Image source={require("../../assets/images/MainLogo.png")} style={{ width: 150, height: 100, objectFit: "contain" }} />
            <Text style={{ fontSize: 25, fontWeight: '800', marginTop: 30 }}>تسجيل الدخول</Text>
            <View style={{ marginTop: 50 }}>
                <Text style={{ fontSize: 18, fontWeight: '300' }}>بريد المستخدم او رقم الهاتف</Text>
                <View style={{ width: "100%", backgroundColor: Colors[theme!].background, padding: 5, paddingHorizontal: 10, borderRadius: 10, marginVertical: 10 }}>
                    <TextInput nativeID='email' onChange={(e) => { handleInputChange(e) }} />
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: '300' }}>كلمه السر</Text>
                <View style={{ width: "100%", backgroundColor: Colors[theme!].background, padding: 5, paddingHorizontal: 10, borderRadius: 10, marginVertical: 10 }}>
                    <TextInput nativeID='password' onChange={(e) => { handleInputChange(e) }} />
                </View>
            </View>
            <TouchableOpacity onPress={handleSignInBtn} style={{ width: "100%", height: 50, marginTop: 40, backgroundColor: Colors[theme!].primary, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, color: "white" }}>تسجيل الحساب</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: '300', marginTop: 40 }}>هل انت مستخدم جديد <Text onPress={handleClickToRegister} style={{ color: Colors[theme!].primary }}>اضغط هنا</Text></Text>
        </View>
    )
}