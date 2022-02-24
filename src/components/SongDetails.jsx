import React from 'react';
import SongArtist from './SongArtist';
import SongLyrics from './SongLyrics';

const SongDetails = () => {
    return ( 
        <div>
            <h2>Detalles</h2>
            <SongArtist/>
            <SongLyrics/>
        </div>
    );
}
 
export default SongDetails;