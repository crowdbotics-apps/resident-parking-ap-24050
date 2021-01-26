import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../../utils';

const { width } = Dimensions.get('window');


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: colors.black,
    resizeMode: 'cover',
  },
  text: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 16,
    letterSpacing: 0.78,
    marginBottom: 30,
  },
  image: {
    width: width * 0.9,
    height: 220,
    resizeMode: 'contain',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerText: {
    color: colors.white,
    fontSize: 13,
  },
});
