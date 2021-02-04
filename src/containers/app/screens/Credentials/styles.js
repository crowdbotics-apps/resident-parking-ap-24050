import { StyleSheet } from 'react-native';

import { colors } from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
  },
  sectionContainer: {
    flex: 6,
  },
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 8,
  },
  addIcon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grey,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
  },
  inputText: {
    fontSize: 16,
    color: colors.darkGrey,
  },
  label: {
    color: colors.grey,
    fontSize: 16,
    marginTop: 16,
    marginBottom: 8,
  },
});
