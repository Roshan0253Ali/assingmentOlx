import React, { useState } from "react";

const PropertyForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 border rounded shadow-md bg-white">
      <h1 className="text-3xl font-bold text-center">Post Your Ad</h1>

      {/* Property Type Section */}
      <div>
        <label className="block text-lg font-semibold mb-2">Type *</label>
        <div className="flex flex-wrap gap-2">
          {['Flats / Apartments', 'Independent / Builder Floors', 'Farm House', 'House & Villa'].map(type => (
            <button key={type} className="px-4 py-2 border rounded hover:bg-gray-100">{type}</button>
          ))}
        </div>
      </div>

      {/* BHK */}
      <div>
        <label className="block text-lg font-semibold mb-2">BHK</label>
        <div className="flex gap-2">
          {[1,2,3,4,'4+'].map(bhk => (
            <button key={bhk} className="px-4 py-2 border rounded hover:bg-gray-100">{bhk}</button>
          ))}
        </div>
      </div>

      {/* Bathrooms */}
      <div>
        <label className="block text-lg font-semibold mb-2">Bathrooms</label>
        <div className="flex gap-2">
          {[1,2,3,4,'4+'].map(bath => (
            <button key={bath} className="px-4 py-2 border rounded hover:bg-gray-100">{bath}</button>
          ))}
        </div>
      </div>

      {/* Furnishing */}
      <div>
        <label className="block text-lg font-semibold mb-2">Furnishing</label>
        <div className="flex gap-2">
          {['Furnished', 'Semi-Furnished', 'Unfurnished'].map(option => (
            <button key={option} className="px-4 py-2 border rounded hover:bg-gray-100">{option}</button>
          ))}
        </div>
      </div>

      {/* Car Parking */}
      <div>
        <label className="block text-lg font-semibold mb-2">Car Parking</label>
        <div className="flex gap-2">
          {[0,1,2,3,'3+'].map(num => (
            <button key={num} className="px-4 py-2 border rounded hover:bg-gray-100">{num}</button>
          ))}
        </div>
      </div>

      {/* Facing */}
      <div>
        <label className="block text-lg font-semibold mb-2">Facing</label>
        <select name="facing" onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select facing</option>
          <option value="East">East</option>
          <option value="West">West</option>
          <option value="North">North</option>
          <option value="South">South</option>
        </select>
      </div>

      {/* Project Name */}
      <div>
        <label className="block text-lg font-semibold mb-2">Project Name</label>
        <input name="projectName" onChange={handleChange} className="w-full p-2 border rounded" maxLength={70} />
      </div>

      {/* Ad Title */}
      <div>
        <label className="block text-lg font-semibold mb-2">Ad Title *</label>
        <input name="adTitle" onChange={handleChange} className="w-full p-2 border rounded" maxLength={70} required />
        <p className="text-sm text-gray-500">Mention the key features of your item (e.g. brand, model, age, type)</p>
      </div>

      {/* Description */}
      <div>
        <label className="block text-lg font-semibold mb-2">Description *</label>
        <textarea name="description" onChange={handleChange} className="w-full p-2 border rounded" maxLength={4096} required />
        <p className="text-sm text-gray-500">Include condition, features and reason for selling</p>
      </div>

      {/* Price */}
      <div>
        <label className="block text-lg font-semibold mb-2">Price *</label>
        <input type="number" name="price" onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>

      {/* Available From */}
      <div>
        <label className="block text-lg font-semibold mb-2">Available From</label>
        <input type="date" name="availableFrom" onChange={handleChange} className="w-full p-2 border rounded" />
      </div>

      {/* Photo Upload */}
      <div>
        <label className="block text-lg font-semibold mb-2">Upload Up to 20 Photos *</label>
        <input type="file" name="photos" onChange={handleChange} accept="image/*" multiple className="w-full p-2 border rounded" />
        <p className="text-red-500 text-sm">This field is mandatory</p>
      </div>

      {/* Location */}
      <div>
        <label className="block text-lg font-semibold mb-2">State *</label>
        <select name="state" onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Select state</option>
          <option value="Delhi">Delhi</option>
          <option value="Maharashtra">Maharashtra</option>
          {/* Add more options */}
        </select>
        <p className="text-red-500 text-sm">This field is mandatory</p>
      </div>

      {/* User Details */}
      <div>
        <label className="block text-lg font-semibold mb-2">Name</label>
        <input name="name" onChange={handleChange} className="w-full p-2 border rounded" maxLength={30} />
      </div>

      {/* Phone Verification */}
      <div>
        <label className="block text-lg font-semibold mb-2">Mobile Phone Number *</label>
        <input name="phone" type="tel" onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>

      <button className="w-full p-3 mt-4 bg-blue-600 text-white rounded disabled:opacity-50">Post Now</button>
    </div>
  );
};

export default PropertyForm;
