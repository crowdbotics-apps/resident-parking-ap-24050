import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Text, View, FlatList } from 'react-native';

import Header from '../../../../../components/shared/Header';
import InfoCard from '../../../../../components/shared/InfoCard';
import { styles } from '../styles';
import { getGuests } from '../../../redux/actions';

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
      <Header title="List of Guests" searchText={keyword} onSearch={onSearch} searchPlaceholder="Search Guests..." />

      <FlatList
        data={props.guests}
        keyExtractor={(item) => item.license_plate}
        ListEmptyComponent={<Text style={{ textAlign: 'center' }}>No guests found.</Text>}
        renderItem={({ item }) => (
          <InfoCard title={item.license_plate} tags={[item.name, item.resident?.name, item.car_model, item.car_color, item.description]} />
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
