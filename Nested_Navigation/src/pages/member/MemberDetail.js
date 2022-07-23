import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

const MemberDetail = (props) => {
    return(
        <SafeAreaView>
            <Text>
                MemberDetail
            </Text>
            <Button title='Update' onPress={() => props.navigation.navigate('MemberUpdateScreen')} />
        </SafeAreaView>
    )
}

export default MemberDetail;
