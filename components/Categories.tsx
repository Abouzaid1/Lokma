import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme.web'
import FoodCard from './FoodCard'
const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState("salt")
    const theme = useColorScheme()
    const handleCategoryPress = (category: string) => {
        setSelectedCategory(category)
    }
    return (
        <View style={{ direction: "rtl", width: "100%", marginVertical: 10 }}>
            <Text style={{
                color: Colors[theme!].text,
                fontSize: 22,
                fontWeight: "bold",
                // marginVertical: 10
            }}>ابرز النتائج</Text>
            {/* <View style={{ flexDirection: "row", gap: 10 }}>

                <TouchableOpacity onPress={() => { handleCategoryPress("salt") }} style={{
                    backgroundColor: selectedCategory == "salt" ? Colors[theme!].tertiary : Colors[theme!].backgroundSecondary,
                    shadowColor: selectedCategory == "salt" ? Colors[theme!].tertiary : Colors[theme!].text,
                    shadowOpacity: 10,
                    elevation: selectedCategory == "salt" ? 5 : 1,
                    // width: "47%",
                    paddingHorizontal: 20,
                    height: 35,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{
                        color: selectedCategory == "salt" ? Colors[theme!].background : Colors[theme!].text,
                        fontSize: 18,
                        fontWeight: "bold"
                    }}>
                        حادق
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { handleCategoryPress("sugar") }} style={{
                    shadowColor: selectedCategory == "sugar" ? Colors[theme!].tertiary : Colors[theme!].text,
                    shadowOpacity: 10,
                    elevation: selectedCategory == "sugar" ? 5 : 1,
                    backgroundColor: selectedCategory == "sugar" ? Colors[theme!].tertiary : Colors[theme!].backgroundSecondary,
                    // width: "47%",
                    paddingHorizontal: 20,
                    height: 35,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{
                        color: selectedCategory == "sugar" ? Colors[theme!].background : Colors[theme!].text,
                        fontSize: 18,
                        fontWeight: "bold"
                    }}>
                        حلو
                    </Text>
                </TouchableOpacity>
            </View> */}
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10, flexWrap: "wrap" }}>
                <FoodCard image="https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg" rate={4} name='فته شاورما مع رز و سلطه وتوميه' category='salt' price={100} rating={4} chef='ام محمد' estimatedTime={10}></FoodCard>
                <FoodCard image="https://www.shutterstock.com/image-photo/arabic-cuisine-traditional-delicious-stuffed-260nw-2137878439.jpg" rate={4} name='فته شاورما' category='salt' price={100} rating={4} chef='ام محمد' estimatedTime={10}></FoodCard>
                <FoodCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYJp4bLkgaAnN1pb1I4387bVZtGmBXcKsig&s" rate={4} name='فته شاورما' category='salt' price={100} rating={4} chef='ام محمد' estimatedTime={10}></FoodCard>
            </View>
        </View>
    )
}

export default Categories