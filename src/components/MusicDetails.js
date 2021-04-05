import React from 'react';


const MusicDetails = ({song}) => {
    if(!song) {
        return null;
    }

    return (

        <>
         <h2> artist {song["im:artist"].label}</h2>
         <h2> song name: {song["im:name"].label}</h2>
         <h2> song price: {song["im:price"].label}</h2>
         <img src={song["im:image"].label} />
        </>


    );
};


export default MusicDetails;