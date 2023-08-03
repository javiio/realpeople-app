import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import tw from 'twrnc';
import RoutineStepsList from '../components/routines/RoutineStepsList';
import { useRoutine } from '../hooks';

const RoutineScreen = ({ route }) => {
  const { steps } = useRoutine();
  const { level, routine } = route.params;
  const [filteredSteps, setFilteredProducts] = useState([]);

  useEffect(() => {
    const arr = steps.filter((s) => {
      const levels = s.levels.split(',');
      const routines = s.routines.split(',');

      return levels.indexOf(level.toString()) !== -1 && routines.indexOf(routine) !== -1;
      // return levels.indexOf(level.toString()) !== -1;
    });

    setFilteredProducts(arr);
  }, [steps, level]);

  return (
    <SafeAreaView style={tw`flex-1 bg-slate-900`}>
      <RoutineStepsList steps={filteredSteps} />
    </SafeAreaView>
  );
};

export default RoutineScreen;
