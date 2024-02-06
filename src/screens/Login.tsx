import React, {useEffect} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {Box, VStack} from '@gluestack-ui/themed';

import type {RootStackParamList} from './types';
import {FalconInput, FalconButton} from '../components';
import {useStatusBar} from '../contexts';
import {lightColor} from '../consts/style';

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'login-screen'
>;

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const {t} = useTranslation();
  const {setBgColor, setStyle} = useStatusBar();

  useEffect(() => {
    setBgColor!(lightColor);
    setStyle!('dark-content');
  }, []);

  return (
    <Box
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <VStack p="$5" space="md" style={{width: '100%'}}>
        <FalconInput
          placeholder={
            t('input_label_username') + '/' + t('input_label_email_address')
          }
        />
        <FalconInput type="password" placeholder={t('input_label_password')} />
        <FalconButton onPress={() => navigation.goBack()}>
          {t('btn_label_login')}
        </FalconButton>
      </VStack>
    </Box>
  );
};

export default LoginScreen;
