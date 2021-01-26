import { StyleSheet } from 'react-native';

import { colors } from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
  },
  sectionContainer: {
    flex: 6,
  },
  title: {
    fontSize: 24,
    color: colors.darkGrey,
    marginTop: 24,
    marginHorizontal: 22,
  },
  list: {
    paddingVertical: 20,
    overflow: 'visible',
  },
  emptyText: {
    textAlign: 'center',
  },
  cTitle: {
    fontSize: 16,
    color: colors.darkGrey,
    marginHorizontal: 24,
    marginBottom: 18,
  },
  cText: {
    fontSize: 13,
    color: colors.darkGrey,
    marginHorizontal: 24,
    marginVertical: 6,
  },
  tags: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 1,
    marginHorizontal: 24,
  },
  cDivider: {
    marginLeft: 24,
    marginVertical: 24,
  },
  actionText: {
    fontSize: 13,
    color: colors.blue,
    textDecorationLine: 'underline',
    marginRight: 24,
    marginBottom: 18,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '100%',
  },
  addContainer: {
    flexDirection: 'row', alignItems: 'center', flex: 1, margin: 8,
  },
  addIcon: {
    width: 45, height: 45, resizeMode: 'contain', marginTop: 12,
  },
});
