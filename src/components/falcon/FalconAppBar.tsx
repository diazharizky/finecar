import React from 'react';
import {HStack, Pressable} from '@gluestack-ui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';

import {mainColor} from '../../consts/style';
import {useAppBar} from '../../contexts';
import type {RootStackParamList} from '../../screens/types';

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
    color: '#fff',
  },
});

const FalconAppBar = () => {
  const {visible, content} = useAppBar();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  return (
    <>
      {visible && (
        <HStack
          backgroundColor={mainColor}
          p="$4"
          justifyContent="space-between"
          alignItems="center">
          {content ? (
            content
          ) : (
            <>
              <HStack></HStack>
              <HStack>
                <Pressable
                  onPress={() => navigation.navigate('notifications-screen')}>
                  <Icon name="notifications-outline" style={styles.icon} />
                </Pressable>
              </HStack>
            </>
          )}
        </HStack>
      )}
    </>
  );
};

export {FalconAppBar};
