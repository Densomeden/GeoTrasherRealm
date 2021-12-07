import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { deleteSessionById } from '../realmSchemas';

const styles = StyleSheet.create({
    sessionButton: {
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        color: 'black',
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    selected: {
        backgroundColor: 'skyblue'
    }
})

const SessionButton = ({ session, deleteSessionPrompt }) => {
    const [showDetails, setShowDetails] = useState(false);



    const toggleShowDetails = () => {
        setShowDetails(!showDetails);
    }
    return (
        <View>
            <TouchableOpacity style={showDetails ? { ...styles.sessionButton, ...styles.selected } : styles.sessionButton} onPress={toggleShowDetails}>
                <Text>{session.session_name}</Text>
                <Text style={{ color: 'red' }} onPress={() => deleteSessionPrompt(session)}>Delete</Text>
            </TouchableOpacity>
            {showDetails ? (
                <View>
                    {session.items.map((item, index) => (
                        <Text key={`${item.name}${index}`}>{item.name}</Text>
                    )

                    )}
                </View>
            )
                : null
            }
        </View>
    )
}

export default SessionButton;