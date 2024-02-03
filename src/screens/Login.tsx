import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, VStack} from '@gluestack-ui/themed';
import {useTranslation} from 'react-i18next';

import {FalconInput, FalconButton} from '../components';

import type {RootStackParamList} from './types';

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'login-screen'
>;

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const {t} = useTranslation();

  return (
    <Box p="$5">
      <VStack space="md">
        <FalconInput placeholder={t('username') + '/' + t('email_address')} />
        <FalconInput type="password" placeholder={t('password')} />
        <FalconButton onPress={() => navigation.goBack()}>
          {t('login')}
        </FalconButton>
      </VStack>
    </Box>
  );
};

export default LoginScreen;
