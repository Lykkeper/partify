import React from 'react';
import { AutoComplete }     from 'material-ui';
import JSONP                from 'jsonp';
import YoutubeFinder        from 'youtube-finder';
import {debounce} from 'throttle-debounce';

const googleAutoCompleteURL = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBOq82r79yzV-JevcYnDjSyZL2wjLfrPlI&part=snippet&topicId=04rlf&type=video&q=';

class AddSong extends React.Component {
  constructor(props) {
    super(props);
    this.onUpdateInput  = debounce(500, this.onUpdateInput).bind(this);
    this.onNewRequest   = this.onNewRequest.bind(this);
    this.YoutubeClient  = YoutubeFinder.createClient({ key: 'AIzaSyBOq82r79yzV-JevcYnDjSyZL2wjLfrPlI' });
    this.state = {
      dataSource : [],
      inputValue : ''
    }
  }

  performSearch() {
    const
      self = this,
      url  = googleAutoCompleteURL + this.state.inputValue;

    if(this.state.inputValue !== '') {
      JSONP(url, function(error, data) {
        let retrievedSongs;

        if(error) return console.log(error);

        retrievedSongs = data.items.map(function(item) {
          return {title: item.snippet.title, song: item};
        });

        self.setState({
          dataSource : retrievedSongs
        });
      });
    }
  }

  onUpdateInput(inputValue) {
    this.setState({
      inputValue : inputValue
    },function(){
      this.performSearch();
    });
 }

 onNewRequest(song) {
   setTimeout(() => {
     this.props.addSong(song.song);
     this.setState({
       dataSource : [],
       inputValue : ''
     });
   }, 500);
 }

 render() {
   return(
     <div className="youtube-autocomplete">
       <AutoComplete
         searchText={this.state.inputValue}
         floatingLabelText="Add a song"
         filter={AutoComplete.noFilter}
         openOnFocus={true}
         dataSource={this.state.dataSource}
         dataSourceConfig={{text: 'title', value: 'song'}}
         onUpdateInput={this.onUpdateInput}
         onNewRequest={this.onNewRequest}
         fullWidth={true}
       />
       </div>
     )
   }
 }

export default AddSong;
