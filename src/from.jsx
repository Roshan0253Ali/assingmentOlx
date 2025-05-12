import React, { useState } from 'react';

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

  return (
    <div className="max-w-3xl mx-auto p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">POST YOUR AD</h2>

      {/* Selected Category */}
      <div className="mb-6 border p-4">
        <label className="block font-bold text-lg mb-2">SELECTED CATEGORY</label>
        <p className="text-sm text-gray-600">
          Properties / For Sale: Houses & Apartments
          <span className="text-blue-600 underline cursor-pointer ml-2">Change</span>
        </p>
      </div>

      {/* Include Some Details */}
      <div className="border p-4">
        <label className="block font-bold text-lg mb-4">INCLUDE SOME DETAILS</label>

        {/* Type */}
        <label className="block font-medium mb-1">Type *</label>
        <div className="flex flex-wrap gap-2 mb-4">
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
        <label className="block font-medium mb-1">BHK</label>
        <div className="flex flex-wrap gap-2 mb-4">
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
        <label className="block font-medium mb-1">Bathrooms</label>
        <div className="flex flex-wrap gap-2 mb-4">
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
        <label className="block font-medium mb-1">Furnishing</label>
        <div className="flex flex-wrap gap-2 mb-4">
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
        <label className="block font-medium mb-1">Project Status</label>
        <div className="flex flex-wrap gap-2 mb-4">
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
        <label className="block font-medium mb-1">Listed by</label>
        <div className="flex flex-wrap gap-2 mb-4">
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

        {/* Ad Title */}
        <label className="block font-medium mb-1">Ad title *</label>
        <input
          type="text"
          name="adTitle"
          value={formData.adTitle}
          onChange={handleChange}
          className="w-full border rounded p-2 mb-1"
          maxLength={70}
        />
        <p className="text-xs text-gray-400 mb-4">{formData.adTitle.length} / 70</p>

        {/* Description */}
        <label className="block font-medium mb-1">Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded p-2 mb-1"
          rows={4}
          maxLength={4096}
        />
        <p className="text-xs text-gray-400 mb-4">{formData.description.length} / 4096</p>
      </div>

      {/* Set a Price */}
      <div className="border p-4 mt-6">
        <label className="block font-bold text-lg mb-4">SET A PRICE</label>
        <label className="block font-medium mb-1">Price*</label>
        <div className="flex items-center border rounded p-2">
          <span className="text-lg mr-2">₹</span>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full outline-none"
          />
        </div>
      </div>

      {/* Upload Photos */}
      <div className="border p-4 mt-6">
        <label className="block font-bold text-lg mb-4">UPLOAD UP TO 20 PHOTOS</label>
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
                    src="https://cdn-icons-png.flaticon.com/512/1829/1829586.png"
                    alt="placeholder"
                    className="w-8 h-8 opacity-40"
                  />
                </label>
              )}
            </div>
          ))}
        </div>
        <p className="text-red-500 text-sm mt-2">This field is mandatory</p>
      </div>

      {/* Confirm Location */}
      <div className="border p-4 mt-6">
        <label className="block font-bold text-lg mb-4">CONFIRM YOUR LOCATION</label>
        <label className="block font-medium mb-1">State *</label>
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
        <p className="text-red-500 text-sm mt-2">This field is mandatory</p>
      </div>

      {/* Review Details */}
      <div className="border p-4 mt-6">
        <label className="block font-bold text-lg mb-4">REVIEW YOUR DETAILS</label>
        <label className="block font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded p-2 mb-4"
        />

        <label className="block font-medium mb-1">Mobile Phone Number *</label>
        <input
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="+91"
        />
      </div>

      <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded w-full">Post now</button>
    </div>
  );
};

export default SellForm;
