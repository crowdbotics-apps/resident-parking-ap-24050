import React from 'react';
import {
  Text, View, Dimensions, Image,
} from 'react-native';
import LabelValue from '../../common/LabelValue';

import { styles } from './styles';

const { width } = Dimensions.get('screen');

const CarCard = (props) => {
  const { item, isLast, isFirst } = props;

  return (
    <View style={{ width }}>
      <View style={styles.row}>
        <Text style={[styles.arrow, isFirst ? { opacity: 0.5 } : {}]}>{'<'}</Text>
        <Text style={styles.title}>
          {`Hello ${item}`}
        </Text>
        <Text style={[styles.arrow, isLast ? { opacity: 0.5 } : {}]}>{'>'}</Text>
      </View>

      <Text style={styles.link}>Edit Car Details</Text>

      <Image
        style={styles.image}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/49/2013-2016_Toyota_Corolla_%28ZRE172R%29_SX_sedan_%282018-09-17%29_01.jpg' }}
      />

      <LabelValue label="License Plate" value="AB535G" />
      <LabelValue label="Property" value="AB535G" />
      <LabelValue label="Parking space" value="AB535G" />
      <LabelValue label="Car color" value="AB535G" />
    </View>
  );
};

export default CarCard;
