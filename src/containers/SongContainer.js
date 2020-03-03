import React, { Component } from 'react'
import SongList from '../components/SongList';
import SongDetail from '../components/SongDetail';


class SongContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            songs: [],
            selectedSongId: " "
        }
    }


    componentDidMount(){
        fetch ("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(res => res.json())
        .then(result => this.setState({songs: result["feed"]["entry"]}))
        .catch(error => console.error(error))
    }


    getSelectedSong = () => {
        const found = this.state.songs.find(song => {
            return song["id"]["attributes"]["im:id"] == this.state.selectedSongId
        })
        return found;
    }


    handleSongClicked = (songIdClicked) => {
        this.setState({selectedSongId: songIdClicked})
    }


    render(){
        return(
            <section>
              <h1>Song Container</h1>
              <SongList songs={this.state.songs} 
                        onSongClicked={this.handleSongClicked}/>
              <SongDetail songSelected={this.getSelectedSong()}/>
            </section>
        )
    }
}

export default SongContainer;