'use client'
import { useState } from 'react';

const Home = () => {
  const provinces = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Northwest Territories',
    'Nova Scotia',
    'Nunavut',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
    'Yukon',
  ];

  const [selectedProvince, setSelectedProvince] = useState('');
  const [price, setPrice] = useState(0)

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
  };

  return (
    <>
      <header className="flex justify-center flex-col items-center mt-[10rem] space-y-3">
        <h1 className="font-bold text-6xl text-gray-200">
          Find Your Final Price.
        </h1>
        <p className="text-gray-200 font-semibold">
          Find the final price of whatever you're buying, wherever you are.
        </p>
      </header>

      <section className = 'flex justify-center space-x-5 mt-[7rem]'>
        <h2 
          className = 'font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 w-fit'
        >Your Price is</h2>
        <span className = 'text-5xl font-bold text-gray-200'>34534 $</span>
      </section>

      <section className="flex justify-center flex-col items-center space-y-4">
        <div className="mt-[5rem]">
          <label htmlFor="province" className="text-lg text-gray-200 font-semibold flex justify-center">
            Select a Province
          </label>
          <select
            className="block mt-1 w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedProvince}
            onChange={handleProvinceChange}
          >
            <option value="">Choose a province</option>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className = 'flex text-gray-200 font-semibold text-lg justify-center'>Enter Your Price</label>

          <input 
            onChange = {(e) => setPrice(e.target.value)}
            value = {price}
            placeholder = '0-0-0-0'
            className = 'px-10 rounded-md py-2 text-center'
          />
        </div>
      </section>
    </>
  );
};

export default Home;
