import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import tw from 'twrnc';
import { Loader } from '../common';
import { useSurvey, useSections, useResources, useRoutine } from '../../hooks';
import Section from './Section';

const SectionsList = () => {
  const { sections, isLoading } = useSections();
  const { setSurvey, setAnswers } = useSurvey();
  const { setSteps } = useRoutine();
  const { setResources } = useResources();

  useEffect(() => {
    if (!isLoading && sections) {
      sections.forEach((section) => {
        switch (section.type) {
          case 'survey':
            setSurvey({ ...section.survey, id: section.id });
            setAnswers(section.answers || {});
            break;
          case 'routines':
            setSteps(section.steps);
            break;
          case 'trainings':
            break;
          case 'resources':
            setResources(section.resources);
            break;
          default:
            break;
        }
      });
    }
  }, [sections, isLoading]);

  return (
    <View style={tw`mb-6`}>
      {isLoading ? (
        <Loader />
      ) : (
        sections.map((section, index) => (
          <Animatable.View animation="fadeInRight" delay={200 * index} key={section.name}>
            <Section section={section} />
          </Animatable.View>
        ))
      )}
    </View>
  );
};

export default SectionsList;
