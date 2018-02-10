import { createReduxBoundAddListener,
	 createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'

//Required to integrate navigation with redux
export const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
)
export const addListener = createReduxBoundAddListener("root")
