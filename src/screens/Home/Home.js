// --------------- LIBRARIES ---------------
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";

// --------------- ASSETS ---------------
import { HomeStyles as styles } from './Styles'
import { Colors, Constant, Matrics, Images } from '../../CommonConfig';
import { getProducts } from '../../Redux/Actions';
import { Loader } from '../../Components';

const itemsPerPage = 8;

// --------------- FUNCTION DECLARATION ---------------
export default function Home({ navigation }) {
  // --------------- REDUCER STATE ---------------
  const { Common, Home } = useSelector((state) => state); // Get reducer state
  const dispatch = useDispatch(); // dispatch method to dispatch our actions to reducer and saga

  // --------------- STATE ---------------
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState();
  const [visibleItemCount, setVisibleItemCount] = useState(itemsPerPage);



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

  const RenderProducts = ({ item, index }) => {
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
      </View>
    )
  }

  // --------------- UI METHODS ---------------
  return (
    <View style={styles.Container}>
      {console.log('visibleData', visibleData)}
      <FlatList
        data={visibleData ?? []}
        extraData={visibleData ?? []}
        renderItem={RenderProducts}
        numColumns={2}
        onEndReached={loadMoreItems}
      />
      <Loader visible={isLoading} />
    </View>
  )
}
