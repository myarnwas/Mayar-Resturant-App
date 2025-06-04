import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TextInput, Button, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { SecondaryButton } from '../components/Button';

const DetailsScreen = ({ navigation, route }) => {
  const item = route.params;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState('');
  const [isFavorite, setIsFavorite] = useState(false); 

  const addComment = () => {
    if (newComment.trim() && rating.trim()) {
      setComments([...comments, { text: newComment, rating: rating }]);
      setNewComment('');
      setRating('');
    }
  };

  const addToCart = () => {
  navigation.navigate('CartScreen', { selectedItem: item });
};

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: 280 }}>
          <Image source={item.image} style={{ height: 220, width: 220 }} />
        </View>
        <View style={style.details}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: COLORS.white }}>
              {item.name}
            </Text>
            <View style={style.iconContainer}>
              <Icon
                name={isFavorite ? "favorite" : "favorite-border"}
                color={isFavorite ? "red" : COLORS.primary}
                size={25}
                onPress={() => setIsFavorite(!isFavorite)} // تغيير حالة القلب
              />
            </View>
          </View>
          <Text style={style.detailsText}>Nutritional Info: {item.nutrition}</Text>
          <Text style={style.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>
          <Text style={style.detailsTextinfo}>
            Price: ${item.price} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rate: 4.5 stars
          </Text>

          {/* عرض التعليقات */}
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>Comments</Text>
            <FlatList
              data={comments}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={style.commentContainer}>
                  <Text style={style.commentText}>{item.text}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                    <Icon name="star" color="yellow" size={18} />
                    <Text style={style.commentRating}> {item.rating}</Text>
                  </View>
                </View>
              )}
            />
          </View>
          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <SecondaryButton title="Add To Cart" onPress={addToCart} />
          </View>
          {/* إضافة التعليقات */}
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>Add a Comment</Text>
            <TextInput
              style={style.input}
              placeholder="Write a comment..."
              value={newComment}
              onChangeText={setNewComment}
            />
            <TextInput
              style={style.input}
              placeholder="Rate (1-5)"
              keyboardType="numeric"
              value={rating}
              onChangeText={setRating}
            />
            <SecondaryButton title="Add Comment" onPress={addComment} />
          </View>

          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 5,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
  detailsTextinfo: {
    lineHeight: 22,
    fontSize: 22,
    color: COLORS.white,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    padding: 20,
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  commentContainer: {
    backgroundColor: COLORS.white,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,    
  },
  commentText: {
    fontSize: 16,
  },
  commentRating: {
    fontSize: 14,
    color: COLORS.grey,
    
  },
});

export default DetailsScreen;
