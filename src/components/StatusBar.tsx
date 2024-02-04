import React from 'react';
import {View, StatusBar as RNStatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useStatusBar} from '../contexts/StatusBar';

const StatusBar = () => {
  const insets = useSafeAreaInsets();
  const {bgColor, style} = useStatusBar();

  return (
    <View style={{height: insets.top, backgroundColor: bgColor}}>
      <RNStatusBar backgroundColor={bgColor} barStyle={style} />
    </View>
  );
};

export {StatusBar};
