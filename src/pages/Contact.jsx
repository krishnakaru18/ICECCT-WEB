import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center mt-14">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">News & Updates</h1>
        <h3 className='text-xl font-bold mb-4'>Paper Submission</h3>
        <p>Paper submission for ICECCT 2024 is CLOSED.</p>
        <p>IEEE Conference Record of ICECCT 2024 is #61336</p>
        <p>Proceedings of IEEE ICECCT 2024 will be forwarded to be published in the IEEE Xplore, the digital library of IEEE which is currently indexed in leading databases such as Scopus, Web of Science, etc</p>

        <h1 className="text-3xl font-bold my-4">Important Dates</h1>
        <ul>
          <li>Last date for submission: 20, April 2024 (Closed)</li>
          <li>Notification of acceptance: 20, May 2024</li>
          <li>Registration deadline: 28, May 2024</li>
          <li>Camera ready paper submission: 31, May 2024</li>
          <li>Release of conference schedule: 28, May 2024</li>
          <li>Conference dates: 26 – 28, June 2024</li>
        </ul>

        <h1 className="text-3xl font-bold my-4">Organized by</h1>
        <p>Organized by: [Organizer Name]</p>
        
        <h1 className="text-3xl font-bold my-4">Technical Sponsor</h1>
        <p>Technical Sponsor: [Technical Sponsor Name]</p>
        
        <h1 className="text-3xl font-bold my-4">Media Partner</h1>
        <p>Media Partner: [Media Partner Name]</p>
      </div>
    </div>
  );
};

export default Contact;
