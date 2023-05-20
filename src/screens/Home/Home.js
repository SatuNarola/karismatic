// --------------- LIBRARIES ---------------
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";

// --------------- ASSETS ---------------
import { HomeStyles as styles } from './Styles'

export default function Home() {
  // --------------- REDUCER STATE ---------------
  const { Common,Home } = useSelector((state) => state); // Get reducer state
  const dispatch = useDispatch(); // dispatch method to dispatch our actions to reducer and saga

  // --------------- STATES ---------------

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}
