import { StyleSheet } from 'react-native';

import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: 24,
    marginLeft: 32,
    marginBottom: 24,
    marginTop: 12,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#F4F4F4',
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    color: colors.darkGrey,
    marginBottom: 18,
    marginRight: 10,
  },
  sideText: {
    fontSize: 13,
    color: colors.blue,
    marginBottom: 18,
    maxWidth: '40%',
  },
  actionText: {
    fontSize: 13,
    color: colors.blue,
    textDecorationLine: 'underline',
    marginBottom: 18,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '100%',
    marginTop: 12,
  },
  tags: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 1,
  },
});
