import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import {
  View, FlatList, Text, ImageBackground, Image, TouchableOpacity,
} from 'react-native';

import Header from '../../../../../components/shared/Header';
import { getCars, getProfile } from '../../../redux/actions';
import CarCard from '../../../../../components/shared/CarCard';
import { styles } from '../styles';

const Cars = (props) => {
  const { navigation } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevPosition, setPrevPosition] = useState(0);
  const listRef = useRef();

  useEffect(() => {
    props.getCars();
    props.getProfile();
  }, []);

  const onScrollEnd = (e) => {
    const pos = e.nativeEvent.contentOffset.x;
    const newInitialIndex = prevPosition < pos ? activeIndex + 1 : activeIndex - 1;
    const newIndex = newInitialIndex < 0 ? 0 : newInitialIndex >= props.cars.length - 1 ? props.cars.length - 1 : newInitialIndex;

    setActiveIndex(newIndex);
    setPrevPosition(pos);
  };

  const onNext = () => {
    const newIndex = activeIndex < props.cars.length - 1 ? activeIndex + 1 : activeIndex;
    setActiveIndex(newIndex);
    listRef?.current?.scrollToIndex({ index: newIndex });
  };

  const onPrev = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : activeIndex;
    setActiveIndex(newIndex);
    listRef?.current?.scrollToIndex({ index: newIndex });
  };

  return (
    <View style={styles.sectionContainer}>
      <ImageBackground resizeMode="contain" style={{ width: '100%', height: 150 }} source={require('../../../../../assets/images/profile_cover.png')} />

      <Text style={styles.profileName}>{props.profile?.full_name}</Text>
      <Text style={styles.profileSubtitle}>Resident</Text>

      <Header
        content={(
          <View style={styles.row}>
            <TouchableOpacity onPress={() => navigation.push('Credentials')} style={styles.iconsRow}>
              <Image style={{ width: 30, height: 30, marginBottom: 12 }} source={require('../../../../../assets/icons/pencil.png')} />
              <Text style={styles.profileText}>Credentials</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('AddCar')} style={styles.iconsRow}>
              <Image style={{ width: 35, height: 35, marginBottom: 8 }} source={require('../../../../../assets/icons/plus.png')} />
              <Text style={styles.profileText}>Add car</Text>
            </TouchableOpacity>
          </View>
        )}
        containerStyle={{ marginTop: -20 }}
      />

      <FlatList
        horizontal
        pagingEnabled
        ref={listRef}
        onScrollEndDrag={onScrollEnd}
        showsHorizontalScrollIndicator={false}
        data={props.cars}
        keyExtractor={(item) => item.license_plate}
        ListEmptyComponent={<Text style={{ textAlign: 'center', flex: 1 }}>No cars found.</Text>}
        renderItem={({ item, index }) => (
          <CarCard
            isFirst={index === 0}
            isLast={index === props.cars.length - 1}
            onNext={onNext}
            onPrev={onPrev}
            item={item}
            onEdit={() => navigation.push('AddCar', { carData: item })}
          />
        )}
      />

      <Text style={styles.pagination}>{`${activeIndex + 1} of ${props.cars.length}`}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  cars: state.App.cars,
  profile: state.App.profile,
});

const mapDispatchToProps = {
  getCars,
  getProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cars);
