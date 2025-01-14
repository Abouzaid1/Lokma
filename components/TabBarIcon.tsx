import { View, Text } from 'react-native'
import React from 'react'
import { Home, SearchIcon, User, PercentCircle, ShoppingCart, ChefHat } from 'lucide-react-native'
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
const TabBarIcon = (props: { focused: boolean, name: string }) => {
    const theme = useColorScheme()
    const size = 35
    const nonfocusSize = 25
    const iconSize = 1.5
    const iconSize2 = 1.5
    return <>
        {
            props.name == "home" &&
            <>
                <Home size={props.focused ? size : nonfocusSize} color={props.focused ? Colors[theme!].primary : Colors[theme!].secondary} strokeWidth={props.focused ? iconSize : iconSize2} />
                <Text style={{
                    fontSize: 10,
                    fontWeight: props.focused ? "800" : "200",
                    color: props.focused ? Colors[theme!].primary : Colors[theme!].secondary
                }}>الرئيسيه</Text>
            </>
        }
        {
            props.name == "explore" &&
            <>
                <ChefHat size={props.focused ? size : nonfocusSize} color={props.focused ? Colors[theme!].primary : Colors[theme!].secondary} strokeWidth={props.focused ? iconSize : iconSize2} />
                <Text style={{
                    fontSize: 10,
                    fontWeight: props.focused ? "800" : "200",
                    color: props.focused ? Colors[theme!].primary : Colors[theme!].secondary
                }}>الشيفات</Text>
            </>
        }
        {
            props.name == "offers" &&
            <>
                <PercentCircle size={props.focused ? size : nonfocusSize} color={props.focused ? Colors[theme!].primary : Colors[theme!].secondary} strokeWidth={props.focused ? iconSize : iconSize2} />
                <Text style={{
                    fontSize: 10,
                    fontWeight: props.focused ? "800" : "200",
                    color: props.focused ? Colors[theme!].primary : Colors[theme!].secondary
                }}>العروض</Text>
            </>
        }
        {
            props.name == "cart" &&
            <>
                <ShoppingCart size={props.focused ? size : nonfocusSize} color={props.focused ? Colors[theme!].primary : Colors[theme!].secondary} strokeWidth={props.focused ? iconSize : iconSize2} />
                <Text style={{
                    fontSize: 10,
                    fontWeight: props.focused ? "800" : "200",
                    color: props.focused ? Colors[theme!].primary : Colors[theme!].secondary
                }}>العربه</Text>
            </>
        }
        {
            props.name == "account" &&
            <>
                <User size={props.focused ? size : nonfocusSize} color={props.focused ? Colors[theme!].primary : Colors[theme!].secondary} strokeWidth={props.focused ? iconSize : iconSize2} />
                <Text style={{
                    fontSize: 10,
                    fontWeight: props.focused ? "800" : "200",
                    color: props.focused ? Colors[theme!].primary : Colors[theme!].secondary
                }}>الحساب</Text>
            </>
        }

    </>
}

export default TabBarIcon