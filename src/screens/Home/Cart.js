// --------------- LIBRARIES ---------------
import { Text, View, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

// --------------- ASSETS ---------------
import { Colors, Images, Matrics } from "../../CommonConfig";
import Header from "./Components/Header";
import { removeItem, addQtyItem, removeQtyItem } from "../../Redux/Actions";

const Cart = ({ navigation }) => {
    // --------------- REDUCER STATE ---------------
    const { Common, Home } = useSelector((state) => state); // Get reducer state
    const dispatch = useDispatch(); // dispatch method to dispatch our actions to reducer and saga

    const [fourceload, setFourceLoad] = useState(false)


    const RemoveItem = (item, index) => {
        if (item.Quantity == 1) {
            if (item) {
                let CartObj = {
                    item,
                    cost: Number(item.price),
                    index
                }
                dispatch(removeItem.Request(CartObj))
                setFourceLoad(!fourceload)
            }
        }
        else {
            if (item) {
                let CartObj = {
                    item,
                    cost: Number(item.price),
                    index
                }
                dispatch(removeQtyItem.Request(CartObj))
                setFourceLoad(!fourceload)
            }
        }

    }

    const AddItemQty = (item, index) => {
        let CartObj = {
            item,
            cost: Number(item.price),
            index
        }
        dispatch(addQtyItem.Request(CartObj))
    }


    return (
        <View style={styles.container}>
            <Header leftIcon={Images.BACK} title={'Cart'} onPressLeftIcon={() => navigation.pop()} />
            <FlatList
                data={Home.cart ?? []}
                renderItem={({ item, index }) => (
                    <View style={styles.itemContainer}>
                        <Text numberOfLines={1} style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemPrice}>Price: ${item.price}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", flex: 0.5 }}>
                            <TouchableOpacity onPress={() => RemoveItem(item, index)}>
                                <Text style={styles.deleteButton}>Remove</Text>
                            </TouchableOpacity>
                            <Text style={styles.itemQuantity}>Quantity: {item.Quantity}</Text>
                            <TouchableOpacity onPress={() => AddItemQty(item, index)}>
                                <Text style={[styles.deleteButton, { color: Colors.BLACK, fontWeight: '700' }]}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                ListEmptyComponent={() => {
                    return (
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: Matrics.screenHeight - Matrics.vs(200) }}>
                            <Text>{'Cart is empty'}</Text>
                        </View>
                    )
                }}
                showsVerticalScrollIndicator={false}
                bounces={false}
                keyExtractor={(item) => item.id.toString()}
            />
            <Text style={styles.total}>Total: ${Home.total ?? 0}</Text>
            <TouchableOpacity disabled style={styles.placeOrderButton} onPress={() => handlePlaceOrder()}>
                <Text style={styles.placeOrderButtonText}>Place Order</Text>
            </TouchableOpacity>
            <SafeAreaView />
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        paddingHorizontal: Matrics.s(15)
    },
    itemContainer: {
        backgroundColor: '#f2f2f2',
        marginBottom: 12,
        padding: 12,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 14,
        marginTop: 8,
    },
    itemQuantity: {
        fontSize: 14,
        marginTop: 4,
    },
    deleteButton: {
        color: 'red',
        marginTop: 4,
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
    },
    placeOrderButton: {
        backgroundColor: Colors.BLACK,
        padding: 10,
        borderRadius: 10,
        marginTop: 16,
    },
    placeOrderButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
