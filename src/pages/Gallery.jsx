
const Gallery = () => {
  // Dummy image URLs
  const imageUrls = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/600',
    'https://via.placeholder.com/700',
    'https://via.placeholder.com/800',
    'https://via.placeholder.com/900',
    'https://via.placeholder.com/1000',
    'https://via.placeholder.com/1100',
    'https://via.placeholder.com/1200',
    'https://via.placeholder.com/1300',
    'https://via.placeholder.com/1400',
    'https://via.placeholder.com/1500',
    'https://via.placeholder.com/1600',
    'https://via.placeholder.com/1700',
    'https://via.placeholder.com/1800',
    'https://via.placeholder.com/1900',
    'https://via.placeholder.com/2000',
    'https://via.placeholder.com/2100',
    'https://via.placeholder.com/2200',
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-2 mt-24 bg-gradient-to-r from-orange-300 to-orange-800 text-transparent bg-clip-text">Gallery</h1>
      <div className="flex flex-wrap justify-center">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="m-1">
            <img src={imageUrl} alt={`Image ${index + 1}`} className="object-cover w-64 h-64" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
