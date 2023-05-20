// --------------- LIBRARIES ---------------
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";
import NetInfo from '@react-native-community/netinfo';

// --------------- ASSETS ---------------
import { getNetwork } from "./Redux/Actions";

// --------------- HOME SCREENS ---------------
import Home from "./screens/Home/Home";
import Description from "./screens/Home/Description";


const Stack = createNativeStackNavigator();

// --------------- ROUTES ---------------
const Routes = () => {
    // --------------- REDUCER STATE ---------------
    const { Common } = useSelector((state) => state); // Get reducer state
    const dispatch = useDispatch(); // dispatch method to dispatch our actions to reducer and saga

    // --------------- LIFECYCLE ---------------
    React.useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            dispatch(getNetwork.Request(state.isConnected));
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} options={{}} />
                <Stack.Screen name="Description" component={Description} options={{}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;