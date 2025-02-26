import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Card, Surface, Title } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    surfaceStyle: {
        elevation: 4,
        minWidth: 150,
        width: '100%',
        maxWidth: 200,
        justifyContent: 'center',
        alignItems: 'center'
    }
})





const ItemsCounter = ({ itemList, itemCounts }) => {


    return (
        <View style={styles.container}>
            <Title>Item Data</Title>

            <Surface
                style={styles.surfaceStyle}
            >

                {
                    Object.keys(itemCounts).map((itemName, index) => {
                        return <Text key={"counter_" + itemName + index}> {`${itemName}: ${itemCounts[itemName]}`
                        }</Text>
                    })
                }
            </Surface>
        </View>
    )
}

export default ItemsCounter