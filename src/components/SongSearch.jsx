import React, { useState,useEffect } from 'react';
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import Loader from './Loader';


const SongSearch = () => {

    const [loading, setLoading] = useState(false);

    return (
      <div>
        <h2>Buscador de canciones</h2>
        
       {loading && <Loader/>}
        <SongForm/>
        <SongDetails/>

      </div>
    );
}
 
export default SongSearch;