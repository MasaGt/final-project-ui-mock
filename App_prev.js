import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Header } from "./components/Header";
import { useEffect, useState } from "react";

export default function App() {

  const[users, setUsers] = useState([]);
  useEffect(() => {
    const getUser = async() => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      console.log(data);
      setUsers(data);
    };
    getUser();
  }, []);

  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Blue', onPress: () => this.changeBGColor('#009')},
        {text: 'Red', onPress: () => this.changeBGColor('#900'), style: 'cancel'},
        {text: 'Green', onPress: () => this.changeBGColor('#090')},
      ],
      { cancelable: false }
    )
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={Alert.alert("hi")}
    >
      <View style={styles.item}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="ユーザー一覧"/>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={()=>(
          <View
            style={{backgroundColor:"lightgray", height:1}}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: "red",
    fontSize: "30px",
  },
  item: {
    // borderWidth:1,
    // backgroundColor: "lightgray",
    backgroundColor: '#88cb7f',
    padding: 40
  }
});
