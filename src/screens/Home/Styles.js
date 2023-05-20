import { StyleSheet } from "react-native";
import { Colors, Constant, Images, Matrics, Scale } from "../../CommonConfig";

export const HomeStyles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    ProductCardContainer: {
        flex: 1 / 2, height: Matrics.screenHeight / 3,
        margin: Matrics.s(10), backgroundColor: Colors.WHITE,
        padding: Matrics.vs(5),
        shadowColor: Colors.BLACK,
        shadowOffset: {
            width: Matrics.s(0),
            height: Matrics.vs(1),
        },
        shadowOpacity: 0.2,
        shadowRadius: Matrics.mvs(5),
        elevation: 4,
        borderRadius: Matrics.vs(20)
    },
    ProductImg: {
        width: '100%', height: '70%',
        resizeMode: 'cover', borderRadius: Matrics.vs(20)
    },
    LikeContainer: {
        alignItems: 'center', justifyContent: 'center',
        height: Matrics.vs(30), width: Matrics.vs(30),
        backgroundColor: Colors.OVERLAY_DARK_30, position: 'absolute',
        top: Matrics.vs(10), right: Matrics.vs(10), borderRadius: Matrics.vs(10)
    },
    LikeImg: {
        height: Matrics.vs(20), width: Matrics.vs(20),
        tintColor: Colors.WHITE
    },
    BrandTextStyle: {
        fontWeight: 'bold',
        fontSize: Matrics.vs(11),
        color: Colors.GRAY,
        marginBottom: Matrics.vs(5)
    },
    ProductNameStyle: {
        fontWeight: 'bold',
        fontSize: Matrics.vs(12),
        color: Colors.BLACK,
        marginBottom: Matrics.vs(5)
    }

})