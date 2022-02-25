import React from "react";

const SongArtist = ({ artist }) => {
  return (
    <section>
      {!artist.strArtistLogo ? (
        <h3>{artist.strArtist}</h3>
      ) : (
        <img src={artist.strArtistLogo} alt={artist.strArtist} />
      )}

      {artist.strArtistFanart ? (
        <img src={artist.strArtistFanart} alt={artist.strArtist} />
      ) : (
        <img src={artist.strArtistThumb} alt={artist.strArtist} />
      )}

      <p>
        <b>Fecha de nacimiento:</b> {artist.intBornYear}
      </p>

      <p>
        <b>Fecha de creación:</b> {artist.intFormedYear}
      </p>

      <p>
        <b>Cantidad de Miembros:</b> {artist.intMembers}
      </p>

      <b>País de orígen:</b>
      <p>{artist.strCountry}</p>

      <b>Género Musical:</b>
      <p>
        {artist.strGenre} - {artist.strStyle}
      </p>

      <b>Biografía:</b>
      <p> {artist.strBiographyEN}</p>

      <p>
        Para más información{" "}
        <a href={`https://${artist.strWebsite}`} target="_blank" rel="norreferer">
          Visita nuestro sitio web oficial
        </a>
      </p>
    </section>
  );
};

export default SongArtist;
