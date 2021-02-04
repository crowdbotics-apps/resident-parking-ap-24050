import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

function LabelValue(props) {
  const { label, value, textTransform = 'capitalize' } = props;

  if (!value) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{`${label}: `}</Text>
      <Text style={[styles.value, { textTransform }]}>{value}</Text>
    </View>
  );
}

export default React.memo(LabelValue);
