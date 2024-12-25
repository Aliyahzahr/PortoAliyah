import React, { useState } from 'react';  
import { FaPython, FaFigma, FaFileExcel } from 'react-icons/fa'; // Import FaPython, FaFigma, dan FaFileExcel  
import { GrMysql } from 'react-icons/gr'; // Import GrMysql  

function App() {  
    const [hoverIndex, setHoverIndex] = useState(null);  // State untuk memantau kotak mana yang di-hover  

    const kotakStyle = {  
        width: '100px',               
        height: '100px',              
        backgroundColor: 'white',  
        color: 'black',  
        display: 'flex',              
        alignItems: 'center',         
        justifyContent: 'center',      
        borderRadius: '10px',         
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',   
        margin: '20px',               
        fontSize: '48px',   
        transition: 'transform 0.3s, box-shadow 0.3s', // Transisi untuk efek hover  
        transform: hoverIndex !== null ? 'scale(1.1)' : 'scale(1)', // Tambahkan efek scale pada hover  
        boxShadow: hoverIndex !== null ? '0 8px 16px rgba(0, 0, 0, 0.4)' : '0 4px 8px rgba(0, 0, 0, 0.2)', // Tambahkan efek shadow saat hover  
    };  

    const Blog = () => {  
        const jumlahKotak = 4; // Menambahkan jumlah kotak menjadi 4  

        return (  
            <div>  
                <div  
                    className="h-screen bg-cover bg-center"  
                    style={{ backgroundImage: "url('assets/images/blank.jpg')" }}  
                >  
                    <div className="font-mono font-bold text-black text-4xl p-8 mx-auto justify-center text-center ml-40 h-full space-y-5 py-40">  
                        <h1>What My Skills Include!</h1>  
                        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>   
                            {/* Kontainer untuk kotak */}  
                            {Array.from({ length: jumlahKotak }).map((_, index) => (  
                                <div   
                                    key={index}   
                                    style={{   
                                        ...kotakStyle,   
                                        // Mengubah gaya saat hover  
                                        transform: hoverIndex === index ? 'scale(1.1)' : 'scale(1)',   
                                        boxShadow: hoverIndex === index ? '0 8px 16px rgba(0, 0, 0, 0.4)' : '0 4px 8px rgba(0, 0, 0, 0.2)'   
                                    }}  
                                    onMouseEnter={() => setHoverIndex(index)} // Set index saat mouse enter  
                                    onMouseLeave={() => setHoverIndex(null)}  // Reset index saat mouse leave  
                                >  
                                    {index === 0 ? <FaPython /> : null} {/* Menampilkan logo Python di kotak pertama */}  
                                    {index === 1 ? <FaFigma /> : null}  {/* Menampilkan logo Figma di kotak kedua */}  
                                    {index === 2 ? <GrMysql /> : null}  {/* Menampilkan logo MySQL di kotak ketiga */}  
                                    {index === 3 ? <FaFileExcel /> : null}  {/* Menampilkan logo Excel di kotak keempat */}  
                                </div>  
                            ))}  
                        </div>   
                    </div>  
                </div> 
                 
            </div>  
        );  
    };  

    return <Blog />;  
}  

export default App; // Pastikan ada ekspor default