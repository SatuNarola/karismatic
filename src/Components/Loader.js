// --------------- LIBRARIES ---------------
import React from 'react';
import { Modal, View, StyleSheet, Text, ActivityIndicator } from 'react-native';

// --------------- ASSETS ---------------
import { Colors, Matrics } from '../CommonConfig';

const Loader = ({ visible, onClose, label }) => {
    // --------------- RENDERER ---------------    
    return (
        <Modal visible={visible} transparent>
            <View style={[styles.container, styles.backdrop,]}>
                <View
                    style={[styles.card]}
                >
                    <ActivityIndicator
                        size={'large'}
                        color={Colors.BLACK}
                    />
                    <Text style={styles.label}>
                        {label ?? 'Loading..'}
                    </Text>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backdrop: {
        backgroundColor: Colors.OVERLAY_DARK_40,
        ...StyleSheet.absoluteFillObject,
    },
    card: {
        height: Matrics.mvs(55),
        paddingHorizontal: Matrics.s(20),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        borderRadius: Matrics.mvs(12),
        flexDirection: 'row',
        maxWidth: '90%',
    },
    label: {
        fontSize: Matrics.mvs(16),
        color: Colors.BLACK,
        marginLeft: Matrics.s(12),
    },
});

export default Loader;