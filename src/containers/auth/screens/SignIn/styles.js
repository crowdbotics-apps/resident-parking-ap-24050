import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../../utils';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  screen: {
    minHeight: height * 0.9,
    flexGrow: 1,
    marginHorizontal: 20,
  },
  buttonsContainer: {
    marginHorizontal: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  image: {
    width: width * 0.6,
    height: 180,
    resizeMode: 'contain',
  },
  form: {
    paddingTop: 30,
    paddingHorizontal: 30,
    paddingBottom: 40,
    borderTopColor: colors.grey,
    borderTopWidth: 0.5,
  },
  headerText: {
    paddingTop: 28,
    paddingBottom: 28,
  },
  button: {
    borderWidth: 0,
    paddingVertical: 0,
    marginVertical: 0,
    paddingTop: 10,
    marginBottom: 20,
  },
  title: {
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: '500',
    fontStyle: 'italic',
    paddingTop: 24,
    paddingBottom: 10,
  },
  note: {
    color: colors.white,
    textTransform: 'uppercase',
  },
  subtitle: {
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: 10,
    textAlign: 'center',
    paddingTop: 30,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 6,
  },
  iconContainer: {
    paddingHorizontal: 6,
  },
  link: {
    color: colors.blue,
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 24,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  mainTitle: {
    fontSize: 38,
    textAlign: 'center',
    marginTop: 24,
    color: colors.darkGrey,
  },
  subTitle: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 18,
    color: colors.darkGrey,
  },
});
