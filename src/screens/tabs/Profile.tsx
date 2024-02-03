import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, VStack, HStack, Switch} from '@gluestack-ui/themed';
import {useTranslation} from 'react-i18next';
import i18n from 'i18next';

import type {RootStackParamList} from '../types';
import {FalconText, FalconButton} from '../../components';

const ProfileTabScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const [lang, setLang] = React.useState(0);
  const {t} = useTranslation();

  const changeLang = (val: boolean) => {
    i18n.changeLanguage(val ? 'en' : 'id');
    setLang(val ? 1 : 0);
  };

  return (
    <Box backgroundColor="#fff">
      <FalconButton onPress={() => navigation.navigate('login-screen')}>
        {t('login')}
      </FalconButton>
      <VStack>
        <Box style={{margin: 16}}>
          <HStack>
            <Box w="$56">
              <FalconText>{t('language')}</FalconText>
            </Box>
            <Box>
              <HStack space="sm" alignItems="center">
                <FalconText bold={lang == 0}>ID</FalconText>
                <Switch
                  onValueChange={val => changeLang(val)}
                  sx={{
                    _light: {
                      props: {
                        trackColor: {
                          false: '#767577',
                          true: '#81b0ff',
                        },
                        ios_backgroundColor: '#81b0ff',
                      },
                    },
                  }}
                />
                <FalconText bold={lang == 1}>EN</FalconText>
              </HStack>
            </Box>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default ProfileTabScreen;
