import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const SwitchWithLabel = () => {
  return (
    <TouchableOpacity>
      <View
        style={{
          height: 44,
          width: 100,
          backgroundColor: '#c0c0c0',
          borderRadius: 25,
        }}>
        <View>
          <Text>EN</Text>
        </View>
        <View>
          <Text>ID</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CustomSwitch = ({
  selectionMode,
  roundCorner,
  option1,
  option2,
  selectionColor,
  onSelectSwitch,
}: {
  selectionMode: number;
  roundCorner: boolean;
  option1: string;
  option2: string;
  selectionColor: string;
  onSelectSwitch?: Function;
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);

  const updatedSwitchData = (val: number) => {
    setSelectionMode(val);
    if (onSelectSwitch) {
      onSelectSwitch(val);
    }
  };

  return (
    <View>
      <View
        style={{
          height: 44,
          width: 100,
          backgroundColor: 'white',
          borderRadius: getRoundCorner ? 25 : 0,
          borderWidth: 1,
          borderColor: selectionColor,
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 2,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 1 ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: getSelectionMode == 1 ? 'white' : selectionColor,
            }}>
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 2 ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: getSelectionMode == 2 ? 'white' : selectionColor,
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {CustomSwitch, SwitchWithLabel};
