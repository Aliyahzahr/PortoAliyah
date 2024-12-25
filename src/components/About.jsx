import React from 'react';

const About = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('assets/images/page2.jpg')" }}
    >
      <div className='p-8 mx-auto flex flex-col justify-center items-center h-full' style={{marginLeft: '50%', maxWidth: '500px'}}>
        <h1 className="font-mono font-bold text-black text-4xl">Data and Design</h1>
        <h1 className="font-mono font-bold text-black text-xl mt-3">Building a Better Future</h1>
        <h1 className=" text-gray-600 text-justify text-sm mt-5">Saya adalah seorang pembelajar yang passionate di bidang Data Analyst dan UI/UX. Dengan semangat untuk menggali wawasan dari data dan menciptakan desain yang ramah pengguna, saya siap mengembangkan keterampilan dan memberikan kontribusi untuk menciptakan pengalaman yang luar biasa. Mari bersama-sama mewujudkan ide-ide inovatif!</h1>
      </div>
    </div>
  );
};

export default About;