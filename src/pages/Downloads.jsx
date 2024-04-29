
const Down = () => {
  const downloadLinks = [
    { name: 'Registration form (New)', link: 'https://icecct.com/wp-content/uploads/2024/02/Registration-form.pdf' },
    { name: 'IEEE Manuscript Template (Camera Ready Paper New)', link: 'https://example.com/ieee_manuscript_template.pdf' },
    { name: 'IEEE Copyright form', link: 'https://icecct.com/wp-content/uploads/2018/07/IEEE-Copyright-form.pdf' },
    { name: 'ICECCT-2023 Review Form', link: 'https://example.com/icecct_review_form.pdf' },
  ];

  return (
    <>
    <div className="container mx-auto px-4 py-12 mt-14">
      <h1 className="text-3xl font-bold text-center mb-8">Downloads</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {downloadLinks.map((item, index) => (
          <div key={index} className="p-4 border rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">{item.name}</a>
          </div>
        ))}
      </div>
    </div>
    <div className="container mx-auto px-4 py-12 mt-14">
      <h1 className="text-3xl font-bold text-center mb-8">Downloads</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {downloadLinks.map((item, index) => (
          <div key={index} className="p-4 border rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">{item.name}</a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Down;
