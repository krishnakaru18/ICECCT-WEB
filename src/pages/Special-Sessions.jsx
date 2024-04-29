import React from 'react';
import { session } from '../assets';

const Special = () => {
  return (
    <div className="bg-gray-100  mt-14">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text text-center">Special Session 1 (SS 01)</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 mt-4">Special session code: SS 01 </h2>
          <p><strong>Theme:</strong> Machine Learning for Natural Language Processing</p>
          <p><strong>Organizer:</strong> Dr. Mohammad Farhan Khan</p>
          <p>Lecturer in Data Science</p>
          <p>Sir David Bell Building, Digby Stuart College</p>
          <p>University of Roehampton | London | SW15 5PH</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Abstract</h2>
          <p>The landscape of Natural Language Processing (NLP) is undergoing a paradigm shift...</p>
          <p>With the recent improvement of ML algorithms, the foundation of end-to-end translation systems which consists of directly translating source speech to target text/speech without the need for an additional cascade pipeline has emerged as a less complex yet effective method. Hence, This special session aims to capture the essence of this exciting juncture, serving as a platform for novel research that pushes the boundaries of NLP. This special session seeks to explore the cutting-edge intersection of NLP and ML, particularly focusing on novel approaches that address long-standing challenges in the following areas:</p>
          <ul className="list-disc ml-6">
            <li>Deep Learning Architectures: Particularly interested in research that investigates into the application of advanced deep learning architectures like transformers and recurrent neural networks (RNNs) for core NLP tasks. Submissions investigating the effectiveness of these architectures in tasks such as machine translation, sentiment analysis, and text summarisation are highly encouraged.</li>
            <li>Explainability and Fairness in NLP: As NLP models become increasingly complex, ensuring interpretability and mitigating potential biases becomes paramount. Research focusing on developing explainable artificial intelligence (XAI) techniques tailored to the details of language, as well as approaches to identifying and mitigating biases within ML models used for NLP tasks, will be of particular interest.</li>
            <li>Bridging the Resource Gap: A significant challenge in NLP lies in the vast disparity of annotated data available for different languages. This session seeks to bridge this gap. Explore innovative strategies for utilising ML for NLP tasks in low-resource languages are welcome. Research on transfer learning techniques, data augmentation methods, and language-agnostic approaches are highly sought after.</li>
            <li>The Rise of Emerging Applications: The fusion of NLP and ML opens doors to exciting new applications. Submissions that showcase the power of this synergy in novel areas are invited to this session. Research exploring the development of advanced dialogue systems with improved natural language understanding, sentiment analysis of social media data with nuanced context recognition, robust information extraction methodologies for complex documents, etc. are particularly welcome.</li>
          </ul>
          <p>The submissions that address the aforementioned crucial issues but are not limited to those aspects are also welcome. This special session seeks to transcend geographical boundaries and foster a truly global exchange of knowledge. We welcome submissions from researchers worldwide, with a particular interest in work that incorporates diverse datasets and addresses challenges specific to under-resourced languages.</p>
        </div>
        <hr className='border-2 border-gray-400' />
  
        <div className="mb-12 mt-4">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text text-center">Special Session 2 (SS 02)</h1>
        <div className="mb-8 flex flex-col md:flex-row items-center"><img className="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4" src={session} alt="Book" />
          <div>
          
          <div className="mb-8 lg:text-xl md:flex-row items-center">
            <h2 className="text-xl lg:text-2xl font-semibold mb-2 ">Special session code: SS 02</h2>
            <p><strong>Theme:</strong> AI and Cyber-Physical Systems for Sustainable Smart Cities</p>
            
            
            <p><strong>Organizers:</strong></p>
            <ol className="list-decimal ml-6">
              <li>Dr. (Mrs.) Rajashree Jain, Symbiosis Institute of Computer Studies and Research (SICSR), Symbiosis International (Deemed) University, Pune, India</li>
              <li>Dr. Malathy Sathyamoorthy, KPR Institute of Engineering and Technology, Coimbatore, India</li>
            </ol>
          </div>
        </div>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Abstract</h2>
            <p>This special session aims to explore the multifaceted relationship between AI and CPS in shaping sustainable urban environments...</p>
            <p>Topics of Interest:</p>
            <ol className="list-decimal ml-6">
              <li>Embedded and Internet of Things</li>
              <ul className="list-disc ml-6">
                <li>Expert Systems in Internet of Things</li>
                <li>Internet of Agri Things</li>
                <li>Industrial Internet of Things</li>
                <li>Security and Privacy in Internet of Things</li>
                <li>App based remote sensing</li>
              </ul>
              <li>Intelligent Transportation Systems (ITS)</li>
              <ul className="list-disc ml-6">
                <li>AI-driven traffic management and optimization.</li>
                <li>CPS-enabled smart mobility solutions.</li>
                <li>Integration of AI for autonomous vehicles in urban environments.</li>
                <li>Sustainable transportation planning using AI and CPS.</li>
              </ul>
              <li>Smart Energy Management</li>
              <ul className="list-disc ml-6">
                <li>AI-powered energy monitoring and optimization.</li>
                <li>CPS for smart grids and renewable energy integration.</li>
                <li>Predictive maintenance of energy infrastructure using AI.</li>
                <li>Demand-side management and energy-efficient urban planning.</li>
              </ul>
              <li>Urban Infrastructure and Resource Management</li>
              <ul className="list-disc ml-6">
                <li>AI-enabled predictive maintenance of urban infrastructure.</li>
                <li>CPS for water and waste management in smart cities.</li>
                <li>Optimization of resource allocation using AI and CPS.</li>
                <li>Sustainable building design and construction with AI and CPS.</li>
              </ul>
              <li>Public Safety and Security</li>
              <ul className="list-disc ml-6">
                <li>AI-based surveillance and threat detection systems.</li>
                <li>CPS for disaster management and emergency response.</li>
                <li>Predictive policing and crime prevention using AI.</li>
                <li>Privacy and ethical considerations in AI-powered security systems.</li>
              </ul>
              <li>Community Engagement and Governance</li>
              <ul className="list-disc ml-6">
                <li>AI-driven citizen feedback mechanisms for urban planning.</li>
                <li>CPS-enabled participatory governance in smart cities.</li>
                <li>Social inclusion and equity through AI and CPS technologies.</li>
                <li>Policy frameworks and regulatory aspects of AI and CPS deployment in smart cities.</li>
              </ul>
            </ol>
            <p>How to submit?</p>
            <p>Please submit your full length manuscripts to <a href="mailto:ss02icecct@gmail.com" className="text-blue-500">ss02icecct@gmail.com</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
