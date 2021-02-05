import { Platform, StyleSheet } from 'react-native';

import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Platform.OS === 'ios' ? 110 : 100,
    maxHeight: 110,
    minHeight: 11,
    justifyContent: 'flex-end',
    flex: 1,
    alignSelf: 'flex-end',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingHorizontal: 14,
    paddingBottom: 12,
  },
  tabText: {
    fontWeight: '400',
    fontSize: 11,
    color: colors.darkGrey,
    marginTop: 2,
    width: 65,
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
