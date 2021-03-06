import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import Logo from '@Images/logo.png'
export default class AppLogo extends React.Component {
  render() {
    return (
      <View style={style.imageContainer}>
        <Image style={this.props.style ? this.props.style : style.imageStyle }
          source={Logo}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  imageContainer:{
    paddingTop:10,
    paddingBottom:"14%",
    flex:1,
    alignSelf:'center',
  },
  imageStyle:{
    flex:1,
    resizeMode:'contain',
    maxWidth:200
  }
})
