import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  Text, View, FlatList, TouchableOpacity, Image,
} from 'react-native';

import Header from '../../../../../components/shared/Header';
import InfoCard from '../../../../../components/shared/InfoCard';
import { styles } from '../styles';
import { getGuests } from '../../../redux/actions';
import { colors } from '../../../../../utils';

const Guests = (props) => {
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    props.getGuests();
  }, []);

  const onSearch = (k) => {
    setKeyword(k);
    props.getGuests(k);
  };

  return (
    <View style={styles.sectionContainer}>
      <Header
        title="List of Guests"
        searchPlaceholder="Search Guests..."
        searchText={keyword}
        onSearch={onSearch}
        rightContent={(
          <TouchableOpacity onPress={() => props.navigation.push('AddGuest')} style={styles.addContainer}>
            <Image style={styles.addIcon} source={require('../../../../../assets/images/plus.png')} />
            <Text style={{ color: colors.darkGrey, marginTop: 12, marginLeft: 8 }}>Add new</Text>
          </TouchableOpacity>
        )}
      />

      <FlatList
        data={props.guests}
        keyExtractor={(item) => item.license_plate}
        ListEmptyComponent={<Text style={{ textAlign: 'center' }}>No guests found.</Text>}
        renderItem={({ item }) => (
          <InfoCard title={item.license_plate || 'Unknown'} tags={[item.name, item.date, item.car_model, item.car_color, item.description]} />
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  guests: state.App.guests,
});
const mapDispatchToProps = {
  getGuests,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Guests);
