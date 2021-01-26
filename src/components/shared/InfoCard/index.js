import React from 'react';
import {
  Text, Image, View,
} from 'react-native';

import Tag from '../../common/Tag';
import Divider from '../Divider';

import { styles } from './styles';

const InfoCard = (props) => {
  const {
    tags, title, avatar, sideText, actionText, onActionPress,
  } = props;

  return (
    <>
      <Divider />
      <View style={styles.container}>
        {avatar ? (
          <Image style={styles.avatar} source={{ uri: avatar }} />
        ) : null}

        <View style={{ flex: 1 }}>
          <View style={styles.titleRow}>
            <Text style={[styles.title, sideText || actionText ? { maxWidth: '60%' } : {}]}>{title}</Text>

            {sideText ? (
              <Text style={styles.sideText}>{sideText}</Text>
            ) : actionText ? (
              <Text onPress={onActionPress} style={styles.actionText}>{actionText}</Text>
            ) : null}
          </View>
          <View style={styles.tags}>
            {tags.map((t) => (
              <Tag key={t} title={t} />
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

export default InfoCard;
