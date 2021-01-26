import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

import SearchInput from '../../common/SearchInput';
import { styles } from './styles';

const Header = ({
  title, searchPlaceholder, onSearch, onActionPress, actionText, rightContent, searchText, containerStyle, content,
}) => (
  <ImageBackground source={require('../../../assets/images/header.png')} resizeMode="contain" style={[styles.container, !searchPlaceholder ? { marginTop: -56 } : {}, containerStyle]}>
    {title ? (
      <View style={styles.titleRow}>
        <Text style={styles.title}>{title}</Text>
        {actionText ? (
          <Text onPress={onActionPress} style={styles.actionText}>{actionText}</Text>
        ) : null}
      </View>
    ) : null}
    {content}
    <View style={styles.searchRow}>
      {searchPlaceholder && (
        <SearchInput value={searchText} onChangeText={onSearch} placeholder={searchPlaceholder} />
      )}
      {rightContent}
    </View>
  </ImageBackground>
);

export default Header;
