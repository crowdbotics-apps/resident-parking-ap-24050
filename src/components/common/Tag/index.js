import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

function Tag({ title, style }) {
  if (!title) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.tag, style]}>
        {title || 'Unknown'}
      </Text>
    </View>
  );
}

export default React.memo(Tag);
