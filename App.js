import React, {useState} from 'react';
import { FlatList } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from "./components/Task"

export default function App() {
  // create state in functional component
  // first item (task) = name of state
  // second item (function) = to set state 
  const [goal, setGoal] = useState(); 
  const [allGoals, setGoals] = useState([])

 
  const handleAddTask = () => {
    Keyboard.dismiss(); 
  setGoals([goal, ...allGoals]);
    setGoal("");
  }


  const deleteTask = (index) => {
    let copyGoals = [...allGoals];
    copyGoals.splice(index, 1);
    setGoals(copyGoals);
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>💃🕺 My Weekly Goals: 💃🕺</Text>

        
        <View style={styles.items}>

          {/* {
            allGoals.map((item, index) => 
             <Task key = {index} text={item} onDelete={() => deleteTask(index)} /> )
          } */}

          <FlatList
            data={allGoals}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <Task key={index} text={item} onDelete={() => deleteTask(index)} />
            )}
            style={styles.items}
          />
        </View>


      </View>

      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>
        
        <TextInput style={styles.input} placeholder={'Write a goal'} value = {goal} onChangeText={text => setGoal(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf5',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3d3c3b",
    textAlign: "center",
  },
  items: {
    marginTop: 30,
    flexGrow: 1,
    marginBottom: 65,
    paddingBottom: 30,
  },
  writeTaskWrapper: {
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
