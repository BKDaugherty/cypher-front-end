


const styles = StyleSheet.create({
  tabbar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
  },
  tab: {
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class CypherTabBar extends React.Component{
  render() {

    const {
      navigation,
      renderIcon,
      activeTintColor,
      inactiveTintColor,
      jumpToIndex
    } = this.props;

    const {
      routes
    } = navigation.state;

    return (
      <View style={styles.tabbar}>

        {routes && routes.map((route, index) => {
          const focused = index === navigation.state.index;
          const tintColor = focused ? activeTintColor : inactiveTintColor;
          return (
            <TouchableWithoutFeedback
              key={route.key}
              style={styles.tab}
              onPress={() => jumpToIndex(index)}
            >
              <View style={styles.tab}>
                {renderIcon({
                  route,
                  index,
                  focused,
                  tintColor
                })}
              </View>
            </TouchableWithoutFeedback>
          );
        })}

      </View>
    );
  }
}

export default CypherTabBar;

