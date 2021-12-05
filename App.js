import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View ,FlatList} from 'react-native';
//import {data} from './data';
import ItemBox from './src/components/ItemBox'
const data = [
  {id: '1', name: 'A'},
  {id: '2', name: 'B'},
  {id: '3', name: 'C'},
  {id: '4', name: 'D'},
  {id: '5', name: 'E'},
  {id: '6', name: 'F'},
  {id: '7', name: 'G'},
  {id: '8', name: 'H'},
  {id: '9', name: 'I'},
  {id: '10', name: 'J'},
  {id: '11', name: 'K'},
  {id: '12', name: 'L'},
  {id: '13', name: 'M'},
  {id: '14', name: 'N'},
  {id: '15', name: 'O'},
  {id: '16', name: 'P'},
  {id: '17', name: 'Q'},
  {id: '18', name: 'R'},
  {id: '19', name: 'S'},
  {id: '20', name: 'T'},
  {id: '21', name: 'U'},
  {id: '22', name: 'V'},
  {id: '23', name: 'W'},
  {id: '24', name: 'X'},
  {id: '25', name: 'Y'},
  {id: '26', name: 'Z'},
];
export default function App() {
 
  const [lists, setlists] = useState(data);
  const deleteItem=(index)=>{
    const arr =[...lists];
    arr.splice(index,1);
    setlists(arr);
  }
  console.log(lists);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
      data={lists}
      renderItem={({item,index}) => {
        return <ItemBox data={item} handelDelete={()=>deleteItem(index)}/>
      }}
      ItemSeparatorComponent={()=>{
        return <View style={{height:1,backgroundColor:'black'}}></View>
      }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? 25 : 0
   
  },
});
