import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedbackBase,
  useColorScheme,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';

function integer_to_roman(num, setRoma) {
  if (typeof num !== 'number') {
    return false;
  }

  var digits = String(+num).split(''),
    key = [
      '',
      'C',
      'CC',
      'CCC',
      'CD',
      'D',
      'DC',
      'DCC',
      'DCCC',
      'CM',
      '',
      'X',
      'XX',
      'XXX',
      'XL',
      'L',
      'LX',
      'LXX',
      'LXXX',
      'XC',
      '',
      'I',
      'II',
      'III',
      'IV',
      'V',
      'VI',
      'VII',
      'VIII',
      'IX',
    ],
    roman_num = '',
    i = 3;
  while (i--) {
    roman_num = (key[+digits.pop() + i * 10] || '') + roman_num;
  }
  var numeroRomano = Array(+digits.join('') + 1).join('M') + roman_num;
  setRoma(numeroRomano);
  return numeroRomano;
}

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const [roman, setRoma] = useState();

  const soma = Number(num1) + Number(num2);

  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Numero 1"
        onChangeText={number1 => setNum1(number1)}
        defaultValue={num1}
        value={num1}
      />
      <TextInput
        style={{height: 40}}
        placeholder="Numero 2"
        onChangeText={number2 => setNum2(number2)}
        defaultValue={num2}
        value={num2}
      />
      <Button
        onPress={() => integer_to_roman(soma, setRoma)}
        title="Somar"
        color="#841584"
        accessibilityLabel="Somar"
      />
      <Text style={{color: '#fff'}}>{roman}</Text>
    </View>
  );
};

export default App;
