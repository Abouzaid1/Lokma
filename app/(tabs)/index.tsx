import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { useUserStore } from '@/zustand/user';
import { useEffect } from 'react';
import { Image, Platform, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from 'react-native'
import Categories from '@/components/Categories';
import { Search } from 'lucide-react-native';
import HomeSliderContent from '@/components/HomeSliderContent';
export default function HomeScreen() {

  const { getUser, user } = useUserStore(state => state)
  const theme = useColorScheme()
  useEffect(() => {
    getUser()
  }, [])
  return (
    <View style={{ direction: "rtl", paddingTop: 50, paddingHorizontal: 20, width: "100%", backgroundColor: Colors[theme!].background, flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center' }}>
        <Image source={require("@/assets/images/MainLogo.png")} style={{ width: 200, height: 60, objectFit: "contain" }} />
      </View>
      {/* Search Input and its Icon */}
      <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center", maxWidth: '100%' }}>
        <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: Colors[theme!].primary, justifyContent: "center", alignItems: "center", borderRadius: 50 }}>
          <Search size={25} color={Colors[theme!].background} strokeWidth={3} />
        </TouchableOpacity>
        <View style={{ backgroundColor: Colors[theme!].backgroundSecondary, borderRadius: 50, marginVertical: 10, width: "85%", paddingHorizontal: 10 }}>
          <TextInput onChange={() => { }} placeholder='ابحث عن طعامك المفضل' style={{ fontSize: 16 }} />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <HomeSliderContent />
        <Categories />
      </ScrollView>
    </View>
  );
}