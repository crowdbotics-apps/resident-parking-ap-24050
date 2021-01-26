import { StyleSheet } from 'react-native';

import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    marginRight: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  letter: {
    fontSize: 14,
    color: colors.darkGrey,
    width: 32,
    textAlign: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#DBD4D4',
  },
});
