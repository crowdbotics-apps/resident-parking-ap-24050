import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { colors } from '../../../utils/styles';

import styles from './styles';

function Checkbox({ isChecked }) {
  return (
    <View style={[styles.container, isChecked ? styles.filled : {}]}>
      {isChecked
        ? (
          <Icon name="check" size={20} color={colors.darkGrey} />
        ) : null}
    </View>
  );
}

export default React.memo(Checkbox);
