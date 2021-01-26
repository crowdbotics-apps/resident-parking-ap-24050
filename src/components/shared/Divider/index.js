import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

const Divider = ({ letter, style }) => (
  <View style={[styles.container, { marginLeft: letter ? 0 : 32 }, style]}>
    {letter ? (
      <Text style={styles.letter}>{letter}</Text>
    ) : null}
    <View style={styles.line} />
  </View>
);

export default Divider;
