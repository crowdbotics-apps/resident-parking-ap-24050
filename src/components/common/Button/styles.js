import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/styles';

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 20,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 16,
  },
  small: {
    padding: 12,
    borderRadius: 3,
    borderWidth: 0,
  },
  block: {
    width: '100%',
  },
  light: {
    borderColor: colors.blue,
    backgroundColor: colors.blue,
  },
  dark: {
    backgroundColor: colors.blue,
    borderColor: colors.blue,
  },
});

export default styles;
