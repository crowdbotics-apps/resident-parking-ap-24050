import { StyleSheet } from 'react-native';

import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    color: colors.darkGrey,
    textAlign: 'center',
  },
  link: {
    color: colors.blue,
    alignSelf: 'center',
    marginTop: 8,
    textAlign: 'center',
    marginBottom: 24,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    color: colors.blue,
    marginHorizontal: 8,
  },
});
