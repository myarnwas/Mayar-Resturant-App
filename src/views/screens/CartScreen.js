import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';
import {PrimaryButton, SecondaryButton} from '../components/Button';



const CartScreen = ({navigation, route }) => {
   const { selectedItem } = route.params || {}; // استقبل العنصر الممرر
  const cartItems = selectedItem ? [selectedItem] : []; 
  
  const CartCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>${item.price}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>3</Text>
          <View style={style.actionBtn}>
            <Icon name="remove" size={25} color={COLORS.white} />
            <Icon name="add" size={25} color={COLORS.white} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
         data={cartItems}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>$50</Text>
            </View>
            
                  <View style={{ marginTop: 20 }}>
  <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Payment Method</Text>
  <View style={{ marginTop: 20 }}>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    {/* زر الكاش */}
    <TouchableOpacity 
      style={{
        backgroundColor: COLORS.primary, 
        padding: 10, 
        borderRadius: 10, 
        flex: 1, 
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
      <Image 
        source={require('../../assets/cash.jpg')} 
        style={{ width: 100, height: 35, marginBottom: 5 }}
      />
<SecondaryButton title="              Cash              "onPress={() => alert('Payment Method: Cash')} />
    </TouchableOpacity>

    {/* زر الفيزا */}
    <TouchableOpacity 
      style={{
        backgroundColor: COLORS.primary, 
        padding: 10, 
        borderRadius: 10, 
        flex: 1, 
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }}
     >
      <Image 
        source={require('../../assets/visa.png')} 
        style={{ width: 100, height: 35, marginBottom: 5 }}
      />
      <SecondaryButton title="              Visa              "  onPress={() => alert('Payment Method: Visa')}/>
    </TouchableOpacity>
  </View>
</View>

</View>
            <View style={{ marginTop: 30, justifyContent: 'flex-end' }}>
              <PrimaryButton title="CHECKOUT" onPress={() => alert('Congratulations \n your order has been successfully booked !')} />
            </View>
          </View>
        )}
      />


    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default CartScreen;
