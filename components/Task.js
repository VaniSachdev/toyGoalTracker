import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {


  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  }



  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>

      <TouchableOpacity onPress={handleToggle}>
      <View style={styles.checkBox}> 
        {isChecked? <Text style={styles.checkIcon}> ✅ </Text> :  <Text style={styles.checkBox}> 🎯  </Text> }
      </View>
    </TouchableOpacity>

        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <TouchableOpacity onPress={props.onDelete}>
        <View style={styles.delete}> 
          <Text style={styles.delete}> ❌ </Text> 
        </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#d7d7f5',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  checkIcon: {
    width: 24,
    height: 24,
    // backgroundColor: '#d7d7f5',
    borderRadius: 5,
    marginRight: 15,
    paddingTop: 2.5,
    // borderWidth: 1, 
    // borderColor: "#fff"
  },
  checkBox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  delete: {
    fontSize: 10
  }
});


export default Task;