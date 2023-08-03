import React from 'react';
import { View } from 'react-native';
import { useSurvey } from '../../hooks';
import { Input } from '../common';

const QuestionText = ({ question, multiline }) => {
  const { getAnswer, setAnswer } = useSurvey();

  return (
    <View>
      <Input
        value={getAnswer(question.id)}
        onChangeText={(value) => setAnswer(question.id, value)}
        label={question.label}
        subtitle={question.subtitle}
        multiline={multiline}
      />
    </View>
  );
};

export default QuestionText;
