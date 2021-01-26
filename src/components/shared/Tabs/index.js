import React from 'react';
import {
  ImageBackground, Text, Image, View, TouchableOpacity,
} from 'react-native';

import { styles } from './styles';

const TabItem = ({
  title, icon, smallIcon, onPress, isActive,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.tabContainer}>
    <Image resizeMode="contain" source={icon} style={smallIcon ? { width: 28, height: 28 } : { width: 24, height: 24 }} />
    <Text style={[styles.tabText, isActive ? { fontWeight: 'bold' } : {}]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const Tabs = (props) => {
  const { onTabChange, activeTab } = props;

  const tabs = [
    {
      key: 'cars',
      title: 'Your Cars',
      icon: require('../../../assets/images/cars.png'),
    },
    {
      key: 'guests',
      title: 'Guests',
      icon: require('../../../assets/images/guests.png'),
    },
    {
      key: 'community',
      title: 'Community',
      icon: require('../../../assets/images/property.png'),
    },
  ];

  return (
    <ImageBackground
      source={require('../../../assets/images/bottom_tab.png')}
      resizeMode="contain"
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        {tabs.map((t) => (
          <TabItem
            key={t.key}
            isActive={activeTab === t.key}
            onPress={() => onTabChange(t.key)}
            smallIcon={t.key === 'cars'}
            title={t.title}
            icon={t.icon}
          />
        ))}
      </View>
    </ImageBackground>
  );
};

export default Tabs;
