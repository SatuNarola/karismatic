// --------------- LIBRARIES ---------------
import { StyleSheet, Text, View, FlatList, Image, Button, StatusBar, TouchableOpacity, ActivityIndicator, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// --------------- ASSETS ---------------
import { HomeStyles as styles } from './Styles'
import { Colors, Constant, Matrics, Images } from '../../CommonConfig';
import { getProducts, addToCart } from '../../Redux/Actions';
import { Loader } from '../../Components';
import Header from './Components/Header';

const itemsPerPage = 8;

// --------------- FUNCTION DECLARATION ---------------
export default function Home({ navigation }) {
  // --------------- REDUCER STATE ---------------
  const { Common, Home } = useSelector((state) => state); // Get reducer state
  const dispatch = useDispatch(); // dispatch method to dispatch our actions to reducer and saga

  // --------------- STATE ---------------
  const [isLoading, setLoading] = useState(false)
  const [loadmore, setLoadmore] = useState(false)
  const [fourceload, setFourceLoad] = useState(false)

  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [visibleItemCount, setVisibleItemCount] = useState(itemsPerPage);
  const insets = useSafeAreaInsets();


  // --------------- LIFECYCLE METHODS ---------------
  useEffect(() => {
    setTimeout(() => {
      getProductsApiCalling();
    }, 500);
  }, [])

  useEffect(() => {
    getSuccessProducts();
  }, [Home])

  // useEffect()
  // --------------- LIFECYCLE METHODS ---------------

  // --------------- API METHODS ---------------
  const getProductsApiCalling = () => {
    if (!global.isConnected) {
      alert(Constant.NO_INTERNET_MESSAGE)
      return;
    }
    else {
      setLoading(true);
      dispatch(getProducts.Request());
    }
  }

  const getSuccessProducts = () => {
    if (isLoading && Home?.isProductsSuccess == true) {
      setLoading(false);
      setData(Home.ProductsListResponse ?? [])
      if (Home?.ProductsListResponse?.length > 0) {
        setVisibleData(Home?.ProductsListResponse?.slice(0, visibleItemCount + itemsPerPage))
      }
    } else if (isLoading && Home?.isProductsSuccess == false) {
      alert(Home.errorMsg)
      setLoading(false);
    }
  }

  // --------------- METHODS ---------------
  const loadMoreItems = () => {
    const nextData = data.slice(0, visibleItemCount + itemsPerPage);
    setVisibleData(nextData);
    setVisibleItemCount((prevCount) => prevCount + itemsPerPage);
  };

  const onPressCart = (item) => {
    if (item) {
      let CartObj = {
        item: {
          id: item.id,
          brand: item.brand,
          name: item.name,
          price: item.price,
          image_link: item.image_link,
          description: item.description,
          Quantity: 1
        },
        cost: item.price
      }
      dispatch(addToCart.Request(CartObj))
      setFourceLoad(!fourceload)
    }
  }

  const RenderProducts = ({ item, index }) => {
    var isInCart = Home?.cart?.some(function (el) { return el.id == item.id });
    return (
      <View style={styles.ProductCardContainer}>
        {/* Product Image View */}
        <Image
          source={{ uri: item.image_link }}
          style={styles.ProductImg}
        />
        <View style={styles.LikeContainer}>
          <Image source={Images.LIKE} style={styles.LikeImg} />
        </View>

        {/* Product Details View */}
        <View>
          <Text style={styles.BrandTextStyle}>{item?.brand ?? ''}</Text>
          <Text numberOfLines={1} style={styles.ProductNameStyle}>{item?.name ?? ''}</Text>
          <Text numberOfLines={1} style={styles.ProductNameStyle}>{Constant.SIGN.DOLLAR + item?.price ?? '0.0'}</Text>
        </View>
        <Pressable style={styles.AddToCart} onPress={() => {
          isInCart ?
            navigation.navigate('Cart')
            : onPressCart(item)
        }}>
          <Text style={styles.BtnTextStyle}>{isInCart ? 'View Cart' : 'Add to Cart'}</Text>
        </Pressable>
      </View>
    )
  }

  // --------------- UI METHODS ---------------
  return (
    <View style={styles.Container}>
      {/* {console.log('visibleData', visibleData)} */}
      <StatusBar />
      {/* HEADER VIEW */}
      <Header title={'Products'} rightIcon={Images.CART} onPressRightIcon={() => navigation.navigate('Cart')} />
      {/* <View style={[styles.HeaderContainer, { marginTop: insets.top }]}>
        <View style={styles.fl2}></View>
        <View style={styles.fl6}>
          <Text numberOfLines={1} style={styles.HeaderText}>{'Products'}</Text>
        </View>
        <TouchableOpacity style={styles.fl2} activeOpacity={0.8} onPress={() => navigation.navigate('Cart')}>
          <Image source={Images.CART} style={styles.HeaderIconStyle} />
        </TouchableOpacity>
      </View> */}
      {/* CONTENT VIEW */}
      <FlatList
        data={visibleData ?? []}
        extraData={visibleData ?? []}
        renderItem={RenderProducts}
        numColumns={2}
        onEndReachedThreshold={0.5}
        onEndReached={loadMoreItems}
        showsVerticalScrollIndicator={false}
      />
      <Loader visible={isLoading} />
    </View>
  )
}
