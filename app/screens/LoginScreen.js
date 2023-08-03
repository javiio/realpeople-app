import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import { Button, Input } from '../components/common';
import { useUser, useDialog } from '../hooks';
import { calcWidth } from '../helpers/dimensions';

const LoginScreen = ({ navigation }) => {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user, login } = useUser();
  const { showDialog } = useDialog();

  useEffect(() => {
    if (user) {
      navigation.navigate('home');
    }
  }, [user]);

  const onSubmit = async () => {
    setIsLoading(true);
    if (code.trim() === '') {
      showDialog({ title: 'Por favor ingresa un código' });
    } else {
      const u = await login(code);
      if (!u) {
        showDialog({
          title: 'Código incorrecto',
          description: 'Por favor verifica tu código e intenta nuevamente.',
        });
      }
    }

    setIsLoading(false);
  };

  return (
    <View style={tw`flex-1 bg-slate-900 px-8 pt-42`}>
      <View style={tw.style('mx-4 mb-4', calcWidth())}>
        <Input
          value={code}
          onChangeText={setCode}
          label="Código de usuario:"
          labelWhite
        />
        <Button
          title="Iniciar Sesión"
          containerStyle={tw``}
          onPress={() => onSubmit(code)}
          loading={isLoading}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
