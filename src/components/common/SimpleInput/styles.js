import { StyleSheet } from 'react-native';

import { colors } from '../../../utils/styles';

const styles = StyleSheet.create({
  inputContainer: {
  },
  input: {
    color: colors.blue,
    fontSize: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 0.6,
    paddingVertical: 10,
    marginVertical: 3,
    paddingHorizontal: 20,
  },
});

export default styles;
