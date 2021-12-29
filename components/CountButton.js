// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   Button,
// } from 'react-native';
// import {black, primary, white} from '../utils/Colors';

// const CountButton = ({item}) => {
//   const [itemcount, setItemCount] = useState(item.count);
//   return (
//     <View style={styles.countBoxStyle}>
//       <TouchableOpacity
//         onPress={() => {
//             if()
//           setItemCount(itemcount - 1);
//         }}>
//         <Text style={{color: primary, fontSize: 25, marginHorizontal: 10}}>
//           –
//         </Text>
//       </TouchableOpacity>
//       <Text style={styles.buttonTextStyle1}>{itemcount}</Text>
//       <TouchableOpacity
//         onPress={() => {
//           setItemCount(itemcount + 1);
//         }}>
//         <Text style={{color: primary, fontSize: 25, marginHorizontal: 10}}>
//           +
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   checkoutButtonStyle: {
//     alignSelf: 'center',
//     justifyContent: 'center',
//     alignContent: 'flex-end',
//     alignItems: 'center',
//     width: '100%',
//     height: 50,
//     backgroundColor: primary,
//     borderRadius: 10,
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   container: {
//     flex: 1,
//     width: '100%',
//     alignSelf: 'center',

//     backgroundColor: white,
//     paddingHorizontal: 10,
//   },
//   textStyle: {
//     fontSize: 16,
//     color: black,
//     fontWeight: '700',
//     marginRight: 5,
//   },
//   buttonTextStyle1: {
//     color: 'black',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   textStyle1: {
//     fontSize: 14,
//     color: black,
//     fontWeight: '4',
//     marginLeft: 5,
//   },
//   textStyle2: {
//     fontSize: 14,
//     color: black,
//     fontWeight: '700',
//     marginLeft: 10,
//   },
//   iconStyle: {
//     height: 20,
//     width: 20,
//     alignSelf: 'center',
//   },
//   viewStyle: {
//     paddingTop: 12,
//     backgroundColor: white,
//   },
//   countBoxStyle: {
//     borderColor: primary,
//     borderWidth: 1,
//     borderRadius: 8,
//     flex: 1,
//     height: 40,
//     marginLeft: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   buttonStyle: {
//     flex: 3,
//     backgroundColor: primary,
//     marginHorizontal: 8,
//     borderRadius: 10,
//     justifyContent: 'center',
//   },
//   buttonTextStyle: {
//     color: white,
//     alignSelf: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// export default CountButton;
