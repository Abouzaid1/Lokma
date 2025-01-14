import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme.web'
import { useRouter } from 'expo-router'
import { userSignUp } from '@/types/userTypes'
import { appwriteGetSession, appwriteSignUp } from '@/appwrite/auth'
import { account, messaging } from '@/appwrite/setup'
export default function Register() {
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
        route.navigate('/(auth)/signIn')
    }
    const [signUpData, setSignUpData] = useState<userSignUp>({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        passwordReapeted: "",
    })
    const handleInputChange = (e: any) => {
        setSignUpData({
            ...signUpData,
            [e._dispatchInstances.memoizedProps.nativeID]: e.nativeEvent.text
        })
    }
    const handleSignUp = () => {
        if (signUpData.password != signUpData.passwordReapeted) {
            Alert.alert("تنبيه", "كلمه السر غير متطابقه")
            return
        }
        if (signUpData.email == "" || signUpData.password == "" || signUpData.firstName == "" || signUpData.lastName == "" || signUpData.passwordReapeted == "") {
            Alert.alert("تنبيه", "يرجى إدخال جميع البيانات")
            return
        }
        const name = `${signUpData.firstName} ${signUpData.lastName}`;
        appwriteSignUp(signUpData.email, signUpData.password, name).catch((err) => {
            Alert.alert("تنبيه", err.message)
        })
    }


    return (
        <View style={{ justifyContent: "center", paddingTop: 40, paddingHorizontal: 20, direction: "rtl" }}>
            <Image source={require("../../assets/images/MainLogo.png")} style={{ width: 150, height: 100, objectFit: "contain" }} />
            <Text style={{ fontSize: 25, fontWeight: '800', marginTop: 10 }}> انشاء حساب</Text>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{ marginBottom: 10 }}>
                <View style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                    <View style={{ marginTop: 30, width: "48%", }}>
                        <Text style={{ fontSize: 18, fontWeight: '300' }}>الاسم</Text>
                        <View style={{ backgroundColor: Colors[theme!].background, padding: 5, paddingHorizontal: 10, borderRadius: 10, marginVertical: 10 }}>
                            <TextInput nativeID='firstName' onChange={(e) => { handleInputChange(e) }} />
                        </View>
                    </View>
                    <View style={{ marginTop: 30, width: "48%", }}>
                        <Text style={{ fontSize: 18, fontWeight: '300' }}>اسم العائله</Text>
                        <View style={{ backgroundColor: Colors[theme!].background, padding: 5, paddingHorizontal: 10, borderRadius: 10, marginVertical: 10 }}>
                            <TextInput nativeID='lastName' onChange={(e) => { handleInputChange(e) }} />
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: '300' }}>بريد المستخدم </Text>
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
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: '300' }}> اعد كلمه السر</Text>
                    <View style={{ width: "100%", backgroundColor: Colors[theme!].background, padding: 5, paddingHorizontal: 10, borderRadius: 10, marginVertical: 10 }}>
                        <TextInput nativeID='passwordReapeted' onChange={(e) => { handleInputChange(e) }} />
                    </View>
                </View>
                <TouchableOpacity onPress={handleSignUp} style={{ width: "100%", height: 50, marginTop: 40, backgroundColor: Colors[theme!].primary, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, color: "white" }}>انشاء الحساب</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: '300', marginTop: 10, marginBottom: 100 }}> هل لديك حساب بالفعل <Text onPress={handleClickToRegister} style={{ color: Colors[theme!].primary }}>اضغط هنا </Text></Text>
            </ScrollView>
        </View>
    )
}