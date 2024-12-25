const Header = () => {
    const person = {
        name : 'Aliyah Zahratu Rizqi',
        age : 19,
        profession : 'Undergraduate Student',
        hobbies : ['Watch a film','Travelling'],
    };
    return (
        <>
        <h1>Biodata</h1>  
        <h2>Nama: {person.name}</h2>  
        <h3>Usia: {person.age} tahun</h3>  
        <h4>Pekerjaan: {person.profession}</h4>  
        {/* <p>Tentang: {person.about}</p>   */}
        <h5>Hobi:</h5>  
        <ul>  
        {person.hobbies.map((hobby, index) => (  
          <li key={index}>{hobby}</li>  
        ))}  
      </ul>  
        </>
    )
}

export default Header;