import React from 'react';
import unsplash from './api/unsplash';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class App extends React.Component  {
  state = { Images: []}
  onSearchSubmit = async (term)=>{
    const response = await unsplash.get('/search/photos',{
      params:{ query: term},
    })
    this.setState( { Images: response.data.results})
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: "12px"}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList Images={this.state.Images}/>
      </div>
    );
  }
}

export default App;
