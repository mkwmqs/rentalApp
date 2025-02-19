import { AirbnbRating } from '@rneui/themed';
import React, { useRef, useState } from 'react';
import { Animated, FlatList, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import slides from '../../../slides';
import { CarDetailItem } from '../../components/CarDetailItem';
import { Paginator } from '../../components/Paginator';
import { styles } from './styles';
import fonts from '../../styles/fonts';
import { ProgressBar } from '../../components/ProgressBar';
import { CommentCard } from '../../components/CommentCard';
import { ColoredButton } from '../../components/ColoredButton';
import color from '../../styles/color';





export function CarDetail() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [widthBar, setWidthBar] = useState(0)
  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index)
  }).current
  const commentCount = 7
  const benefitsCount = 10
  const onLayout = (event: { nativeEvent: { layout: { x: any; y: any; height: number; width: number; }; }; }) => {
    const { x, y, height, width } = event.nativeEvent.layout;
    setWidthBar(width)
  }

  const slidesRef = useRef(null);

  const scrollX = useRef(new Animated.Value(0)).current
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
  const ratingCompleted = (rating: number) => {
    console.log('Rating is: ' + rating);
    console.log('kaakaka')
  };
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
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
      <View style={styles.descriptionRow}>
        <Text style={styles.header}>Tiguan 2.0 TSI</Text>
        <Icon name='star' size={24}><Text style={styles.header}>3.0</Text></Icon>
      </View>
      <View style={styles.descriptionRow}>
        <Text style={styles.subtitle}>Ano 2019</Text>
        <Text style={styles.subtitle}>Recife - PE</Text>
      </View>
      <View style={styles.descriptionRow}>
        <Text style={styles.subtitle}>34.342 Km</Text>
        <Text style={styles.subtitle}>1 - 6 de setembro</Text>
      </View>
      <View style={[styles.descriptionRow, { marginTop: 24 }]}>
        <Text style={styles.comments}>7 comentários</Text>
        <Icon name='user' size={18}><Text style={styles.comments}>{'  '}Hoster 10</Text></Icon>
      </View>
      <View style={styles.line} />
      <View style={styles.descriptionRow}>
        <View style={{
          width: '50%',
          padding: 10,
          borderColor: 'gray',
        }}>
          <Text numberOfLines={2} style={styles.descriptionTitle}>Suv: para a família alugado por Maria</Text>
        </View>
        <Image source={require('../../../assets/domestic-dog_thumb_square.jpg')}  style={styles.thumbnail} />
      </View>
      <View style={styles.descriptionBox}>
        <Text style={styles.subtitle}>7 lugares - ar condicionado - alarme
          direção elétrica - câmbio automático
          demais dados cadastrado do carro </Text>
      </View>
      <View style={styles.line} />

      <View style={[styles.descriptionRow, { alignItems: 'flex-start' }]}>

        <Icon name='user' size={18} style={{ marginTop: 8 }} />

        <View style={styles.descriptionBox} >
          <Text style={styles.header}>Maria é um Hoster 10</Text>
          <Text style={styles.subtitle}>Hoster 10 é um Hoster experiente e
            muito bem avaliado, comprometido em locar veículos, oferecendo uma
            experiência incrível para os Renters. </Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={[styles.descriptionRow, { alignItems: 'flex-start' }]}>

        <Icon name='car' size={18} style={{ marginTop: 8 }} />

        <View style={styles.descriptionBox} >
          <Text style={styles.header}>Avaliação do veículo</Text>
          <View style={[{ marginVertical: 8 }, styles.ratingBox]}>
            <AirbnbRating
              isDisabled={true}
              size={18}
              defaultRating={4}
              showRating={false}
            />
            <Text style={{ fontFamily: fonts.title, paddingHorizontal: 12 }}>4.7 out of 5</Text>
          </View>
          <View style={[styles.ratingBox, { paddingHorizontal: 8 }]}>
            <Text style={styles.ratingText}>147 global ratings</Text>
          </View>
        </View>

      </View>
      <View style={styles.barContainer} onLayout={onLayout}>
      <ProgressBar data={50} widthBar={widthBar} star={5} />
        <ProgressBar data={9} widthBar={widthBar} star={4} />
        <ProgressBar data={5} widthBar={widthBar} star={3} />
        <ProgressBar data={0} widthBar={widthBar} star={2} />
        <ProgressBar data={2} widthBar={widthBar} star={1} />
      </View>
      <View style={styles.commentCard}>
        <CommentCard />
        <CommentCard />
      </View>
      <View style={styles.lightButton}>
        <ColoredButton color={color.light_grey} title={`mostrar todos os ${commentCount} comentarios`} />
      </View>
      <View style={styles.line} />
      <View style={[styles.descriptionRow, { alignItems: 'flex-start' }]}>

        <Icon name='calendar' size={18} style={{ marginTop: 8 }} />
        <View style={[styles.descriptionBox, { justifyContent: 'space-between' }]}>
          <Text style={styles.header}>Cancelaemnto</Text>
          <Text style={[styles.subtitle, { marginVertical: 12 }]}>Cancelamento gratuito até o dia inidicado pela Hoster</Text>
          <Text style={[styles.subtitle, { textDecorationLine: 'underline' }]}>Política de cancelamento</Text>
        </View>
      </View>
      <View style={styles.line} />


      <View style={[styles.descriptionBox, { alignItems: 'center', justifyContent: 'center', marginLeft: 42 }]}>
        <Text style={styles.header}>O que este veículo oferece?</Text>
      </View>
      <View style={[styles.descriptionRow, { alignItems: 'center', justifyContent: 'flex-start' }]}>
        <EvilIcon name='location' size={18} style={{ marginRight: 32, marginVertical: 12 }} />
        <Text style={styles.subtitle}>Entrega em local diferente </Text>
      </View>
      <View style={[styles.descriptionRow, { alignItems: 'center', justifyContent: 'flex-start' }]}>
        <MaterialCommunityIcons name='certificate-outline' size={18} style={{ marginRight: 32, marginVertical: 12 }} />
        <Text style={styles.subtitle}>Certificado de Inspeção </Text>
      </View>
      <View style={[styles.descriptionRow, { alignItems: 'center', justifyContent: 'flex-start' }]}>
        <MaterialCommunityIcons name='baby-carriage' size={18} style={{ marginRight: 32, marginVertical: 12 }} />
        <Text style={styles.subtitle}>Bebe conforto </Text>
      </View>
      <View style={[styles.descriptionRow, { alignItems: 'center', justifyContent: 'flex-start' }]}>
        <Icon name='snowflake' size={18} style={{ marginRight: 32, marginVertical: 12 }} />
        <Text style={styles.subtitle}>Ar condicionado </Text>
      </View>
      <View style={[styles.descriptionRow, { alignItems: 'center', justifyContent: 'flex-start' }]}>
        <Icon name='lock' size={18} style={{ marginRight: 32, marginVertical: 12 }} />
        <Text style={styles.subtitle}>Alarme de segurança </Text>
      </View>
      <View style={styles.lightButton}>
        {/* <LightButton title={`mostrar todos as ${benefitsCount} comodidades`} /> */}
      </View>
      <View style={styles.line} />

      <View style={styles.descriptionBox}>
        <Text style={[styles.descriptionTitle, { marginVertical: 12 }]}>Sobre Maria</Text>
        <Text style={styles.subtitle}>Membro desde 2022</Text>
      </View>
      <View style={[styles.descriptionRow, { alignItems: 'center', justifyContent: 'flex-start' }]}>
        <EvilIcon name='star' size={18} style={{ marginRight: 32, marginVertical: 12 }} />
        <Text style={styles.subtitle}>30 avaliações </Text>
      </View>
      <View style={[styles.descriptionRow, { alignItems: 'center', justifyContent: 'flex-start' }]}>
        <Ionicons name='shield-checkmark-outline' size={18} style={{ marginRight: 32, marginVertical: 12 }} />
        <Text style={styles.subtitle}>Identidade verificada </Text>
      </View>
      <View style={[styles.descriptionRow, { alignItems: 'center', justifyContent: 'flex-start' }]}>
        <Icon name='user' size={18} style={{ marginRight: 32, marginVertical: 12 }} />
        <Text style={styles.subtitle}>Hoster nota 10 </Text>
      </View>

      <View style={styles.descriptionBox}>
        <Text style={[styles.descriptionTitle, { marginVertical: 12 }]}>Durante a locação</Text>
        <Text style={styles.subtitle}>Sou nascida resumo da pessoa que cadastrou</Text>
      </View>


      <View style={styles.descriptionBox}>
        <Text style={[styles.descriptionTitle, { marginVertical: 12 }]}>Maria das Dores é uma Hoster nota 10</Text>
        <Text style={styles.subtitle}>Texto explicando hoster nota 10</Text>
      </View>
      <View style={[styles.lightButton, { marginTop: 24 }]}>
        {/* <LightButton title='Fale com o Hoster' /> */}
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 18 }}>
        <Text style={styles.subtitle}>Para proteger seu dinheiro e seus direitos nunca transfira dinheiro ou se comunique fora do App</Text>
        <View style={styles.line} />
      </View>
    </ScrollView >
  )
}