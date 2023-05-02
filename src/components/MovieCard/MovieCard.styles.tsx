import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../styles/colors';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

const { height, width } = Dimensions.get('window');
const w = (percent) => width * percent / 100;
const h = (percent) => height * percent / 100;

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: radius.smooth,
    margin: spacing.medium,
    backgroundColor: colors.secondary,
  },
  image: {
    alignSelf: 'center',
    width: w(46),
    height: h(46),
    resizeMode: 'cover',
    borderRadius: radius.smooth
  },
  inner_container: {
    margin: spacing.medium,
  },
  name: {
    color: colors.text,
    fontSize: 15,
    marginBottom: spacing.tiny,
  },
  genre_container: {
    flexDirection: 'row',
    marginVertical: spacing.small,
  },
  genre: {
    marginRight: spacing.tiny,
    color: colors.text,
    fontSize: 12,
    fontStyle: 'italic',
  },
  rate: {
    color: colors.text,
    marginVertical: spacing.tiny,
  },
  brief: {
    color: colors.text,
    fontStyle: 'italic',
  },
});