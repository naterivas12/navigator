import { View, Text, FlatList } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../../routes/StackNavigator';

const products = [
  {id:1,name: 'producto1'},
  {id:2,name: 'producto2'},
  {id:3,name: 'producto3'},
  {id:4,name: 'producto4'},
  {id:5,name: 'producto5'},
  {id:6,name: 'producto6'},
]
export const ProductsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();


  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom:10, fontSize:30}}>Productos</Text>
      <FlatList
      data={products}
      renderItem={({item})=>(
        <PrimaryButton
        onPress={()=>navigation.navigate('Product',{id:item.id,name:item.name})}
        label={item.name}
        />
      )}
      />

      <Text style={{marginBottom:10, fontSize:30}}>Productos</Text>
      <PrimaryButton
        onPress={()=>navigation.navigate('Settings')}
        label='Ajustes'
      />

    </View>
  )
}
