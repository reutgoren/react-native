import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import Note from './Note';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteArr: [],
            noteText: '',
        }
    }
    render() {

        let notes = this.state.noteArr.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
            deleteMethod={() => this.deleteNote(key)} />
        });

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>My Notes</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(noteText) => this.setState({ noteText })}
                        value={this.state.noteText}
                        placeholder='type your note here...'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>

                </View>

                <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>

            </View>
        );
    }
    addNote() {
        //  alert('test');
        if (this.state.noteText) {
            var d = new Date();
            this.state.noteArr.push({
                'date': d.getDate()  + 
                "/" + (d.getMonth() + 1) + 
                "/" +d.getFullYear(),
                'note': this.state.noteText
            
            });

            this.setState({ noteArr: this.state.noteArr })
            this.setState({ noteText: '' });
        }
        else{
            alert('please type something');
        }
    }

    deleteNote(key){
        this.state.noteArr.splice(key,1);
        this.setState({noteArr: this.state.noteArr})
    }




}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        paddingLeft: 26,
        paddingRight: 26,
        paddingTop:26,
        paddingBottom:15,
        marginTop:25
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 10,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#000',
        padding: 20,
        backgroundColor: 'grey',
        fontSize:20,
        borderTopWidth: 2,
        borderTopColor: '#ededed',
        height:80,        
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        left: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,

    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
});