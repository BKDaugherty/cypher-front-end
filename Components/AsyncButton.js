import React from 'react'
import Button from '@Components/Button'
import {View, ActivityIndicator, Text} from 'react-native'
export default (props) => {
    const {pending, textContent, errorMessage, children, ...rest} = props
    return (
    <View>
        <Button customContent={() =>
            (pending ? <ActivityIndicator size="small" color="#fff" animating={pending}/> : 
            <View>
                <Text>{textContent}</Text>
                {errorMessage && <Text>{errorMessage}</Text> }
            </View>)
        } 
        {...rest}>
        </Button>
    </View>
    )
}
