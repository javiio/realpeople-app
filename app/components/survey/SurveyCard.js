import React from 'react';
import { View } from 'react-native';
import { Icon } from '@rneui/themed';
import tw from 'twrnc';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import Question from './Question';
import StaticCard from './StaticCard';
import { calcCardDimensions } from './helpers';
import { Button, Text } from '../common';
import { useSurvey } from '../../hooks';

const SurveyCard = ({ card, next, prev, isFirstLoad, cardIndex }) => {
  const { saveAnswers } = useSurvey();
  const COLORS = ['#fff', '#f5d0fe', '#c4b5fd', '#f0f9ff', '#f5d0fe', '#c4b5fd', '#f0f9ff', '#f5d0fe', '#c4b5fd', '#f0f9ff', '#f5d0fe', '#c4b5fd', '#f0f9ff', '#f5d0fe', '#c4b5fd', '#f0f9ff', '#f5d0fe', '#c4b5fd', '#f0f9ff', '#f5d0fe', '#c4b5fd', '#f0f9ff', '#f5d0fe', '#c4b5fd', '#f0f9ff'];

  if (card.type === 'header' || card.type === 'footer' || card.type === 'static' || card.type === 'finished') {
    return <StaticCard card={card} next={next} prev={prev} isFirstLoad={isFirstLoad} />;
  }

  // Animate the first time to avoid showing the buttons in the initial 'fadeInUp' cards efect
  const footerAnimation = isFirstLoad ? 'fadeIn' : '';

  const handleNext = () => {
    saveAnswers();
    next();
  };

  const handlePrev = () => {
    saveAnswers();
    prev();
  };

  return (
    <View style={tw.style('bg-white p-4 rounded-lg shadow-lg', { ...calcCardDimensions() })}>
      <Text h1>{card.title}</Text>

      <View>
        {card.questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </View>

      <LinearGradient
        colors={['#fff', COLORS[cardIndex]]}
        style={tw`absolute bottom-0 left-0 right-0 rounded-lg h-21 opacity-80`}
      />

      <Animatable.View
        style={tw`flex-row justify-between mt-2 mb-4 m-4 absolute bottom-0 left-0 right-0`}
        animation={footerAnimation}
        delay={1800}
      >
        <Button
          title="Atrás"
          onPress={handlePrev}
          type="clear"
          icon={<Icon name="chevron-left" iconStyle={tw`text-blue-500`} />}
          buttonStyle={tw`pl-0`}
          titleStyle={tw`ml-0 text-blue-500`}
        />

        <Button
          title="Siguiente"
          onPress={handleNext}
          icon={<Icon name="chevron-right" color="#fff" />}
          iconRight
        />
      </Animatable.View>
    </View>
  );
};

export default SurveyCard;
