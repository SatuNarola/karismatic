import { StyleSheet } from "react-native";
import { Colors, Constant, Images, Matrics, Scale } from "../../CommonConfig";

export const HomeStyles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    ProductCardContainer: {
        flex: 1 / 2,
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
        borderRadius: Matrics.vs(15)
    },
    ProductImg: {
        width: '100%', height: Matrics.screenWidth / 2,
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
    },
    AddToCart: {
        height: Matrics.vs(30),
        backgroundColor: Colors.BLACK,
        width: '100%',
        borderRadius: Matrics.vs(8),
        alignSelf: 'center',
        marginVertical: Matrics.vs(3),
        justifyContent: "center",
        alignItems: 'center'
    },
    BtnTextStyle: {
        fontWeight: 'bold',
        fontSize: Matrics.vs(12),
        color: Colors.WHITE
    },
    fl2: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: 'center'
    },
    fl6: {
        flex: 0.6,
        justifyContent: "center",
        alignItems: 'center'
    },
    HeaderContainer: {
        height: Matrics.vs(50),
        backgroundColor: Colors.WHITE,
        flexDirection: 'row'
    },
    HeaderText: {
        fontWeight: 'bold',
        fontSize: Matrics.vs(14),
        color: Colors.BLACK
    },
    HeaderIconStyle: {
        height: Matrics.vs(25),
        width: Matrics.vs(25),
        resizeMode: 'contain'
    }
})