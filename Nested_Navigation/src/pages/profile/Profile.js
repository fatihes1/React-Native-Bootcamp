import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

const Profile = (props) => {
    return(
        <SafeAreaView>
            <Text>
                Profile
            </Text>
            <Button title='Edit' onPress={() => props.navigation.navigate('ProfileEditScreen')} />
        </SafeAreaView>
    )
}

export default Profile;
