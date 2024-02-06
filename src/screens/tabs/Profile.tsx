import React, {useEffect} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box} from '@gluestack-ui/themed';
import {useTranslation} from 'react-i18next';
import {useIsFocused} from '@react-navigation/native';

import type {RootStackParamList} from '../types';
import {FalconText, FalconButton} from '../../components';
import {useAuth, useStatusBar, useAppBar} from '../../contexts';
import {mainColor} from '../../consts/style';

const ProfileTabScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const {t} = useTranslation();
  const {data, loading} = useAuth();
  const isFocused = useIsFocused();
  const {setBgColor, setStyle} = useStatusBar();
  const {setVisibility} = useAppBar();

  useEffect(() => {
    if (isFocused) {
      setBgColor!(mainColor);
      setStyle!('light-content');
      setVisibility!(true);
    }
  }, [isFocused]);

  return (
    <>
      {loading ? (
        <FalconText>{t('message_app_is_loading')}</FalconText>
      ) : !data ? (
        <Box
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FalconText style={{marginBottom: 8}}>
            {t('message_login_suggestion')}
          </FalconText>
          <FalconButton onPress={() => navigation.navigate('login-screen')}>
            {t('btn_label_login')}
          </FalconButton>
        </Box>
      ) : (
        <FalconText>You're successfully logged in!</FalconText>
      )}
    </>
  );
};

export default ProfileTabScreen;
