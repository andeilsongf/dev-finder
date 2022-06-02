import { useEffect, useState } from "react";
import api from './services/api';

export default function App() {

  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude)
      },
      (err) => { console.log(err); }, { timeout: 30000 })
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    });

    console.log(response.data);
  }

  return (
    <div className="lg:flex-row flex-col max-w-7xl m-[0_auto] lg:px-16 px-4 py-8 flex lg:items-start sm:mb[20px]">
      <aside className="lg:w-80 w-full bg-white shadow-3xl py-8 px-6 mb-[20px]">

        <strong className="text-xl text-center block text-[#333]">Cadastrar</strong>
        <form onSubmit={handleAddDev} className="mt-8">
          <div className="">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              value={github_username}
              onChange={e => setGithub_username(e.target.value)}
              required />
          </div>

          <div className="mt-5">
            <label htmlFor="techs">Tecnologias</label>
            <input
            name="techs"
            id="techs"
            value={techs}
            onChange={e => setTechs(e.target.value)}
            required />
          </div>

          <div className="flex flex-row gap-5 mt-5">

            <div>
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
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
              onChange={e => setLongitude(e.target.value)}
              required />
            </div>
          </div>

          <button type="submit" className="w-full border-0 mt-8 bg-[#7d40e7] rounded-sm py-4 px-5 text-base text-white cursor-pointer hover:bg-[#6931ca] transition ease-in-out delay-050 font-bold">Salvar</button>
          
        </form>

      </aside>

      <main className="lg:flex-1 lg:ml-8">

        <ul className="lg:grid-cols-2 lg:grid flex flex-col gap-5 list-none shadow-3xl">
          <li className="bg-white p-5 ">
            <header className="flex flex-row items-center">
              <img src="https://avatars.githubusercontent.com/u/23082238?v=4"
                alt="Andeilson Ferreira"
                className="w-14 h-14 rounded-full"
              />
              <div className="ml-3 flex-col flex">

                <strong className="text-base text-[#333]">Andeilson Ferreira</strong>
                <span className="text-sm text-[#999] mt-[2px]">ReactJS, React Native, Node.js</span>
              </div>
            </header>

            <p className="text-[#666] text-sm leading-5 my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="https://github.com/andeilsongf" className="text-[#8e4dff] text-sm no-underline">Acessar perfil no Github</a>
          </li>

          <li className="bg-white p-5 ">
            <header className="flex flex-row items-center">
              <img src="https://avatars.githubusercontent.com/u/23082238?v=4"
                alt="Andeilson Ferreira"
                className="w-14 h-14 rounded-full"
              />
              <div className="ml-3 flex-col flex">

                <strong className="text-base text-[#333]">Andeilson Ferreira</strong>
                <span className="text-sm text-[#999] mt-[2px]">ReactJS, React Native, Node.js</span>
              </div>
            </header>

            <p className="text-[#666] text-sm leading-5 my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="https://github.com/andeilsongf" className="text-[#8e4dff] text-sm no-underline">Acessar perfil no Github</a>
          </li>

          <li className="bg-white p-5 ">
            <header className="flex flex-row items-center">
              <img src="https://avatars.githubusercontent.com/u/23082238?v=4"
                alt="Andeilson Ferreira"
                className="w-14 h-14 rounded-full"
              />
              <div className="ml-3 flex-col flex">

                <strong className="text-base text-[#333]">Andeilson Ferreira</strong>
                <span className="text-sm text-[#999] mt-[2px]">ReactJS, React Native, Node.js</span>
              </div>
            </header>

            <p className="text-[#666] text-sm leading-5 my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="https://github.com/andeilsongf" className="text-[#8e4dff] text-sm no-underline">Acessar perfil no Github</a>
          </li>

          <li className="bg-white p-5 ">
            <header className="flex flex-row items-center">
              <img src="https://avatars.githubusercontent.com/u/23082238?v=4"
                alt="Andeilson Ferreira"
                className="w-14 h-14 rounded-full"
              />
              <div className="ml-3 flex-col flex">

                <strong className="text-base text-[#333]">Andeilson Ferreira</strong>
                <span className="text-sm text-[#999] mt-[2px]">ReactJS, React Native, Node.js</span>
              </div>
            </header>

            <p className="text-[#666] text-sm leading-5 my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="https://github.com/andeilsongf" className="text-[#8e4dff] text-sm no-underline hover:text-[#5a2ea6]">Acessar perfil no Github</a>
          </li>
        </ul>

      </main>
    </div>
  )
}