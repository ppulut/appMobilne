// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React  from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';
import HomeScreen from './HomeScreen'


function Favorite({ navigation }) {
  return (
    <SafeAreaView style={{flex: 1}} name="Ulubione">
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
            Menu Screen
          </Text>
          <Button
            onPress={() => navigation.navigate('Home')}
            title="Back to Home"
          />
        
        </View>
      </View>
    </SafeAreaView>
    
  );
};

export default Favorite;