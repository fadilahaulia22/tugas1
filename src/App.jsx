
const biodata ={
  photo : "https://i.pinimg.com/564x/3f/b1/1a/3fb11a36732098823dbdcd6ad90408fc.jpg" ,
  name : "Kim Soo Hyun",
  born : "Bandung, 22 Oktober 2003",
  age : 20,
  hobby :['membaca','traveling','drakoran']
};

export default function App(){

  return(
    <div className="container">
      <h2 className="header">Tugas Pertama Nebula</h2>
      <div className="photo-container">
        <img src={biodata.photo} alt="soo men" className="photo" />
      </div>
      <div className="biodata-container">
        <h3>Biodata</h3>
        <p><strong>Name:</strong> {biodata.name}</p>
        <p><strong>Born:</strong> {biodata.born}</p>
        <p><strong>Age:</strong> {biodata.age} tahun</p>
        <ul className="hobby-list">
          {biodata.hobby.map((hobi, index) => (
            <li key={index} className="hobby-item">
              <button className="hobby-button">{hobi}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}