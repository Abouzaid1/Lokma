import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme.web'
import { User2Icon, DollarSign, Timer, StarIcon } from 'lucide-react-native'
type FoodPropsType = {
    name: string,
    price: number,
    category: string,
    rating: number,
    chef: string,
    estimatedTime: number,
    rate: number,
    image: string
}
const FoodCard = (props: FoodPropsType) => {
    const theme = useColorScheme()
    return (
        <View style={{
            width: "48%",
            // height: 200,
            borderRadius: 10,
            shadowColor: "#000",
            backgroundColor: Colors[theme!].background,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
            padding: 10,
            marginBottom: 10, overflow: "hidden",
            borderColor: Colors[theme!].backgroundSecondary,
            borderWidth: 0.5
        }}>
            <Image
                source={{ uri: props.image }}
                style={{
                    width: "100%",
                    height: 100,
                    borderRadius: 10,
                    resizeMode: "cover", // equivalent to objectFit: "cover"
                }}
            />
            <View>
                <Text
                    ellipsizeMode='tail'
                    numberOfLines={1}
                    style={{
                        marginTop: 10,
                        fontSize: 16,
                        fontWeight: "600",
                        textAlign: "center"
                    }}>{props.name}</Text>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 20
                }}>
                    <User2Icon size={14} color={Colors[theme!].textSecondary} />
                    <Text style={{
                        fontSize: 14,
                        fontWeight: "200",
                        color: Colors[theme!].textSecondary
                    }}>{props.chef}</Text>

                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Timer size={12} color={Colors[theme!].textSecondary} />
                    <Text style={{
                        fontSize: 12,
                        fontWeight: "200",
                        color: Colors[theme!].textSecondary
                    }}>{props.estimatedTime} يوم</Text>

                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 20
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        gap: 2,
                        alignItems: "center",

                    }}>
                        <StarIcon size={16} color={Colors[theme!].tertiary} fill={Colors[theme!].tertiary} />
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "500",
                            color: Colors[theme!].tertiary
                        }}>{props.rate}</Text>
                    </View>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "800",
                        color: Colors[theme!].primary
                    }}>{props.price} L.E</Text>
                </View>

                <View>
                    <TouchableOpacity style={{
                        shadowColor: Colors[theme!].primary,
                        shadowOpacity: 10,
                        elevation: 3,
                        marginTop: 10,
                        backgroundColor: Colors[theme!].primary,
                        width: "100%",
                        height: 25,
                        borderRadius: 5,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text

                            style={{
                                color: Colors[theme!].background,
                                fontSize: 14,
                                fontWeight: "bold"
                            }}>
                            عرض
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default FoodCard