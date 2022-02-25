import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {//compruebo si envío el formulario con uno o los dos datos vacíos
      alert("Debes completar todos los campos para enviar el formulario");
      return;
    }

    handleSearch(form);
    setForm(initialForm);
  };

  return (
    <div className="container">
      <h3>
        Completa el siguiente formulario para encontrar información sobre tu
        artista y su canción
      </h3>
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="song"
            onChange={handleChange}
            value={form.song}
            placeholder="Ingrese el nombre de la canción que desea buscar"
          />
          <input
            type="text"
            name="artist"
            onChange={handleChange}
            value={form.artist}
            placeholder="Ingrese el nombre del cantante"
          />
          <input type="submit" value="Buscar" />
        </form>
      </section>
    </div>
  );
};

export default SongForm;
