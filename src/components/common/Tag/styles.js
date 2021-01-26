import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../utils/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    minWidth: 80,
    maxWidth: width - 48,
    alignSelf: 'flex-start',
    borderRadius: 12,
    backgroundColor: colors.white,
  },
  tag: {
    fontSize: 12,
    color: colors.darkGrey,
    letterSpacing: 0.78,
    textAlign: 'center',
    textTransform: 'capitalize',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
});

export default styles;
