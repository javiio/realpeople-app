import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import tw from 'twrnc';
import TrainingStepsList from '../components/trainings/TrainingStepsList';
import { useRoutine, useTrainings, useProducts } from '../hooks';

const TrainingScreen = ({ route }) => {
  const { steps } = useRoutine();
  const { getTrainingByRoutineStep } = useTrainings();
  const { getProduct } = useProducts();
  const { level, routine } = route.params;
  const [filteredSteps, setFilteredSteps] = useState([]);

  useEffect(() => {
    const filtered = steps.filter((s) => {
      const product = getProduct(s.products[0]);
      if (!product.training) {
        return false;
      }
      const levels = s.levels.split(',');
      const routines = s.routines.split(',');

      return levels.indexOf(level.toString()) !== -1 && routines.indexOf(routine) !== -1;
    });

    const trainings = filtered.map((step) => getTrainingByRoutineStep(step));
    setFilteredSteps(trainings);
  }, [steps, level]);

  return (
    <SafeAreaView style={tw`flex-1 bg-slate-900`}>
      <TrainingStepsList steps={filteredSteps} routine={routine} />
    </SafeAreaView>
  );
};

export default TrainingScreen;
