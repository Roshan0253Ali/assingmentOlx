import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react'; // Optional: You can use this instead of emoji

const SellForm = () => {
  const [formData, setFormData] = useState({
    type: '',
    bhk: '',
    bathrooms: '',
    furnishing: '',
    projectStatus: '',
    listedBy: '',
    adTitle: '',
    description: '',
    price: '',
    superBuiltupArea: '',
    photos: [],
    state: '',
    name: 'Md Raushan Ali',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelect = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + formData.photos.length <= 20) {
      setFormData({ ...formData, photos: [...formData.photos, ...files] });
    }
  };

  const renderInputWithTick = (label, name, type = 'text', maxLength = null) => (
    <div className="mb-4 relative text-[14px]">
      <label className="block font-small mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="w-full border rounded p-2 pr-10"
        maxLength={maxLength || undefined}
      />
      {formData[name] && (
        <span className="absolute right-3 top-9 text-blue-400 ">
          <CheckCircle size={15}/>
        </span>
      )}
      {maxLength && (
        <p className="text-xs text-gray-400">{formData[name].length} / {maxLength}</p>
      )}
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center font-24">POST YOUR AD</h2>

      {/* Category */}
      <div className="mb-6 border p-4 pr-40">
        <label className="block font-bold text-lg mb-2 text-[20px]">SELECTED CATEGORY</label>
        <p className="text-sm text-gray-600 text-[12px]">
          Properties / For Sale: Houses & Apartments
          <span className="text-blue-600 underline cursor-pointer ml-2 text-[14px]">Change</span>
        </p>
      </div>

      {/* Some Details */}
      <div className="border p-4">
        <div className='pr-40'>
        <label className="block font-bold text-[20px] mb-4 ">INCLUDE SOME DETAILS</label>

        {/* Type */}
        <label className="block font-normal mb-1 text-[14px]">Type *</label>
        <div className="flex flex-wrap gap-2 mb-4 text-[14px]">
          {['Flats / Apartments', 'Independent / Builder Floors', 'Farm House', 'House & Villa'].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => handleSelect('type', type)}
              className={`border px-4 py-2 rounded ${formData.type === type ? 'bg-blue-100 border-blue-500' : 'bg-white'}`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* BHK */}
        <label className="block font-small mb-1 text-[14px]">BHK</label>
        <div className="flex flex-wrap gap-2 mb-4 text-[14px]">
          {['1', '2', '3', '4', '4+'].map((bhk) => (
            <button
              key={bhk}
              type="button"
              onClick={() => handleSelect('bhk', bhk)}
              className={`border px-4 py-2 rounded ${formData.bhk === bhk ? 'bg-blue-100 border-blue-500' : 'bg-white'}`}
            >
              {bhk}
            </button>
          ))}
        </div>

        {/* Bathrooms */}
        <label className="block font-small mb-1 text-[14px]">Bathrooms</label>
        <div className="flex flex-wrap gap-2 mb-4 text-[14px]">
          {['1', '2', '3', '4', '4+'].map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => handleSelect('bathrooms', b)}
              className={`border px-4 py-2 rounded ${formData.bathrooms === b ? 'bg-blue-100 border-blue-500' : 'bg-white'}`}
            >
              {b}
            </button>
          ))}
        </div>

        {/* Furnishing */}
        <label className="block font-small mb-1 text-[14px]">Furnishing</label>
        <div className="flex flex-wrap gap-2 mb-4 text-[14px]">
          {['Furnished', 'Semi-Furnished', 'Unfurnished'].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleSelect('furnishing', item)}
              className={`border px-4 py-2 rounded ${formData.furnishing === item ? 'bg-blue-100 border-blue-500' : 'bg-white'}`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Project Status */}
        <label className="block font-small mb-1 text-[14px]">Project Status</label>
        <div className="flex flex-wrap gap-2 mb-4 text-[14px]">
          {['New Launch', 'Ready to Move', 'Under Construction'].map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => handleSelect('projectStatus', status)}
              className={`border px-4 py-2 rounded ${formData.projectStatus === status ? 'bg-blue-100 border-blue-500' : 'bg-white'}`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Listed By */}
        <label className="block font-small mb-1 text-[14px]">Listed by</label>
        <div className="flex flex-wrap gap-2 mb-4 text-[14px]">
          {['Builder', 'Dealer', 'Owner'].map((by) => (
            <button
              key={by}
              type="button"
              onClick={() => handleSelect('listedBy', by)}
              className={`border px-4 py-2 rounded ${formData.listedBy === by ? 'bg-blue-100 border-blue-500' : 'bg-white'}`}
            >
              {by}
            </button>
          ))}
        </div>

        {/* Inputs with tick */}
        {renderInputWithTick('Ad Title *', 'adTitle', 'text', 70)}
        {renderInputWithTick('Description *', 'description', 'text', 4096)}
        {renderInputWithTick('Super Builtup Area (sqft) *', 'superBuiltupArea', 'number')}
      
      
      </div>
      </div>

      {/* Set a Price */}
      <div className="border p-4 mt-6">
        <div className='pr-40'>
        <label className="block font-bold text-lg mb-4 text-[20px]">SET A PRICE</label>
        {renderInputWithTick('Price *', 'price', 'number')}
        </div>
      </div>

      {/* Upload Photos */}
      <div className="border p-4 mt-6">
        <div className='pr-40'>
        <label className="block font-bold text-lg mb-4 text-[20px]">UPLOAD UP TO 20 PHOTOS</label>
        <div className="grid grid-cols-5 gap-4">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-full aspect-square border flex items-center justify-center bg-gray-100 relative">
              {formData.photos[i] ? (
                <img
                  src={URL.createObjectURL(formData.photos[i])}
                  alt={`Upload ${i + 1}`}
                  className="object-cover w-full h-full"
                />
              ) : (
                <label className="cursor-pointer w-full h-full flex items-center justify-center">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                  <img
                    src="https://w7.pngwing.com/pngs/580/302/png-transparent-add-camera-photo-upload-linkedin-ui-glyph-icon-thumbnail.png"
                    alt="placeholder"
                    className="w-8 h-8 opacity-40"
                  />
                </label>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* Location */}
      <div className="border p-4 mt-6">
        <div className='pr-40'>
        <label className="block font-bold text-lg mb-4 text-[20px]">CONFIRM YOUR LOCATION</label>
        <label className="block font-small mb-1 text-[14px]">State *</label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option value="">Select State</option>
          <option value="Delhi">Delhi</option>
          <option value="Maharashtra">Maharashtra</option>
        </select>
        </div>
      </div>

      {/* Review */}
      <div className="border p-4 mt-6 ">
        <div className='pr-40'>
        <label className="block font-bold text-lg mb-4 text-[20px]">REVIEW YOUR DETAILS</label>
        {renderInputWithTick('Name', 'name')}
        {renderInputWithTick('Mobile Phone Number *', 'phoneNumber', 'number')}
        </div>
      </div>

      <button className="mt-6 bg-gray-300 text-white py-2 px-4 rounded w-30 text-[14px]">Post now</button>
    </div>
  );
};

export default SellForm;
