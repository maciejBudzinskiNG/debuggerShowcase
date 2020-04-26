import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  TouchableOpacity,
} from 'react-native';

const spices = [
  {id: 1, animal: '🐶'},
  {id: 2, animal: '🐱'},
  {id: 3, animal: '🦊'},
  {id: 4, animal: '🐨'},
  {id: 5, animal: '🦁'},
  {id: 6, animal: '🐸'},
  {id: 7, animal: '🐧'},
  {id: 8, animal: '🐼'},
  {id: 9, animal: '🦅'},
  {id: 10, animal: '🦄'},
  {id: 11, animal: '🦂'},
];

const getRandomAnimal = () => {
  const randomNumber = Math.ceil(Math.random() * spices.length);
  const randomAnimal = spices[randomNumber];
  return randomAnimal;
};

const App = () => {
  const [animals, setAnimals] = useState([]);

  const addAnimal = () => {
    const newAnimal = getRandomAnimal();
    setAnimals(_animals => [..._animals, newAnimal]);
  };

  const removeAnimal = () => {
    setAnimals(_animals => _animals.slice(0, -1));
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.wrapper}>
        <Text style={styles.title}>🆉🅾🅾</Text>
        <View style={styles.animalsWrapper}>
          {animals.length === 0 && (
            <Text style={styles.helperText}>
              No animals here, press + add one
            </Text>
          )}
          {animals.length > 0 &&
            animals.map(({animal, id}) => (
              <Text key={Date.now()} style={styles.animal}>
                {animal}
              </Text>
            ))}
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={addAnimal}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={removeAnimal}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  animal: {
    fontSize: 60,
  },
  animalsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  buttonText: {
    paddingVertical: 16,
    textAlign: 'center',
    fontSize: 25,
    width: '75%',
    color: '#311E10',
    borderColor: '#311E10',
    borderWidth: 1,
    borderRadius: 10,
  },
  count: {
    fontSize: 40,
  },
  helperText: {
    fontSize: 25,
    color: '#DD6031',
    fontStyle: 'italic',
  },
  title: {
    fontSize: 100,
    color: '#DD6031',
  },
  wrapper: {
    backgroundColor: '#D9DD92',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default App;
