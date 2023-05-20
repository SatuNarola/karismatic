import { Dimensions, Platform, StatusBar } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';

// Grab the window object from that native screen size.
const window = Dimensions.get('window');

// The vertical resolution of the screen.
export const screenHeight = window.height;

// The horizontal resolution of the screen.
export const screenWidth = window.width;

// Check for ios X device
const X_WIDTH = 812;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 896;
const XSMAX_HEIGHT = 896;
const isIPhoneX = () =>
	Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV
		? screenWidth === X_WIDTH ||
		screenHeight === X_HEIGHT ||
		screenWidth === XSMAX_WIDTH ||
		screenHeight === XSMAX_HEIGHT
		: false;

// Scales the item based on the screen height and baselineHeight
export const Scale = value => mvs(value);
const statusBarHeight = Platform.select({
	ios: isIPhoneX() ? 44 : 20,
	android: StatusBar.currentHeight,
	default: 0,
});

export default {
	screenHeight: screenWidth < screenHeight ? screenHeight : screenWidth,
	screenWidth: screenWidth < screenHeight ? screenWidth : screenHeight,
	statusBarHeight,
	s, //Width
	vs, //Height
	ms,
	mvs, //Font size
};
