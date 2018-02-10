import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import logoImage from '@Images/Logo.png'

export default class AppLogo extends React.Component {
  render() {
    return (
      <View style={style.imageContainer}>
        <Image style={style.imageStyle}
          source={logoImage}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  imageContainer:{
    paddingTop:10,
    flex:1,
    alignSelf:'center',
  },
  imageStyle:{
    flex:1,
    resizeMode:'contain',
    maxWidth:300
  }
})