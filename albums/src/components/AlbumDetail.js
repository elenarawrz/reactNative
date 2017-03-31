import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

function onPress() {
  console.log('holi2');
}

const AlbumDetail = ({ album }) => {
  const { thumbnail_image, title, artist, image } = album;
  const { albumHeader, albumTitle, thumbnailContainer, thumbnail, cover } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image source={{ uri: thumbnail_image }} style={thumbnail} />
        </View>

        <View style={albumHeader}>
          <Text style={albumTitle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image source={{ uri: image }} style={cover} />
      </CardSection>

      <CardSection>
        <Button text='Buy now' onPress={onPress} />
      </CardSection>
    </Card>
  );
};

const styles = {
  albumHeader: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  albumTitle: {
    fontSize: 18
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  thumbnail: {
    height: 50,
    width: 50
  },
  cover: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
