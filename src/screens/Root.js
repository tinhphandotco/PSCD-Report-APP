import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

function CusText(props) {
  return <Text style={textStyles.text}>{props.children}</Text>;
}

const textStyles = StyleSheet.create({
  text: {
    fontSize: 33,
  },
});

const App: () => React$Node = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(prev => prev + 1);
    }, 3000);
  }, []);

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            <CusText>Hi React Native, My name is Tinh Phan</CusText>
            <CusText>Counter: {count}</CusText>
            <View>
              <Button style={styles.btn} title="-" />
              <Button style={styles.btn} title="+" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fefefe',
  },
});

export default App;
