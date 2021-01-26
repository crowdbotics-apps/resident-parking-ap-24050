import { StyleSheet } from 'react-native';

import { colors } from '../../../utils/styles';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 100,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 11,
    color: colors.grey,
  },
  value: {
    fontSize: 11,
    color: colors.darkGrey,
  },
});

export default styles;
