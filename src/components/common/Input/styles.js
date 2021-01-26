import { StyleSheet } from 'react-native';

import { colors } from '../../../utils';

const styles = StyleSheet.create({
  input: {
    paddingVertical: 5,
    width: '100%',
    marginVertical: 10,
    fontSize: 17,
    color: colors.darkGrey,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  inputContainer: {
    width: '100%',
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    top: 16,
    right: 0,
    width: 30,
    height: 30,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  validationIconContainer: {
    position: 'absolute',
    top: 22,
    right: 15,
    width: 20,
    height: 20,
  },
  validationIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  label: {
    color: colors.grey,
    fontSize: 16,
    marginTop: 24,
  },
});

export default styles;
