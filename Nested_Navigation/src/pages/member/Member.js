import React from 'react';
import { SafeAreaView, Text, Button} from 'react-native';

const Member = (props) => {
    return(
        <SafeAreaView>
            <Text>
                Member
            </Text>
            <Button title='Detail' onPress={() => props.navigation.navigate('MemberDetailScreen')} />
        </SafeAreaView>
    )
}

export default Member;
