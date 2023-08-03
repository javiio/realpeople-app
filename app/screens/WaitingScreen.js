import React, { useState, useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import tw from 'twrnc';
import { Text } from '../components/common';
import Images from '../theme/Images';
import { useSections } from '../hooks';
import { calcCardDimensions } from '../components/survey/helpers';

const WaitingScreen = ({ navigation }) => {
  const { sections } = useSections();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    navigation.setOptions({ title: '' });

    if (sections[0]?.finished) {
      setMessages([
        'Tu rutina personalizada está siendo diseñada!',
        'Gracias por enviar tu Anamnesis :), ahora estamos diseñando una rutina personalizada para ti!',
        'Una vez la tengamos lista te notificaremos para que puedas acceder a tu contenido personalizado en esta sección.',
      ]);
    } else {
      setMessages([
        'Aún no enviaste tu Anamnesis',
        'Para acceder al contenido personalizado de esta sección primero debes enviar tu Anamnesis.',
        'En base a los resultados de tu Anamnesis crearemos una rutina personalizada para ti :)',
      ]);
    }
  }, [sections]);

  return (
    <View style={tw`flex-1 bg-slate-900 px-8`}>
      <View style={tw.style('rounded-lg shadow-lg overflow-hidden', { ...calcCardDimensions() })}>
        <ImageBackground
          source={Images.img1}
          style={tw`flex-1 p-4 rounded-lg overflow-hidden`}
          resizeMode="cover"
        >
          <View style={tw`absolute inset-0 bg-purple-500 opacity-80`} />

          {messages.map((m, i) => (
            <Text white style={tw`mt-4 z-10 ${i === 0 ? 'text-2xl' : 'text-lg'}`}>
              { m }
            </Text>
          ))}
        </ImageBackground>
      </View>
    </View>
  );
};

export default WaitingScreen;
