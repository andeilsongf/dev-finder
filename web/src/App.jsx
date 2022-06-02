import { useEffect, useState } from "react";
import DevItem from "./components/DevItem";
import api from "./services/api";
import DevForm from "./components/DevForm";

export default function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    
    const response = await api.post("/devs", data);
    setDevs([...devs, response.data]);
  }

  return (
    <div className="lg:flex-row flex-col max-w-7xl m-[0_auto] lg:px-16 px-4 py-8 flex lg:items-start sm:mb[20px]">
      <aside className="lg:w-80 w-full bg-white shadow-3xl py-8 px-6 mb-[20px]">
        <strong className="text-xl text-center block text-[#333]">
          Cadastrar
        </strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main className="lg:flex-1 lg:ml-8">
        <ul className="lg:grid-cols-2 lg:grid flex flex-col gap-5 list-none shadow-3xl">
          {devs.map((dev) => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}
