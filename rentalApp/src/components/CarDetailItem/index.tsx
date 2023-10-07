import { View, Text, useWindowDimensions, Image, ImageSourcePropType } from "react-native";
import { styles } from "./styles";



interface itemSlideProps {
  item: {
    id: string;
    title: string;
    body: string;
    img?: any
  }
}

export function CarDetailItem({ item }: itemSlideProps) {
  const { width,height } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image source={  item.img } style={[styles.image, { width,height:height/3.5, resizeMode: 'stretch' }]} />
    </View>
  )
}