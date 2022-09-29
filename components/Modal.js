import { View, Button } from 'react-native';
import {
  Provider,
  Text,
  ListItem,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
} from "@react-native-material/core";
import {useState,useEffect} from 'react';

export const Modal = ({nodeData}) => {

  const [open, setOpen] = useState(false);

  useEffect(() => {
  },[]);


  return (
    <Provider>
      <View>
        <Button
          title="Add Node"
          style={{ margin: 16 }}
          onPress={() => setOpen(true)}
        />
        <Dialog
          style={{zIndex: 10,
            elevation: 10}}
            visible={open}
            onDismiss={() => setOpen(false)}>
          <DialogHeader title="Add Node" />
          <DialogContent>
            {nodeData.map((nodeObj, index) => {
              return (<ListItem
                        title={nodeObj.nameNode}
                        key={index}
                        onPress={() => setOpen(false)}
                      />)
            })}
          </DialogContent>
        <DialogActions>
          <Button
            title="Cancel"
            compact
            variant="text"
            onPress={() => setOpen(false)}
          />
        </DialogActions>
      </Dialog>
    </View>
  </Provider>
  );
}
