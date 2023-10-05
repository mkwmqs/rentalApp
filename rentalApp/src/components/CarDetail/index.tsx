import { useRef, useState } from 'react';
import { Animated, FlatList, View } from 'react-native';

import slides from '../../../slides';
import { CarDetailItem } from '../CarDetailItem';
import { styles } from './styles';

export function CarDetail(){
  const [currentIndex,setCurrentIndex] = useState(0)
  const viewableItemsChanged = useRef(({viewableItems}:any)=>{
    setCurrentIndex(viewableItems[0].index)
  }).current
  
  const slidesRef = useRef(null);

  const scrollX = useRef(new Animated.Value(0)).current
  const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current
return(
  <View style={styles.container}>
    <View style={{flex:3}}>
   <FlatList data={slides} 
   renderItem={({item})=> <CarDetailItem item={item} />}
   horizontal
   pagingEnabled
   bounces={false}
   keyExtractor={(item)=>item.id}
   onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],
    {useNativeDriver:false})}
    scrollEventThrottle={32}
    onViewableItemsChanged={viewableItemsChanged}
    viewabilityConfig={viewConfig}
    ref={slidesRef}
    />
    </View>
  </View>
)
}