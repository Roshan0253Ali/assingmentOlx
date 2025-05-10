import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = {
  Cars: [],
  Properties: [
    'For Sale: Houses & Apartments',
    'For Rent: Houses & Apartments',
    'Lands & Plots',
    'For Rent: Shops & Offices',
    'For Sale: Shops & Offices',
    'PG & Guest Houses'
  ],
  Mobiles: [],
  Jobs: [],
  Bikes: [],
  'Electronics & Appliances': [],
  'Commercial Vehicles & Spares': [],
  Furniture: [],
  Fashion: [],
  'Books, Sports & Hobbies': [],
  Pets: []
};

const CategorySelector = () => {
  const [selectedMain, setSelectedMain] = useState('Properties');
  const navigate = useNavigate();

  const handleSubCategoryClick = (main, sub) => {
    if (main === 'Properties') {
      navigate('/post/property', { state: { category: sub } });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">POST YOUR AD</h2>

      <div className="flex border">
        <div className="w-1/2 border-r">
          {Object.keys(categories).map((mainCategory) => (
            <div
              key={mainCategory}
              className={`p-3 cursor-pointer hover:bg-gray-100 ${
                selectedMain === mainCategory ? 'bg-gray-200 font-semibold' : ''
              }`}
              onClick={() => setSelectedMain(mainCategory)}
            >
              {mainCategory}
            </div>
          ))}
        </div>

        <div className="w-1/2">
          {categories[selectedMain].map((subCategory) => (
            <div
              key={subCategory}
              className="p-3 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSubCategoryClick(selectedMain, subCategory)}
            >
              {subCategory}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;
