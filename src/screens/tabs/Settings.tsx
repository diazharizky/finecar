import React, {useEffect} from 'react';
import {Box, VStack, HStack, Switch} from '@gluestack-ui/themed';
import {useTranslation} from 'react-i18next';
import i18n from 'i18next';
import {useIsFocused} from '@react-navigation/native';

import {FalconText} from '../../components';
import {mainColor, lightColor} from '../../consts/style';
import {useStatusBar, useAppBar} from '../../contexts';

const SettingsTabScreen = () => {
  const [lang, setLang] = React.useState(0);
  const {t} = useTranslation();
  const isFocused = useIsFocused();
  const {setBgColor, setStyle} = useStatusBar();
  const {setVisibility} = useAppBar();

  useEffect(() => {
    if (isFocused) {
      setBgColor!(lightColor);
      setStyle!('dark-content');
      setVisibility!(false);
    }
  }, [isFocused]);

  const changeLang = (val: boolean) => {
    i18n.changeLanguage(val ? 'en' : 'id');
    setLang(val ? 1 : 0);
  };

  return (
    <Box backgroundColor="#fff">
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
                          false: mainColor,
                          true: mainColor,
                        },
                        ios_backgroundColor: mainColor,
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

export default SettingsTabScreen;
