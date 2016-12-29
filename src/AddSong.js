import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class AddSong extends React.Component {
  constructor() {
    super();
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.state = {
      dataSource: []
    }
  }

  handleUpdateInput(value) {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Try searching by artist or title!"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Add a song"
          fullWidth={true}
          style={{
            margin: "0 10px",
            width: "90%"
          }}
        />
      </div>
    );
  }
}

export default AddSong;
