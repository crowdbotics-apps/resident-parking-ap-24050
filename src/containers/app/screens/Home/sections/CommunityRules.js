import React from 'react';
import { connect } from 'react-redux';
import {
  ScrollView, View, Text,
} from 'react-native';

import Header from '../../../../../components/shared/Header';
import { styles } from '../styles';

const CommunityRules = ({ onNavigate, community }) => (
  <View style={styles.sectionContainer}>
    <Header title="Community Rules" actionText="< Go Back" onActionPress={() => onNavigate('community')} />

    <ScrollView>
      <Text style={styles.cTitle}>Community Rules</Text>

      {community?.rules?.map((r) => (
        <Text key={r} style={styles.cText}>{r}</Text>
      ))}
    </ScrollView>
  </View>
);

const mapStateToProps = (state) => ({
  community: state.App.community,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommunityRules);
