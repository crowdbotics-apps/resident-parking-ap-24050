import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../utils';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  input: {
    paddingVertical: 4,
    marginVertical: 8,
    fontSize: 16,
    color: colors.grey,
    flex: 1,
  },
  inputText: {
    paddingVertical: 5,
    marginVertical: 10,
    marginLeft: 8,
    fontSize: 16,
    height: 40,
    color: colors.grey,
  },
  inputContainer: {
    paddingHorizontal: 20,
    width: width * 0.6,
    marginLeft: 22,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: colors.white,
    borderColor: colors.grey,
    borderWidth: 1,
  },
  icon: {
    marginTop: 2,
  },
});

export default styles;
