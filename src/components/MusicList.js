import React from 'react';


const MusicList = ({ songs, onSongSelected}) => {

    const musicListItems = songs.map((song, index) => {
        return <li 
        onClick={() => {onSongSelected(song)}} key={index}> {song["im:artist"].label}
            
        </li>
    })

    return (

        <div className="music-list">
            <h1>ITunes Music Chart</h1>
            <ul>{musicListItems}</ul>
        </div>


    )
}


export default MusicList;