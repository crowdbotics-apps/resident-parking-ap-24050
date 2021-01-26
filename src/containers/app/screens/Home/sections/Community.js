import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView, View, Text,
} from 'react-native';

import Header from '../../../../../components/shared/Header';
import { styles } from '../styles';
import Divider from '../../../../../components/shared/Divider';
import Tag from '../../../../../components/common/Tag';
import { getCommunity } from '../../../redux/actions';

const Community = (props) => {
  const { community } = props;

  useEffect(() => {
    props.getCommunity();
  }, []);

  return (
    <View style={styles.sectionContainer}>
      <Header title="Community Details" />

      <ScrollView>
        <Text style={styles.cTitle}>Community Details</Text>
        <View style={styles.tags}>
          <Tag title={community?.general_info?.name} />
          <Tag title={community?.general_info?.address} />
          <Tag title={community?.general_info?.description} />
        </View>

        <Divider style={styles.cDivider} />

        <View style={styles.titleRow}>
          <Text style={styles.cTitle}>Community Rules</Text>
          <Text onPress={() => props.onNavigate('rules')} style={styles.actionText}>View</Text>
        </View>

        {community?.rules?.map((r) => (
          <Text key={r} style={styles.cText}>{r}</Text>
        ))}

        <Divider style={styles.cDivider} />

        <Text style={styles.cTitle}>Property Admins</Text>
        {community?.property_admins?.map((item) => (
          <Text key={item.name} style={styles.cText}>{`${item.name} (${item.email})`}</Text>
        ))}

        <Divider style={styles.cDivider} />

        <Text style={styles.cTitle}>Property Residents</Text>
        {community?.residents?.map((item) => (
          <Text key={item} style={styles.cText}>{item}</Text>
        ))}

        <Divider style={styles.cDivider} />

        <Text style={styles.cTitle}>Property Guests</Text>
        {community?.guests?.map((item) => (
          <Text key={item} style={styles.cText}>{item}</Text>
        ))}

      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  community: state.App.community,
});

const mapDispatchToProps = {
  getCommunity,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Community);
