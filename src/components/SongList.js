import React from 'react'

function SongList(props){

    const handleClick = (event) => {
       props.onSongClicked(event.target.value)
    }

    const songListItems = props.songs.map(song => {
          return <li 
                    onClick={handleClick} 
                    value={song["id"]["attributes"]["im:id"]}
                    key={song["id"]["attributes"]["im:id"]} 
                        >
                     {song["im:name"]["label"]}
                 </li>
        })
    


    return(
        <ul>    
            {songListItems}
        </ul>
    )

}



export default SongList;