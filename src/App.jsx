import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Peserta } from "./components/Peserta";
import DataPeserta from "./components/DataPeserta";
import FormPeserta from "./components/FormPeserta";

function NewPeserta({ nama, jurusan }) {
  return (
    <>
      <h1>Nama Peserta : {nama}</h1>
      <p>Jurusan : {jurusan}</p>
    </>
  );
}
function App() {
  <NewPeserta nama="Budi" jurusan="Web" />;
  const [listPeserta, setListPeserta] = useState(Peserta);
  
  // const listPeserta = Peserta;

  const handleSubmit = (dataPeserta) => {
    console.log(dataPeserta);
    setListPeserta([...listPeserta, dataPeserta]);
  };


  return (
    <>
      <FormPeserta onSimpan={handleSubmit} />
      {/* map: looping jg */}
    
      {listPeserta.map((item) => (
        <DataPeserta key={item.id} nama={item.nama} jurusan={item.jurusan} />
      ))}

      {/* listPeserta.map((item) => {
        <DataPeserta key={item.id} nama={item.nama} jurusan={item.jurusan}  />

      }) */}
    </>
  );
}

export default App;
