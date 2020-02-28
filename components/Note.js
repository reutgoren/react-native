import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import { Icon } from 'react-native-vector-icons';

export default class Note extends React.Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.note}>
               
                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>

                <TouchableOpacity style={styles.noteDelete} onPress={this.props.deleteMethod}>
                    <Text style={styles.noteDeleteText}>Delete</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111',
        height: 45,
        width: 65,
        borderRadius: 20,
        padding: 10,
        top: 15,
        bottom: 10,
        right: 10,
        
    },
    noteDeleteText: {
        color: 'white',
    }
});