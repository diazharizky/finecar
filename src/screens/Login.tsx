import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Box, VStack, HStack, Pressable} from '@gluestack-ui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
import {ImageBackground} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {FalconInput, FalconButton} from '../components';
import {useStatusBar, useAppBar} from '../contexts';

const LoginScreen = () => {
  const {t} = useTranslation();
  const {setBgColor, setStyle} = useStatusBar();
  const {setVisibility} = useAppBar();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  useEffect(() => {
    setBgColor!('transparent');
    setStyle!('light-content');
    setVisibility!(false);
  }, []);

  return (
    <>
      <HStack p="$4" zIndex={99} position="absolute" marginTop={insets.top}>
        <HStack>
          <Pressable onPress={() => navigation.goBack()}>
            <Icon
              name="chevron-back"
              style={{
                fontSize: 24,
                color: '#fff',
              }}
            />
          </Pressable>
        </HStack>
        <HStack></HStack>
      </HStack>
      <ImageBackground
        source={require('../../assets/images/login-background.jpg')}
        style={{flex: 1}}>
        <Box
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: 36,
          }}>
          <VStack p="$5" space="md" style={{width: '100%'}}>
            <FalconInput
              placeholder={
                t('input_label_username') + '/' + t('input_label_email_address')
              }
            />
            <FalconInput
              type="password"
              placeholder={t('input_label_password')}
            />
            <FalconButton onPress={() => navigation.goBack()}>
              {t('btn_label_login')}
            </FalconButton>
          </VStack>
        </Box>
      </ImageBackground>
    </>
  );
};

export default LoginScreen;
