import { useRef, useState } from 'react';
import { Animated, FlatList, View } from 'react-native';

import slides from '../../../slides';
import { CarDetailItem } from '../../components/CarDetailItem';
import { styles } from './styles';
import { Paginator } from '../../components/Paginator';
import { IconElement } from '../../components/IconElement';

export function CarDetail() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index)
  }).current

  const slidesRef = useRef(null);

  const scrollX = useRef(new Animated.Value(0)).current
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
  return (
    <>
        <View style={styles.carousel}>
          <FlatList data={slides}
            renderItem={({ item }) => <CarDetailItem item={item} />}
            horizontal
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false })}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          />
          <Paginator data={slides} scrollX={scrollX} />
        </View> 

    </>
  )
}