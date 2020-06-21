import React, { useState, useEffect } from "react";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {
    Container,
    Header,
    Left,
    Right,
    Body,
    Title,
} from 'native-base';
import {
    StyleSheet,
    FlatList,
    Button,
    TextInput,
    View,
    Text,
    TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fef6e4',
        flex: 1,
    },
    appbar: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#8bd3dd',
        flexDirection: 'row',
    },
    title: {
        fontSize: 30,
        flexGrow: 1,
    },
    content: {
        margin: 10,
        backgroundColor: '#fff',
    },
    item: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#f582ae',
    },
    itemText: {
        marginLeft: 30,
        flexGrow: 1,
        fontSize: 20
    },
    input: {
        padding: 10,
        fontSize: 20,
        borderBottomWidth: 1,
        color: '#fff',
        backgroundColor: '#f582ae',
    }
});

const Item = ({remove, toggle, item}) => {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => {
                toggle(item._id);
            }}>
                {
                    item.status
                    ? <Ionicons name="ios-checkmark-circle" size={32} />
                    : <Ionicons name="ios-help-circle-outline" size={32} />
                }
            </TouchableOpacity>

            <Text style={styles.itemText}>
                {item.name} (${item.price})
            </Text>
            <TouchableOpacity onPress={() => {
                remove(item._id);
            }}>
                <Ionicons name="ios-trash" size={32} />
            </TouchableOpacity>
        </View>
    )
}

const api = "http://192.168.100.6:8000/tasks";

const App = props => {
    const [items, setItem] = useState([
        { _id: '1', name: 'Apple', price: 0.99, status: 0 },
        { _id: '2', name: 'Orange', price: 0.89, status: 1 },
        { _id: '3', name: 'Mango', price: 0.79, status: 0 },
        { _id: '4', name: 'Banana', price: 0.69, status: 1 },
    ]);

    useEffect(() => {
        (async function() {
            await Font.loadAsync({
                Roboto: require('native-base/Fonts/Roboto.ttf'),
                Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
                ...Ionicons.font,
            });

            setReady(true);
        })();

        fetch(api).then(res => res.json()).then(items => {
            setItem(items);
        });
    }, []);

    const [name, setName] = useState('Name');
    const [price, setPrice] = useState('Price');
    const [ready, setReady] = useState(false);

    const add = () => {
        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, price})
        }).then(res => res.json()).then(item => {
            setItem([ ...items, item ]);
        });
    }
    const remove = _id => {
        fetch(`${api}/${_id}`, { method: 'DELETE' });
        setItem(items.filter(i => i._id !== _id));
    }
    const toggle = _id => {
        fetch(`${api}/${_id}`, { method: 'PATCH' });
        setItem(items.map(i => {
            if(i._id === _id) i.status = +!i.status;
            return i;
        }));
    }
    const clear = () => {
        fetch(api, { method: 'DELETE' });
        setItem(items.filter(i => i.status === 0));
    }

    if (!ready) {
      return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            <Container>
                <Header>
                    <Body>
                        <Title>Native Base</Title>
                    </Body>
                    <Right>
                        <TouchableOpacity onPress={clear}>
                            <Ionicons name="ios-remove-circle-outline" size={32} />
                        </TouchableOpacity>
                    </Right>
                </Header>
            </Container>

            <View style={styles.content}>
                <FlatList
                    data={items.filter(i => i.status === 0)}
                    renderItem={({ item }) => (
                        <Item remove={remove} item={item} toggle={toggle} />
                    )}
                    keyExtractor={ i => i._id }
                />

                <FlatList
                    data={items.filter(i => i.status === 1)}
                    renderItem={({ item }) => (
                        <Item remove={remove} item={item} toggle={toggle} />
                    )}
                    keyExtractor={ i => i._id }
                />
            </View>
            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setName(text)}
                    value={name}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPrice(text)}
                    value={price}
                />
                <Button title="Add Task" onPress={add} />
            </View>
        </View>
    )
}

export default App;
