import { StyleSheet, Image, Platform } from 'react-native';
import { Text, View } from 'react-native'


export default function TabTwoScreen() {
  return (
    <><Text>Hello explore</Text></>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
