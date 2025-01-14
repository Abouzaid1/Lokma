import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { ReactNode, useRef } from "react";
import { View, Image, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
const theme = "dark";
const createCarouselItem: ReactNode =
    <Animated.View style={{
        marginTop: 10,
        height: 150,
        width: "100%",
        backgroundColor: Colors[theme].backgroundSecondary,
        borderRadius: 10,
        justifyContent: 'space-between',
        overflow: 'hidden',
        flexDirection: "row-reverse",
        shadowColor: Colors[theme].primary,
        shadowOpacity: 1,
        // elevation: 5,
    }}>
        <Image source={require("@/assets/images/dish.png")} style={{
            width: 150,
            height: 150,
            shadowColor: Colors[theme].primary,
            shadowOpacity: 20,
            shadowOffset: { width: 5, height: 5 },
            shadowRadius: 5,
        }} />
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            <Text style={{ color: Colors[theme].text, fontSize: 28, fontWeight: "800" }}>مع لقمه اكلك </Text>
            <Text style={{ color: Colors[theme].text, fontSize: 28, fontWeight: "800" }}>جاهز!</Text>
            <TouchableOpacity style={{
                shadowColor: Colors[theme].primary,
                shadowOpacity: 10,
                elevation: 15,
                height: 35,
                marginTop: 10,
                width: 100,
                backgroundColor: Colors[theme].primary,
                gap: 10,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                borderRadius: 50,
                paddingHorizontal: 10,
            }}>
                <Text style={{ color: Colors[theme].background, fontSize: 18, fontWeight: "800" }}>ابحث</Text>
            </TouchableOpacity>
        </View>
    </Animated.View>;
const createCarouselItem2: ReactNode =
    <Animated.View style={{
        marginTop: 10,
        height: 150,
        width: "100%",
        backgroundColor: Colors[theme].tertiary,
        borderRadius: 10,
        justifyContent: 'space-between',
        overflow: 'hidden',
        // flexDirection: "row-reverse",
        shadowColor: Colors[theme].primary,
        shadowOpacity: 1,
        // elevation: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
    }}>
        <Text style={{
            color: Colors[theme].background,
            fontSize: 22,
            fontWeight: "800"
        }}>
            احصل علي وجبات جاهزه في اسرع وقت اقل مجهود</Text>
    </Animated.View >;

const carouselElements = [createCarouselItem, createCarouselItem2];

const HomeSliderContent = () => {
    const progress = useSharedValue<number>(0);
    const ref = useRef<ICarouselInstance>(null);
    const window = useWindowDimensions().width;
    return (
        <View
            id="carousel-component" testID="carouselComponent"  >
            <Carousel
                ref={ref}
                autoPlayInterval={4000}
                data={carouselElements}
                height={170}
                loop={true}
                // pagingEnabled={true}
                // snapEnabled={true}
                width={window - 40}
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    // height: 240,
                }}
                autoPlay={true}
                renderItem={({ index }) => {
                    return (
                        carouselElements[index]
                    );
                }}
            />
        </View>
    );
};

export default HomeSliderContent;
