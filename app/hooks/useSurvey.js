import React, { useState, createContext, useContext } from 'react';
import { useFirebase } from './useFirebase';

export const surveyContext = createContext();

export const ProvideSurvey = ({ children }) => {
  const [survey, setSurvey] = useState();
  const [answers, setAnswers] = useState({});
  const { userSave } = useFirebase();

  const getAnswer = (id) => answers[id];
  const setAnswer = (id, value) => setAnswers((prev) => ({ ...prev, [id]: value }));

  const save = (data) => userSave(data, 'sections', survey.id);

  const saveAnswers = () => save({ answers });

  const finishSurvey = () => save({ finished: true });

  const value = {
    survey,
    setSurvey,
    answers,
    setAnswers,
    getAnswer,
    setAnswer,
    saveAnswers,
    finishSurvey,
  };

  return <surveyContext.Provider value={value}>{children}</surveyContext.Provider>;
};

export const useSurvey = () => useContext(surveyContext);
