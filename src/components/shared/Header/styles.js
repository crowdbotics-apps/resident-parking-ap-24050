import { StyleSheet } from 'react-native';

import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
    paddingBottom: 80,
  },
  title: {
    fontSize: 24,
    color: colors.darkGrey,
    marginTop: 24,
    marginBottom: 8,
    marginHorizontal: 22,
  },
  actionText: {
    fontSize: 13,
    color: colors.blue,
    textDecorationLine: 'underline',
    marginRight: 24,
    marginTop: 8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '100%',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
