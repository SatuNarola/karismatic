// import PropTypes from 'prop-types';
import { Dimensions, Platform } from 'react-native';
import { Scale } from './Matrics';

export default {
    ANDROID: Platform.OS === "android",
    IOS: Platform.OS === "ios",
    BASE_URL:'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline',
    NO_INTERNET_MESSAGE:"Please Check your connectivity.."
};