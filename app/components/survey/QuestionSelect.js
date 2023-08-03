import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';
import tw from 'twrnc';
import { Text } from '../common';
import { useSurvey } from '../../hooks';

const QuestionSelect = ({ question, multiselect }) => {
  const { getAnswer, setAnswer } = useSurvey();

  const selectOption = (option) => {
    if (!multiselect) {
      setAnswer(question.id, [option]);
    } else { // For single-selection option
      const currentAnswer = getAnswer(question.id) || [];
      const answer = [...currentAnswer];
      const index = answer.indexOf(option);
      if (index !== -1) { // If already exists then remove it
        answer.splice(index, 1);
      } else { // Add it otherwhise
        answer.push(option);
      }

      setAnswer(question.id, answer);
    }
  };

  return (
    <View style={tw`mb-4`}>
      <Text h2>{`${question.label}`}</Text>

      {question.subtitle && (
        <Text subtitle>{question.subtitle}</Text>
      )}

      {question.options.map((option) => {
        const answer = getAnswer(question.id) || [];
        const selected = answer.indexOf(option) !== -1;

        return (
          <TouchableOpacity
            style={tw.style(
              'border rounded-lg p-2 mb-2 flex-row',
              selected ? 'border-indigo-400 bg-indigo-200' : 'border-gray-200 bg-gray-50',
            )}
            onPress={() => selectOption(option)}
            key={option}
          >
            <View
              style={tw.style(
                'h-5 w-5 mr-3 mt-0.5',
                selected ? 'bg-indigo-400' : 'bg-gray-200',
                multiselect ? 'rounded' : 'rounded-full',
              )}
            >
              {selected && <Icon name="check" color="white" size={21} />}
            </View>
            <Text style={tw.style(selected && 'text-white')}>
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default QuestionSelect;
