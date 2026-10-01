// function DataPeserta() {}

const DataPeserta = ({ nama, jurusan }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: " 16px",
        margin: "8px",
        boxShadow: "0 0 2px #000",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h4 style={{ margin: "0 0 6px 0", fontSize: "18px" }}>{nama}</h4>
        <p>Jurusann : {jurusan}</p>
      </div>
    </div>
  );
};

export default DataPeserta;
