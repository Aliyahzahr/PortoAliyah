import React from 'react';

const Thanks = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-16 sm:py-200 lg:px-8">
      <div className="absolute inset-0 -z-10" style={{ backgroundImage: "url('assets/images/blank.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>“"Everyone should learn to program a computer, because it teaches you how to think." <br />- Steve Jobs”</p>
          </blockquote>
          <figcaption className="mt-10">
          <img
            className="mx-auto size-20 rounded-full "
            src="assets/images/logo.png"
            alt="Deskripsi gambar"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Aliyah Zahratu Rizqi</div>
              <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div className="text-gray-600">Undergraduate of Dian Nuswantoro University</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Thanks;