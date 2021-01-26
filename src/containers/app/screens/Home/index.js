import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, SafeAreaView } from 'react-native';

import { styles } from './styles';
import Tabs from '../../../../components/shared/Tabs';
import Cars from './sections/Cars';
import Guests from './sections/Guests';
import Community from './sections/Community';
import CommunityRules from './sections/CommunityRules';

const Home = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('cars');

  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'cars':
        return <Cars navigation={navigation} />;
      case 'guests':
        return <Guests />;
      case 'community':
        return <Community onNavigate={setActiveTab} />;
      case 'rules':
        return <CommunityRules onNavigate={setActiveTab} />;
      default:
        return <Cars />;
    }
  };

  return (
    <View style={styles.screen}>
      {renderActiveScreen()}

      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      <SafeAreaView />
    </View>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
