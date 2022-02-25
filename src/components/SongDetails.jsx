import React from 'react';
import Message from './Message';
import SongArtist from './SongArtist';
import SongLyrics from './SongLyrics';

const SongDetails = ({search, lyric, bio}) => {
    if (!lyric || !bio) return null;    
    
    return (
      <div className='detail-container-content'>
        <article className="grid-1-2 detail-container">
            {bio.artists ? (
              <SongArtist artist={bio.artists[0]} />
            ) : (
              <Message
                msg={`Error!! El artista ${search.artist} no existe`}
                bgColor="#dc3545"
              />
            )}

            {/* Renderizado condicional  y comprobacion de errores*/}

            {lyric.error || lyric.err || lyric.name === "AbortError" ? (
              <Message
                msg={`Error!! La canción ${search.song} no se encuentra disponible`}
                bgColor="#dc3545"
              />
            ) : (
              <SongLyrics title={search.song} lyrics={lyric.lyrics} />
            )}
        </article>
      </div>
    );
}
 
export default SongDetails;