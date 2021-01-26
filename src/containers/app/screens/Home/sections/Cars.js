import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  View, FlatList, Text, ImageBackground, Image,
} from 'react-native';

import Header from '../../../../../components/shared/Header';
import { styles } from '../styles';
import { getCars } from '../../../redux/actions';
import CarCard from '../../../../../components/shared/CarCard';

const data = [1, 2, 3];
const Cars = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevPosition, setPrevPosition] = useState(0);

  useEffect(() => {
    // props.getCars();
  }, []);

  const onScrollEnd = (e) => {
    const pos = e.nativeEvent.contentOffset.x;
    const newInitialIndex = prevPosition < pos ? activeIndex + 1 : activeIndex - 1;
    const newIndex = newInitialIndex < 0 ? 0 : newInitialIndex >= data.length - 1 ? data.length - 1 : newInitialIndex;

    setActiveIndex(newIndex);
    setPrevPosition(pos);
  };

  return (
    <View style={styles.sectionContainer}>
      <ImageBackground resizeMode="contain" style={{ width: '100%', height: 150 }} source={require('../../../../../assets/images/profile_cover.png')} />

      <Text style={styles.profileName}>Profile name</Text>
      <Text style={styles.profileSubtitle}>Resident</Text>

      <Header
        content={(
          <View style={styles.row}>
            <View style={styles.iconsRow}>
              <Image style={{ width: 30, height: 30, marginBottom: 12 }} source={require('../../../../../assets/icons/pencil.png')} />
              <Text style={styles.profileText}>Credentials</Text>
            </View>
            <View style={styles.iconsRow}>
              <Image style={{ width: 35, height: 35, marginBottom: 8 }} source={require('../../../../../assets/icons/plus.png')} />
              <Text style={styles.profileText}>Add car</Text>
            </View>
          </View>
        )}
        containerStyle={{ marginTop: -20 }}
      />

      <FlatList
        horizontal
        pagingEnabled
        onScrollEndDrag={onScrollEnd}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.license_plate}
        ListEmptyComponent={<Text style={{ textAlign: 'center' }}>No cars found.</Text>}
        renderItem={({ item, index }) => (
          <CarCard isFirst={index === 0} isLast={index === data.length - 1} item={item} />
        )}
      />

      <Text style={styles.pagination}>{`${activeIndex + 1} of ${data.length}`}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  cars: state.App.cars,
});

const mapDispatchToProps = {
  getCars,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cars);
