import React, { useLayoutEffect } from 'react';
import TrainingStep from '../components/trainings/TrainingStep';

const TrainingStepScreen = ({ route, navigation }) => {
  const { step } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: `Training ${step.name}` });
  }, []);

  return (
    <TrainingStep step={step} />
  );
};

export default TrainingStepScreen;
