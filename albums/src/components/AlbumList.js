import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    // this.setState({ albums: [{
    //   thumbnail_image: 'https://lh3.googleusercontent.com/fCCWdUa3ZyCrTuW1x5eBZ1edKWTqKAf6VSp60k14TlMlsm3CId_Y8pLZJnZgywnmMA=w300',
    //   title: 'titulin',
    //   artist: 'artistin',
    //   image: 'http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg?1399003306'
    // }] });
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
         .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
