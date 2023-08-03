import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import tw from 'twrnc';
import * as Animatable from 'react-native-animatable';
import { Swiper } from '../components/common';
import SurveyCard from '../components/survey/SurveyCard';
import { calcCardDimensions } from '../components/survey/helpers';
import { useSurvey, useSections } from '../hooks';

const SurveyScreen = ({ navigation }) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const { survey } = useSurvey();
  const { section } = useSections();
  const swiperRef = useRef(null);

  useEffect(() => {
    navigation.setOptions({ title: survey.title });
  }, []);

  const cards = survey.cards.filter((card) => (
    (section.finished && card.type === 'finished') || (!section.finished && card.type !== 'finished')
  ));

  const renderCard = (card, cardIndex) => {
    const animation = isFirstLoad ? 'fadeInUp' : '';
    const animationDelay = isFirstLoad ? (cardIndex + 1) * 300 : 0;

    return (
      <Animatable.View key={card.title} animation={animation} delay={animationDelay} style={{ flex: 1 }}>
        <SurveyCard
          isFinished={card === 'finished'}
          card={card}
          next={next}
          prev={prev}
          isFirstLoad={isFirstLoad}
          cardIndex={cardIndex}
        />
      </Animatable.View>
    );
  };

  const next = () => {
    swiperRef.current.swipeLeft();
    setIsFirstLoad(false);
  };

  const prev = () => {
    swiperRef.current.swipeBack();
  };

  return (
    <ScrollView style={tw`bg-slate-900`}>
      <View style={{ height: calcCardDimensions().height + 90 }}>
        <Swiper
          ref={swiperRef}
          cards={cards}
          renderCard={renderCard}
          cardIndex={0}
          showSecondCard
          stackSeparation={20}
          stackSize={5}
          horizontalSwipe={false}
          verticalSwipe={false}
          swipeBackCard
          backgroundColor="transparent"
          containerStyle={tw``}
          cardVerticalMargin={0}
        />
      </View>
    </ScrollView>
  );
};

export default SurveyScreen;
