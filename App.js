import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, FlatList, ScrollView } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import RowWithTextAndButton from './RowWithTextAndButton'; 
import TrainConnectionSearch from './SearchingForConnections';
import ImageListViewWithLinks from './Listview'

const CustomStatusBar = (
   {
     backgroundColor,
     barStyle = "dark-content",
   }
 ) => { 
    
    const insets = useSafeAreaInsets();
 
    return (
      <View style={{ height: insets.top, backgroundColor }}>
         <StatusBar
           animated={true}
           backgroundColor={backgroundColor}
           barStyle={barStyle} />
      </View>
    );
 }

const App = () => {
  return (
   <SafeAreaProvider>
      <CustomStatusBar backgroundColor="#FABB00" />
    <ScrollView>
    <View style={styles.container}>
      <RowWithTextAndButton />
      <TrainConnectionSearch />
      <ImageListViewWithLinks />
    </View>
    </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;