import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  DatePickerIOS,
  Picker,
  Modal,
  TouchableHighlight,
  TimePickerAndroid
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'Marcin',
      title: 'React vs Vue',
      vue: 0,
      react: 0,
      modalVisible: false,
      chosenDate: new Date()
    };

    this.setDate = this.setDate.bind(this);
    // this.showTimePicker = this.showTimePicker.bind(this)
  }


  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  componentWillMount () {
    setInterval(() => {
      this.setState({vue: this.state.vue + 1})
    }, 1000)
  }

  async showTimePicker () {
    // console.log(context.state);
    console.log(this.state);
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false, // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
      }
    } catch ({code, message}) {
      console.warn('Cannot open time picker', message);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.title}</Text>
        <Text>{this.state.react} : {this.state.vue}</Text>
        <Text>Username: {this.state.username}</Text>

        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />

        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {this.showTimePicker()}}>
          <Text>Show TimePicker</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
