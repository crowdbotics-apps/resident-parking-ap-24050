import React from 'react';
import {
  TouchableOpacity,
  Text, View, Dimensions, Image,
} from 'react-native';

import LabelValue from '../../common/LabelValue';

import { styles } from './styles';

const { width } = Dimensions.get('screen');

const CarCard = (props) => {
  const {
    item, isLast, isFirst, onNext, onPrev,
  } = props;

  return (
    <View style={{ width }}>
      <View style={styles.row}>
        <TouchableOpacity onPress={onPrev} style={{ padding: 8 }}>
          <Text style={[styles.arrow, isFirst ? { opacity: 0.5 } : {}]}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>
          {item?.car_model}
        </Text>
        <TouchableOpacity onPress={onNext} style={{ padding: 8 }}>
          <Text style={[styles.arrow, isLast ? { opacity: 0.5 } : {}]}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.link}>Edit Car Details</Text>

      <Image
        style={styles.image}
        source={{ uri: item?.image }}
      />

      <LabelValue label="License Plate" value={item?.license_plate} textTransform="uppercase" />
      <LabelValue label="Property" value={item?.property} />
      <LabelValue label="Parking space" value={item?.parking_space} />
      <LabelValue label="Car color" value={item?.car_color} />
    </View>
  );
};

export default CarCard;
