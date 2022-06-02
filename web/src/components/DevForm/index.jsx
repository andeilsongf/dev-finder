import { useState, useEffect } from "react";

function DevForm({ onSubmit }) {
  const [github_username, setGithub_username] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      { timeout: 30000 }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude,
    });

    setGithub_username("");
    setTechs("");

  }

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="">
        <label htmlFor="github_username">Usuário do Github</label>
        <input
          name="github_username"
          id="github_username"
          value={github_username}
          onChange={(e) => setGithub_username(e.target.value)}
          required
        />
      </div>

      <div className="mt-5">
        <label htmlFor="techs">Tecnologias</label>
        <input
          name="techs"
          id="techs"
          value={techs}
          onChange={(e) => setTechs(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-row gap-5 mt-5">
        <div>
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full border-0 mt-8 bg-[#7d40e7] rounded-sm py-4 px-5 text-base text-white cursor-pointer hover:bg-[#6931ca] transition ease-in-out delay-050 font-bold"
      >
        Salvar
      </button>
    </form>
  );
}

export default DevForm;
