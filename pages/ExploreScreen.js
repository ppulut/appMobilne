// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React  from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';
import HomeScreen from './HomeScreen'


function Menu({ navigation }) {
  return (
    <SafeAreaView style={{flex: 1}} name="Menu">
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Explore Screen
          </Text>
          <Button
            onPress={() => navigation.navigate('Home')}
            title="Go to home"
          />
        
        </View>
      </View>
    </SafeAreaView>
    
  );
};

export default Menu;