import React, { useEffect } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import tw from 'twrnc';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Text } from '../components/common';
import SectionsList from '../components/sections/SectionsList';
import { useUser } from '../hooks';

const HomeScreen = () => {
  const { user, login } = useUser();
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    if (!user && route.params?.user) {
      const autoLogin = async () => {
        const u = await login(route.params?.user);
        if (!u) {
          navigation.navigate('home', { user: user.id });
        }
      };
      autoLogin();
    }
  }, [route.params?.user, user, login]);

  if (!user) {
    return <View />;
  }

  return (
    <View style={tw`flex-1 bg-slate-900`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/bypame-logo.png")}
          style={tw.style('self-center mt-12', { width: '60%', height: 82 })}
          resizeMode="contain"
        />
        <LinearGradient
          start={[0, 0]}
          end={[1, 0]}
          colors={['#0f172a', '#0ca5e9', '#0f172a']}
          locations={[0.1, 0.5, 0.9]}
          style={tw`h-[1px] w-full mt-3 mb-5`}
        />

        <Text h1 bold white>{`Hola ${user.name}!`}</Text>
        <Text white center style={tw`px-4 -mt-3 mb-4`}>{user.welcome}</Text>

        <SectionsList />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
