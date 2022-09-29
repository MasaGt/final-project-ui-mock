import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  CheckBox,
} from 'react-native';
import { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Modal } from './Modal';

export const VineyardConfig = () => {

  const mockVinData = [
    {
      idVineyard:1,
      nameVineyard: "Kumeu",
    },
    {
      idVineyard:2,
      nameVineyard: "Hawkes Bay",
    },
  ];

  const mockNodeData = [
    {
      idNode: 1,
      nameNode: "Node_1(HortPlus)",
      coordinates: "somewhere",
      idVineyard: 1
    },
    {
      idNode: 2,
      nameNode: "Node_2(Engineering)",
      coordinates: "somewhere",
      idVineyard: 1
    },
    {
      idNode: 3,
      nameNode: "Node_3",
      coordinates: "somewhere",
      idVineyard: 1
    },
    {
      idNode: 1,
      nameNode: "Node_1",
      coordinates: "somewhere",
      idVineyard: 2
    },
    {
      idNode: 2,
      nameNode: "Node_2",
      coordinates: "somewhere",
      idVineyard: 2
    },
    {
      idNode: 3,
      nameNode: "Node_3",
      coordinates: "somewhere",
      idVineyard: 2
    },
    {
      idNode: 4,
      nameNode: "Node_4",
      coordinates: "somewhere",
      idVineyard: 2
    },
  ];

  const sensors = {
      temperature: false,
      rainfall: false,
      humidity: false,
      soilMoisture: false,
      windSpeed: false,
      windDrection: false,
    };

  //init process
  useEffect(() => {
    mockVinData.forEach((vinyardObj) => {
      vinyardObj.expand = false;
    });

    mockNodeData.forEach((nodeObj) => {
      nodeObj.expand = false;
    });
  },[]);

  //flag for vinyard config
  const [isVinyardShown, setIsVinyardShown] = useState(false);
  const [vinData, setVinData] = useState(mockVinData);
  const [nodeData, setNodeData] = useState(mockNodeData);

  //expand the node list when a item of vinyard List is pressed
  const showNode = (itemIndex) => {
    //update expand state
    vinData[itemIndex].expand = !vinData[itemIndex].expand;
    //create a new array of vinyard objects
    let newVinData = vinData.map((vinObj) => {
      return vinObj;
    });
    //update vinData
    setVinData(newVinData);
  };

  //expand the sensor list when a item of node List is pressed
  const showSensor = (nodeIndex) => {
    //update expand state
    nodeData[nodeIndex].expand = !nodeData[nodeIndex].expand;
    //create a new array of node objects
    let newNodeData = nodeData.map((nodeObj) => {
      return nodeObj;
    });
    //update nodeData
    setNodeData(newNodeData);
  };

  const showVinyard = () => {
    setIsVinyardShown((prev) => !prev);
  };

  const filterNode = (nodeArr, vinId) => {
    return (nodeArr.filter((nodeObj) => {
      return nodeObj.idVineyard == vinId;
    }));
  };

  return (
    <View style={styles.container}>
    {console.log("レンダリング")}
      <View style={styles.sectionHeader}> {/*Vinyard Config header*/}
        <Text style={styles.title}>
          Vineyard Configration
        </Text>
        <TouchableOpacity onPress={showVinyard} style={styles.button}>
          <Text style={styles.buttonText}>Configure Vineyards</Text>
        </TouchableOpacity>
      </View> {/*Vinyard Config header*/}

      {isVinyardShown && <View> {/*vinyard list*/}
        {vinData.map((vinyard, index) => (
          <View key={vinyard.idVineyard}> {/*vonyard row*/}
            <View style={styles.vinyardRow}>
              <TouchableOpacity onPress={() => {showNode(index)}}>
                <Text>{vinyard.nameVineyard}</Text>
              </TouchableOpacity>
              <MaterialIcons name="edit" size={24} color="black" />
            </View>
            {vinyard.expand && <View> {/*node list*/}
              {nodeData.map((node, index) => {
                if (vinyard.idVineyard == node.idVineyard) {
                  return (
                    <View style={styles.nodeRow} key={vinyard.idVineyard*10 + node.idNode}>
                      <TouchableOpacity onPress={() => {showSensor(index)}}>
                        <Text>{node.nameNode}</Text>
                      </TouchableOpacity>
                      {node.expand && Object.keys(sensors).map((key, index) => (
                        <View style={styles.sensorRow}>
                          <Text key={index}>{key}</Text>
                          <CheckBox style={styles.checkbox}/>
                        </View>
                      ))}
                    </View>
                  );
                }
              })}
              <Modal
                style={{zIndex: 1, position:'absolute', top:0, bottom:0, left:0, right:0}}
                nodeData={filterNode(nodeData, vinyard.idVineyard)}
              />
            </View>} {/*end of the node list*/}
          </View> /*end of the vin row*/
        ))}
      </View>} {/*end of the vinyard list*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: "lavender"
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: 'center',
  },
  title: {
    fontWeight: "bold",
    marginRight: 30,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "blue",
    overflow: "hidden"
  },
  buttonText:{
    color: "white",
  },
  vinyardRow: {
    flexDirection: "row",
    backgroundColor: "lightgray",
  },
  nodeRow: {
    backgroundColor: "lightblue",
  },
  sensorRow: {
    backgroundColor: "lightpink",
    alignItems: 'center',
  },
  addButton: {
    width: "auto",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "blue",
    overflow: "hidden"
  },
  nodeAddButton: {
    alignItems: 'center',
    width: 100,
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "blue",
    overflow: "hidden"
  },
});
