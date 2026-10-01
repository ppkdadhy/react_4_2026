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
  const [editPeserta, setEditPeserta] = useState(null);

  // const listPeserta = Peserta;

  const handleSubmit = (dataPeserta) => {
    if (editPeserta) {
      setListPeserta(listPeserta.map((item) => (item.id === dataPeserta.id ? dataPeserta : item)));
      setEditPeserta(null);
    } else {
      setListPeserta([...listPeserta, dataPeserta]);
    }
    console.log(dataPeserta);
  };

  const handleHapus = (id) => {
    setListPeserta(listPeserta.filter((item) => item.id !== id));
    if (id === editPeserta.id) {
      setEditPeserta(null);
    }
  };

  return (
    <>
      <FormPeserta onSimpan={handleSubmit} pesertaEdit={editPeserta} />
      {/* map: looping jg */}

      {listPeserta.map((item) => (
        <DataPeserta key={item.id} peserta={item} onEdit={setEditPeserta} onHapus={handleHapus} />
      ))}

      {/* listPeserta.map((item) => {
        <DataPeserta key={item.id} nama={item.nama} jurusan={item.jurusan}  />

      }) */}
    </>
  );
}

export default App;
