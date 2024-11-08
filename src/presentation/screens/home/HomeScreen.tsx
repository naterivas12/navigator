import { View, Text, Pressable } from 'react-native';
import { globalStyles } from '../../theme/theme';
import {type NavigationProp, useNavigation, DrawerActions } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import {type RootStackParams } from '../../routes/StackNavigator';
import { useEffect } from 'react';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';

export const HomeScreen = () => {
  
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft:()=>(
  //       <Pressable onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer)}>
  //         <Text>Menu</Text>
  //       </Pressable>
  //     )
  //   })
  // }, [])

  return (
    <View style={globalStyles.container}>
      <HamburgerMenu/>
      <PrimaryButton
        onPress={()=>navigation.navigate('Products')}
        label="Products"
      />
      
      <PrimaryButton
        onPress={()=>navigation.navigate('Settings')}
        label="Settings"
      />
    </View>
  )
}
