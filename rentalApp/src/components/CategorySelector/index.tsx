import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Button, Center, HStack, Image, VStack } from 'native-base'

interface ICategorySelectorProps {
  onChange: () => string;
}

export function CategorySelector({ onChange, ...rest }: ICategorySelectorProps) {
  const [category, setCateogry] = useState<string>(null)
  const popCar = require('../../../assets/selector/carroPopular.png')
  const suv = require('../../../assets/selector/SuvCar.png')
  const sports = require('../../../assets/selector/sportsCar.png')
  const moto = require('../../../assets/selector/moto.png')
  const lux = require('../../../assets/selector/luxCar.png')
  const classic = require('../../../assets/selector/classicCar.png')

  async function selectCategory(clickedProp: string) {
    console.log(category)
    console.log('activated')
    await setCateogry(clickedProp);
    console.log(category)
  }

  return (
    <HStack m={4} space={3}>
      {/* popular */}
      <TouchableOpacity onPress={() => selectCategory('popular')}>
        <VStack justifyContent={'center'} alignItems={'center'}>
          <Avatar source={popCar} size={12} />
          <Text adjustsFontSizeToFit>Popular</Text>
        </VStack>
      </TouchableOpacity>
      {/* Moto */}
      <TouchableOpacity onPress={() => selectCategory('moto')}>
        <VStack justifyContent={'center'} alignItems={'center'}>
          <Avatar source={moto} size={12} />
          <Text adjustsFontSizeToFit>Moto</Text>
        </VStack>
      </TouchableOpacity>
      {/* Esportivo */}
      <TouchableOpacity onPress={() => selectCategory('esportivo')}>
        <VStack justifyContent={'center'} alignItems={'center'}>
          <Avatar source={sports} size={12} />
          <Text adjustsFontSizeToFit>Esportivo</Text>
        </VStack>
      </TouchableOpacity>
      {/* Classico */}
      <TouchableOpacity onPress={() => selectCategory('classico')}>
        <VStack justifyContent={'center'} alignItems={'center'}>
          <Avatar source={classic} size={12} />
          <Text adjustsFontSizeToFit>Clássico</Text>
        </VStack>
      </TouchableOpacity>
      {/* Lux */}
      <TouchableOpacity onPress={() => selectCategory('lux')}>
        <VStack justifyContent={'center'} alignItems={'center'}>
          <Avatar source={lux} size={12} />
          <Text adjustsFontSizeToFit>Luxuoso</Text>
        </VStack>
      </TouchableOpacity>
      {/* SUV */}
      <TouchableOpacity onPress={() => selectCategory('suv')}>
        <VStack justifyContent={'center'} alignItems={'center'}>
          <Avatar source={suv} size={12} />
          <Text adjustsFontSizeToFit>SUV</Text>
        </VStack>
      </TouchableOpacity>
    </HStack>
  )
}