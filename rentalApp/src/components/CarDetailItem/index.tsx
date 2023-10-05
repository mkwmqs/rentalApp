import { View, Text, useWindowDimensions, Image } from "react-native";
import { styles } from "./styles";

interface itemSlideProps {
  item: {
    id: string;
    title: string;
    body: string;
    imgUrl: string;
  }
}

export function CarDetailItem({ item }: itemSlideProps) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image source={{ uri: item.imgUrl }} style={[styles.image, { width, resizeMode: 'contain' }]} />
    </View>
  )
}