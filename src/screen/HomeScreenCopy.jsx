import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../consts/colors';
import categories from '../consts/categories';
import foods from '../consts/foods';
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                borderWidth:3,
    borderRadius:100, borderColor:'#FFA500',
                backgroundColor:
                  selectedCategoryIndex === index
                    ? '##FFA500'
                    : '#FFA500',
                ...styles.categoryBtn,
              }}>
              <View style={styles.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{ height: 35, width: 35, resizeMode: 'cover' }}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex === index
                      ?'#000000'
                      : '#000000',
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Card = ({ food }) => {
    return (
      <TouchableHighlight
        underlayColor={'#ffffff'}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen', food)}>
        <View style={styles.card}>
          <View style={{ alignItems: 'center', top: -40 }}>
            <Image source={food.image} style={{ height: 120, width: 120 }} />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{food.name}</Text>
            <Text style={{ fontSize: 14, color: '#FFA500', marginTop: 2 }}>
              {food.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>${food.price}</Text>
            <View style={styles.addToCartBtn}>
              <Icon name="add" size={20} color={'#ffffff'} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      

      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 28 }}>Hello,</Text>
          <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Mayar Waleed Nawas</Text>
          <Text style={{ marginTop: 5, fontSize: 22, color: '#FFA500' }}>
            What do you want today ?
          </Text>
        </View>
        <Image
          source={require('../assets/8071220.jpg')}
          style={{ height: 65, width: 65, borderRadius: 70 }}
        />
      </View>
      <View style={{ marginTop: 40, flexDirection: 'row', paddingHorizontal: 20 }}>
        <View style={styles.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput style={{ flex: 1, fontSize: 18 }} placeholder="Search for food" />
        </View>
        <View style={styles.sortBtn}>
          <Icon name="tune" size={28} color={'#ffffff'} />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({ item }) => <Card food={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor:'ffffff',
      alignItems:"center",
  },
  logo:{
      height:80,
      width:40,
      marginVertical: 10,
  },
  bannerImage:{
      height:250,
      width:231,
      marginVertical: 20,
  },
  title:{
      fontSize:36,
      
      paddingHorizontal: 20,
      textAlign: 'center',
      color: 'fff00f',
      marginTop: 40,
  },
  SubTitle:{
    fontSize: 18,
    color:'fff00f',
    paddingHorizontal: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  buttonContainear:{
    flexDirection: "row",
    marginTop: 20,
    borderWidth:1,
    borderColor:'FFA500',
    width: '80%',
    height: 40,
    borderRadius:100,
    backgroundColor:'#FFA500',
  },
  LoginbuttonWrapper:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius:98,
    backgroundColor:'#ffffff',
  },
  LoginbuttonText:{
    color: '#ffffff',
    fontSize: 18,
  },
  SignupbuttonText:{
    fontSize: 18,
  },
    header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:0.5,
    borderRadius:100, 
    borderColor:'#FFA500',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
