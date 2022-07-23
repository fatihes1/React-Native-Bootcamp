import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

const ProfileEdit = (props) => {
    return(
        <SafeAreaView>
            <Text>
                ProfileEdit
            </Text>
            <Button title='Save & Go Home' color='green' onPress={() => props.navigation.navigate('ProfileScreen')} />
        </SafeAreaView>
    )
}

export default ProfileEdit;
