import React from 'react';
import QuestionText from './QuestionText';
import QuestionSelect from './QuestionSelect';

const Question = ({ question, ...props }) => {
  switch (question.type) {
    case 'text':
      return <QuestionText question={question} {...props} />;
    case 'longtext':
      return <QuestionText multiline question={question} {...props} />;
    case 'select':
      return <QuestionSelect question={question} {...props} />;
    case 'multiselect':
      return <QuestionSelect multiselect question={question} {...props} />;
    default:
      return <QuestionText question={question} {...props} />;
  }
};

export default Question;
