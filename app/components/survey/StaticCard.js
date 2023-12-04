import React, { useCallback } from 'react';
import { View, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import tw from 'twrnc';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Text } from '../common';
import { useSurvey, useDialog, useUser } from '../../hooks';
import Images from '../../theme/Images';
import { calcCardDimensions } from './helpers';

const StaticCard = ({ card, next, prev, isFirstLoad }) => {
  const footerAnimation = isFirstLoad ? 'fadeIn' : '';
  const { finishSurvey } = useSurvey();
  const navigation = useNavigation();
  const { showDialog } = useDialog();
  const { user } = useUser();

  const send = () => {
    finishSurvey();
    navigation.navigate('home', { user: user.id });
    showDialog({
      title: card.sentTitle || 'Envio correcto.',
      description: card.sentText || 'Recibimos tus respuestas correctamente',
    });
  };

  const confirmSend = () => {
    showDialog({
      title: card.confirmTitle || 'Terminaste?',
      description: card.confirmText || 'Asegurate que respondiste a todas las preguntas antes de enviar',
      okText: 'Enviar',
      onOk: send,
      showCancel: true,
    });
  };

  const TopContainer = useCallback(({ children }) => {
    if (card.bgAsset && Images[card.bgAsset]) {
      return (
        <ImageBackground
          source={Images[card.bgAsset]}
          style={tw`flex-1 p-4 rounded-lg overflow-hidden`}
          resizeMode="cover"
        >
          {children}
        </ImageBackground>
      );
    }
    if (card.bgImage) {
      return (
        <ImageBackground
          source={{ uri: card.bgImage }}
          style={tw`flex-1 p-4 rounded-lg overflow-hidden`}
          resizeMode="cover"
        >
          {children}
        </ImageBackground>
      );
    }

    return <View style={tw`flex-1 p-4 rounded-lg overflow-hidden`}>{children}</View>;
  }, [card]);

  return (
    <View style={tw.style('bg-white rounded-lg shadow-lg', { ...calcCardDimensions() })}>
      <TopContainer>
        {card.bgColor && <View style={tw`absolute inset-0 ${card.bgColor}`} />}
        <Text h1 white bold style={tw`z-10`}>{card.title}</Text>

        {card.texts.map((text, i) => (
          <Text white style={tw`mt-4 z-10`} key={i}>{text}</Text>
        ))}

        {card.type === 'header' && (
          <View style={tw`absolute bottom-4 left-4 right-4`}>
            <Button
              title="Iniciar"
              onPress={next}
              icon={<Icon name="chevron-right" color="#fff" />}
              iconRight
            />
          </View>
        )}

        {card.type === 'footer' && (
          <View style={tw`mt-12`}>
            <Button
              title="Enviar"
              onPress={confirmSend}
              icon={<Icon name="send" color="#fff" size={20} containerStyle={tw`ml-2`} />}
              iconRight
            />
          </View>
        )}

        {card.type !== 'header' && (
          <>
            <LinearGradient
              colors={['rgba(245, 208, 254, 0)', 'rgba(245, 208, 254, 0.8)']}
              style={tw`absolute bottom-0 left-0 right-0 rounded-lg h-21`}
            />

            <Animatable.View
              style={tw`flex-row justify-between mt-2 mb-4 m-4 absolute bottom-0 left-0 right-0`}
              animation={footerAnimation}
              delay={2100}
            >
              <Button
                title="Atrás"
                onPress={prev}
                type="clear"
                icon={<Icon name="chevron-left" iconStyle={tw`text-white`} />}
                buttonStyle={tw`pl-0`}
                titleStyle={tw`ml-0 text-white`}
              />

              {card.type === 'static' && (
                <Button
                  title="Siguiente"
                  onPress={next}
                  icon={<Icon name="chevron-right" color="#fff" />}
                  iconRight
                />
              )}
            </Animatable.View>
          </>
        )}
      </TopContainer>
    </View>
  );
};

export default StaticCard;
