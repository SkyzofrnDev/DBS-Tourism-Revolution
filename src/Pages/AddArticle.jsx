import React, { useState } from 'react';

const tagsList = [
  'Destination',
  'Mountain',
  'Beach',
  'Adventure',
  'Nature',
  'Cultural',
  'Hiking',
  'Surfing',
  'Others',
];

const AddArticle = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else if (selectedTags.length < 3) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      const newTags = [...selectedTags.slice(1), tag];
      setSelectedTags(newTags);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setImageFile(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImageFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const articleData = {
      title,
      description,
      content,
      tags: selectedTags,
      imageName: imageFile ? imageFile.name : null,
    };

    // Simpan info ke localStorage (simulasi "upload")
    localStorage.setItem('uploadedArticle', JSON.stringify(articleData));

    // Tampilkan di console
    console.log('Submitted Article Data:', articleData);
  };

  return (
    <div className="bg-[#E0E4E9] min-h-screen flex justify-center items-center px-4 pt-20">
      <div className="w-full max-w-[700px] py-10 ">
        <form onSubmit={handleSubmit} className="space-y-6 bg-white px-20 rounded-3xl shadow pt-10">
          <div>
            <label className="block font-semibold text-black">
              <span className="text-red-600">*</span> Article Title
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block font-semibold text-black">
              <span className="text-red-600">*</span> Article Description
            </label>
            <input
              type="text"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block font-semibold text-black">
              <span className="text-red-600">*</span> Article Content
            </label>
            <textarea
              rows="5"
              placeholder="Enter Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 w-full p-2 border rounded-md"
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold text-black">
              <span className="text-red-600">*</span> Add Tags
            </label>
            <p className="text-sm text-red-500 mb-2">You Can Only Choose 3 Tags</p>
            <div className="flex flex-wrap gap-2">
              {tagsList.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`px-5 py-3 mt-3 border rounded-lg text-sm transition-all duration-200 ${
                    selectedTags.includes(tag)
                      ? 'bg-[#303030] text-white'
                      : 'bg-white text-black border-black'
                  }`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-semibold text-black">
              <span className="text-red-600">*</span> Add Images
            </label>
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="mt-2 border border-black rounded-md h-40 flex items-center justify-center text-center text-black/60 relative"
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              {imageFile ? (
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="Preview"
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                'Drag Or Drop Image Here Or Click'
              )}
            </div>
          </div>

          <div className="pt-4 pb-10">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md"
            >
              Add New Article +
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
