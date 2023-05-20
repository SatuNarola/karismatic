import { StyleSheet, Text, View, FlatList, Image, Button, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HomeStyles as styles } from '../Styles';
import { Matrics } from '../../../CommonConfig';
export default function Header({ navigation, title, leftIcon, rightIcon, onPressRightIcon, onPressLeftIcon }) {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.HeaderContainer, { marginTop: insets.top }]}>
            <TouchableOpacity style={styles.fl2} activeOpacity={0.8} onPress={onPressLeftIcon}>
                {
                    leftIcon ? (
                        <Image source={leftIcon} style={[styles.HeaderIconStyle, { alignSelf: "flex-start" }]} />
                    ) : null
                }
            </TouchableOpacity>
            <View style={styles.fl6}>
                <Text numberOfLines={1} style={styles.HeaderText}>{title ?? ''}</Text>
            </View>
            <TouchableOpacity style={styles.fl2} activeOpacity={0.8} onPress={onPressRightIcon}>
                {
                    rightIcon ? (
                        <Image source={rightIcon} style={styles.HeaderIconStyle} />
                    ) : null
                }
            </TouchableOpacity>
        </View>
    )
}
