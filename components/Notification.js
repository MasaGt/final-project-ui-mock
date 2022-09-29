import {
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  Picker,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';

export const Notification = () => {

  const [toggleOn, setToggleOn] = useState(false);



  const onPress = () => {
    console.log("Apply Changes");
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Notification</Text>
        <Switch value={toggleOn} onValueChange={() => setToggleOn(!toggleOn)}/>
      </View>

      {toggleOn && <View>
        <View>
          <Text>Threshold</Text>
        </View>

        <View>
          <View style={styles.row}>
            <Text style={styles.lable}>Temperature</Text>
            <Text>below</Text>
            <TextInput style={styles.inputBox}></TextInput>
            <Text>℃</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.lable}>Time</Text>
            <Picker>
              <Picker.Item label="1 hour" value={1} />
              <Picker.Item label="2 hours" value={2} />
              <Picker.Item label="3 hours" value={3} />
            </Picker>
            <Text>Before</Text>
          </View>

          <TouchableOpacity
            onPress={onPress}
            style={styles.applyButton}
          >
            <Text style={styles.buttonText}>Apply Changes</Text>
          </TouchableOpacity>
        </View>
      </View>}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightyellow",
  },
  row: {
    flexDirection: "row",
    alignItems: 'center',
  },
  title: {
    fontWeight: "bold",
    marginRight: 30,
  },
  button: {
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "blue",
    overflow: "hidden"
  },
  buttonText:{
    color: "white",
  },
  applyButton: {
    alignItems: 'center',
    width: 150,
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "blue",
    overflow: "hidden"
  },
  inputBox: {
    width:150,
    borderWidth:1
  },
  lable: {
    width:150,
  }
});
