import { View, Text } from 'react-native';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';
import { Ionicon } from '../../components/shared/Ionicon';

export const Tab1Screen = () => {
  
  return (
    <View>
      <HamburgerMenu/>
      <Text>
        Tab1Screen
      </Text>  
      <Ionicon name='rocket-outline'/>
    </View>
  )
}
