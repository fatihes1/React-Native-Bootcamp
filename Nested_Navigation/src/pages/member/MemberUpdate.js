import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

const MemberUpdate = (props) => {
    return(
        <SafeAreaView>
            <Text>
            MemberUpdate
            </Text>
            <Button title='Save & Go Home' color='green' onPress={() => props.navigation.navigate('MemberScreen')} />
            <Text>
                Edit Profile için aşşağı : 
            </Text>
            {/* Profil edite daha önce gitmeden önce açılmıyor !  */}
            <Button title='Profile Edit' onPress={() => props.navigation.navigate('Profile', { screen: 'ProfileEditScreen' })} />
            
        </SafeAreaView>
    )
}

export default MemberUpdate;
