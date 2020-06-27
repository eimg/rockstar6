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
    Content,
    List,
    ListItem,
    Item as NativeItem,
    Input,
    Button,
    Text,
} from 'native-base';
import {
    StyleSheet,
    FlatList,
    TextInput,
    View,
    TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({

});

const Item = ({remove, toggle, item}) => {
    return (
        <ListItem icon>
            <Left>
                <TouchableOpacity onPress={() => {
                    toggle(item._id);
                }}>
                    {
                        item.status
                        ? <Ionicons name="ios-checkmark-circle" color="blue" size={32} />
                        : <Ionicons name="ios-help-circle-outline" color="green" size={32} />
                    }
                </TouchableOpacity>
            </Left>
            <Body>
                <Text>
                    {item.name} (${item.price})
                </Text>
            </Body>
            <Right>
                <TouchableOpacity onPress={() => {
                    remove(item._id);
                }}>
                    <Ionicons name="ios-trash" color="red" size={32} />
                </TouchableOpacity>
            </Right>
        </ListItem>
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

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
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
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Ionicons name="ios-list" color="white" size={32} />
                    </Button>
                </Left>
                <Body>
                    <Title>Native Base</Title>
                </Body>
                <Right>
                    <TouchableOpacity onPress={clear}>
                        <Ionicons name="ios-remove-circle-outline" color="white" size={32} />
                    </TouchableOpacity>
                </Right>
            </Header>
            <Content>
                <List>
                    {items.filter(i => i.status === 0).map(item => {
                        return <Item key={item._id} remove={remove} item={item} toggle={toggle} />
                    })}

                    <ListItem itemDivider style={{paddingTop: 20}}>
                        <Text>DONE</Text>
                    </ListItem>

                    {items.filter(i => i.status === 1).map(item => {
                        return <Item key={item._id} remove={remove} item={item} toggle={toggle} />
                    })}

                    <ListItem itemDivider style={{paddingTop: 20}}>
                        <Text>NEW TASK</Text>
                    </ListItem>
                </List>

                <View style={{padding:10}}>
                    <NativeItem regular>
                        <Input
                            placeholder="Enter Name"
                            onChangeText={text => setName(text)}
                            value={name}
                        />
                    </NativeItem>
                    <NativeItem regular>
                        <Input
                            placeholder="Enter Price"
                            onChangeText={text => setPrice(text)}
                            value={price}
                        />
                    </NativeItem>

                    <Button full onPress={add}>
                        <Ionicons name="ios-add" color="white" size={32} />
                        <Text>Add Task</Text>
                    </Button>
                </View>
            </Content>
        </Container>
    )
}

export default App;
