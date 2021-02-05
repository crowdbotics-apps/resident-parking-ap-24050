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
    justifyContent: 'center',
    margin: 16,
  },
  addIcon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
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
  cancelButton: {
    flex: 1,
    marginRight: 8,
    backgroundColor: '#E1E1E1',
  },
  saveButton: {
    flex: 1,
    marginLeft: 8,
  },
  label: {
    color: colors.grey,
    fontSize: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  photoInfo: {
    color: colors.darkGrey,
    fontSize: 11,
    marginTop: 24,
  },
  images: {
    padding: 20,
  },
  image: {
    width: 120,
    height: 100,
    marginTop: 20,
    resizeMode: 'cover',
  },
  uploadContainer: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 5,
    marginTop: 20,
  },
  cross: {
    position: 'absolute',
    bottom: 95,
    left: 115,
  },
});
