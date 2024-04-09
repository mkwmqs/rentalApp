import { ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { FullWidthImage } from '../../../components/FullWidthImage';
import adIntroductionImage from '../../../../assets/ad-img-introduction.png';
import { styles } from '../AdIntroduction/styles';
import { NavBottom } from '../../../components/NavBottom';
import { ColoredButton } from '../../../components/ColoredButton';
import color from '../../../styles/color';
import { useNavigation } from '@react-navigation/native';
import { EnumeratedLineItem } from '../../../components/EnumeratedLineItem';
import { fetchAdTextData, getAdTextByCode } from '../adverstisementService';
import { SCREEN_AD_INTRODUCTION } from '../advertisementParameters';
import { AdContent } from '../advertisementDomains';


interface textedImageProps {
    obj: {
      image: any,
      description?: string,
      heightRatio?: number
    }
  }
  
  
export default function AdIntroduction() {
  
  const navigation = useNavigation<any>();
  const [adTexts, setAdTexts] = useState<AdContent[]>([]);
  const [loading, setLoading] = useState(true);


  const objImagem = {
    image: adIntroductionImage,
    heightRatio: 0.61,
  };

  useEffect(() => {
    const fetchApi = async() => {
        try{
            const textsRemote = await fetchAdTextData(SCREEN_AD_INTRODUCTION);
            setAdTexts(textsRemote);
        } catch(error){
            console.error(error.message);
        } finally {
            setLoading(false)
        }};
    fetchApi();
}, []);



  const handlePress = () => {
        //todo SaibaMais boxes
  };

if(loading){
    return null;
}

return (

    <View style={styles.mainContainer}>
       
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            
            <FullWidthImage obj={objImagem} />   

            <View style={styles.bodyContainer}>

                <Text style={styles.header}>{getAdTextByCode(adTexts, 1)}</Text>
                <Text style={styles.subtitle}>{getAdTextByCode(adTexts, 2)}</Text>

                <View style={styles.boxShadow}>
                    <Text style={styles.boxHeader}>{getAdTextByCode(adTexts, 10)}</Text> 
                    <EnumeratedLineItem text={getAdTextByCode(adTexts, 11)}/>
                    <EnumeratedLineItem text={getAdTextByCode(adTexts, 12)}/>
                    <EnumeratedLineItem text={getAdTextByCode(adTexts, 13)}/>
                    <EnumeratedLineItem text={getAdTextByCode(adTexts, 14)}/>
                </View>

                <View style={styles.boxShadow}>
                    <Text style={styles.boxHeader}>{getAdTextByCode(adTexts, 20)}</Text> 
                    <Text style={styles.singleParagraph}>{getAdTextByCode(adTexts, 21)}</Text>
                    <TouchableOpacity onPress={handlePress}>
                        <Text style={styles.getAwareLink}>{getAdTextByCode(adTexts, 100)}</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.boxShadow}>
                    <Text style={styles.boxHeader}>{getAdTextByCode(adTexts, 30)}</Text> 
                    <Text style={styles.singleParagraph}>{getAdTextByCode(adTexts, 31)}</Text>
                    <TouchableOpacity onPress={handlePress}>
                        <Text style={styles.getAwareLink}>{getAdTextByCode(adTexts, 100)}</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.boxShadow}>
                    <Text style={styles.boxHeader}>{getAdTextByCode(adTexts, 40)}</Text> 
                    <Text style={styles.singleParagraph}>{getAdTextByCode(adTexts, 41)} </Text>
                    <TouchableOpacity onPress={handlePress}>
                        <Text style={styles.getAwareLink}>{getAdTextByCode(adTexts, 100)}</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.bottomParagraph}>{getAdTextByCode(adTexts, 3)}</Text>
                    <Text style={styles.bottomParagraph}>{getAdTextByCode(adTexts, 50)}</Text>
                    <EnumeratedLineItem text={getAdTextByCode(adTexts, 51)} 
                        customStyles={{containerStyle:{marginTop: 0}, textStyle:{fontSize: 14}}}/>
                    <EnumeratedLineItem text={getAdTextByCode(adTexts, 52)}
                        customStyles={{containerStyle:{marginTop: -4}, textStyle:{fontSize: 14}}}/>
                    <EnumeratedLineItem text={getAdTextByCode(adTexts, 53)} 
                        customStyles={{containerStyle:{marginTop: -4}, textStyle:{fontSize: 14}}}/>
                    <EnumeratedLineItem text={getAdTextByCode(adTexts, 54)}
                        customStyles={{containerStyle:{marginTop: -4}, textStyle:{fontSize: 14}}}/>
                    <EnumeratedLineItem text={getAdTextByCode(adTexts, 55)} 
                        customStyles={{containerStyle:{marginTop: -4}, textStyle:{fontSize: 14}}}/>
                    <EnumeratedLineItem text={getAdTextByCode(adTexts, 56)}
                        customStyles={{containerStyle:{marginTop: -4}, textStyle:{fontSize: 14}}}/>
                </View>

                
                <View style={styles.forwardButton}>
                    <ColoredButton 
                        title={getAdTextByCode(adTexts, 101)}
                        color={color.light_green}
                        onPress={() => navigation.navigate('AdSimulation')}
                        />
                </View>

            </View> 
        </ScrollView>
        <NavBottom/>
    </View>
  );
};



