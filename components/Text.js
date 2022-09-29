import { useState } from "react";
import {
  Text,
  View,
} from 'react-native';

export const Test = () => {

  const [items, updateItems] = useState([
    { name: "item 1", done: false },
    { name: "item 2", done: true },
    { name: "item 3", done: false }
  ]);

  return(
    <View>
      <h2>Todo list</h2>
      <ul>
        {items.map((item, idx) => {
          return (
            <li key={idx}>
              <span>{`${item.name} ${item.done} `}</span>
              <button
                onClick={() => {
                  updateItems((oldItems) => {
                    oldItems[idx].done = !oldItems[idx].done;
                    return oldItems;
                  });
                }}
              >
                change
              </button>
            </li>
          );
        })}
      </ul>
    </View>
  );
};
