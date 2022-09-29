import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Checkbox,
} from 'react-native';
import NestedListView, {NestedRow} from 'react-native-nested-listview'

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
    nameNode: "Node_1",
    coordinates: "somewhere",
    idVineyard: 1
  },
  {
    idNode: 2,
    nameNode: "Node_2",
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
    idNode: 4,
    nameNode: "Node_4",
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
];

const mockSensorData = {
    temperature: false,
    rainfall: false,
    humidity: false,
    soilMoisture: false,
    windSpeed: false,
    windDrection: false,
  };

export const Sample = () => {

  const data = [{name: 'Node 1', items: [{name: 'Node 1.1'}, {name: 'Node 1.2'}]}]

  return (
    <View>
      <NestedListView
      data={data}
      getChildrenName={(node) => 'items'}
      onNodePressed={(node) => alert('Selected node')}
      renderNode={(node, level, isLastLevel) => (
        <NestedRow
        level={level}
        >
        <Text>{node.name}</Text>
        </NestedRow>
      )}
      />
    </View>
  );
};
