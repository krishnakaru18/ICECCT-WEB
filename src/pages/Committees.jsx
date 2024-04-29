import React, { useState } from 'react';

import {  FaTimes } from 'react-icons/fa';
import { FaAnglesRight } from "react-icons/fa6";

const Committees = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (index) => {
      setOpenSubMenu(openSubMenu === index ? null : index);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
    
    <header className="bg-gray-200  text-red-500 fixed text-center -mt-4 rounded-r-lg">
            <div className="flex items-center font-medium  py-2">
                <div className="z-50 p-1 md:w-auto w-full flex justify-between ">
                    
                    <div className="text-2xl backdrop-filter backdrop-blur-lg bg-opacity-30 animate-bounce bg-gray-200" onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaAnglesRight />}
                    </div>
                    
                </div>
                
            </div>
            
            <ul className={` gap-4 text-md block space-y-4 px-4 py-3 mt-24  backdrop-filter backdrop-blur-lg bg-opacity-30  bg-gray-200 ${isMenuOpen ? "fixed top-0 left-0  transition-all ease-out duration-150" : "hidden"}`}>
                <h3 className='flex ml-4 underline px-2  bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text'>Committees</h3>
                
                    <li className="text-black relative ml-4" onClick={closeMenu}>
                      
                        <a  className='m-2 flex hover:text-orange-300 ' href="#">Organizing</a>
                        <a  className='m-2 flex hover:text-orange-300' href="#National">National Advisory</a>
                        <a  className='m-2 flex hover:text-orange-300' href="#International">International Advisory</a>
                        <a  className='m-2 flex hover:text-orange-300' href="#EE">Review EE</a>
                        <a  className='m-2 flex hover:text-orange-300' href="#CE">Review CE</a>
                        <a  className='m-2 flex hover:text-orange-300' href="#EC">Review EC</a>
                    </li>
                
            </ul>
        </header>
    <div  className="mx-5 pl-4 mx  mt-28 bg-white rounded-lg ">
      <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">Committees</h1>
      <div className='bg-gray-300 rounded-lg shadow-lg p-4 mb-8 '>  
      <h2 id='Organizing' className="text-xl font-semibold mb-4">Organizing Committee</h2>
      {/* Organizing Committee */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 mb-4">
            <h3 className="text-lg font-semibold">Chief Patron</h3>
            <p>Prof. M. K. Verma, HVC, CSVTU, Bhilai</p>
          </div>
          <div className="w-full sm:w-1/2 mb-4">
            <h3 className="text-lg font-semibold">Patron</h3>
            <p>Prof. Sanjay Agrawal, Pro VC, CSVTU, Bhilai</p>
          </div>
          {/* Add more members as needed */}
        </div>
      </div>

      {/* General Chair */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">General Chair</h2>
        <p>Dr. P K Ghosh, Director, CSVTU, Bhilai</p>
      </div>

      {/* Conference Chair */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Conference Chair(s)</h2>
        <ul>
          <li>Dr. R N Patel, IEEE SB Branch Mentor, CSVTU, Bhilai</li>
          <li>Dr. Lalit Kumar Sahu, Assistant Professor, NIT Raipur</li>
        </ul>
      </div>

      {/* Organizing Chair */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Organizing Chair(s)</h2>
        <ul>
          <li>Dr. Dipti Verma, Associate Professor, CSVTU, Bhilai</li>
          <li>Dr. Toran Verma, Associate Professor, CSVTU, Bhilai</li>
          <li>Mr. Akhilesh Kumar Tiwari, IEEE SB Branch Counselor, CSVTU, Bhilai</li>
        </ul>
      </div>

      {/* Publication Chair */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Publication Chair(s)</h2>
        <ul>
          <li>Dr. Thangaprakash Sengodan, Sengunthar Engineering College, Tiruchengode</li>
          <li>Dr. Ashish Sharma, Assistant Professor, CSVTU, Bhilai</li>
        </ul>
      </div>

      {/* Finance Chair */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Finance Chair(s)</h2>
        <ul>
          <li>Dr K. K. Verma, Registrar, CSVTU, Bhilai</li>
          <li>Mr. Thaneshwar Sahu, Assistant Professor, CSVTU, Bhilai</li>
        </ul>
      </div>

      {/* Information Contact */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Information Contact</h2>
        <p>Mr. Akhilesh Kumar Tiwari, CSVTU, Bhilai</p>
      </div>

      {/* Technical Program Committee Chair */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Technical Program Committee Chair(s)</h2>
        <ul>
          <li>Dr. Amit Singh Rajput, Assistant Professor, CSVTU, Bhilai</li>
          <li>Dr. J P Patra, Associate Professor, CSVTU, Bhilai</li>
        </ul>
      </div>

      {/* Technical Program Committee - Co Chair */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Technical Program Committee – Co Chair(s)</h2>
        <ul>
          <li>Dr. Harish Ghritlahre, Assistant Professor, CSVTU, Bhilai</li>
          <li>Dr. Manish Sinha, Assistant Professor, CSVTU, Bhilai</li>
          <li>Dr. R G Brajesh, Assistant Professor, CSVTU, Bhilai</li>
        </ul>
      </div>

      {/* Technical Program Committee */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2  className="text-xl font-semibold mb-4">Technical Program Committee(s)</h2>
        <ul>
          <li>Dr. Durgesh Kumar Mishra, AIT, Indore Madhya Pradesh</li>
          <li id='National'>Dr. Vijayalaxmi Biradar, KU, Raipur, Chhattisgarh</li>
          {/* Add more members as needed */}
        </ul>
      </div>
      </div>
    </div >
    

    {/* National Advisory Committee */}
<div  className='bg-white px-6 ml-4'>
  <div className='bg-gray-100 rounded-lg shadow-lg p-6 mb-8'>
  <h2 className="text-xl font-semibold mb-4">National Advisory Committee</h2>
  <ul>
    <li>Dr. Biswas K K, Indian Institute of Technology, Delhi</li>
    <li>Dr. Subhananda Chakrabarti, Indian Institute of Technology, Bombay</li>
    <li>Dr. Sugumar Nandhi, Indian Institute of Technology, Guwahathi</li>
    <li>Dr. Thyagarajan T, Madras Institute of Technology, Chennai</li>
    <li>Dr. Mohan B M, Indian Institute of Technology, Kharagpur</li>
    <li>Dr. Narasimhasarma N V S, National Institute of Technology, Warangal</li>
    <li>Dr. Mahendra S N, Indian Institute of Technology, Varanasi</li>
    <li>Dr. Mahanty R, Indian Institute of Technology, Varanasi</li>
    <li>Dr. Sunil Kumar Mutoo, University of Delhi, New Delhi</li>
    <li>Dr. Ravindra Arora, Indian Institute of Technology, Kanpur</li>
    <li>Dr. Jayanta Pal, Indian Institute of Technology, Kharagpur</li>
    <li>Dr. Tapas Kumar Basak, National Institute of Technology, Agartala</li>
    <li>Dr. Chandrasekara S Adiga, Manipal University, Mangalore</li>
    <li>Dr. Kapoor A K, Indian Institute of Technology, Varanasi</li>
    <li>Dr. Sanjeevi S G, National Institute of Technology, Warangal</li>
    <li>Dr. Ashok S, National Institute of Technology, Calicut</li>
    <li>Dr. Bidyut Kr. Bhattacharyya, National Institute of Technology, Agartala</li>
    <li>Dr. Amberker B B, National Institute of Technology, Warangal</li>
    <li>Dr. Chakrabarti P, Motilal Nehru National Institute of Technology, Allahabad</li>
    <li>Dr. Singh S P, Indian Institute of Technology, Varanasi</li>
    <li>Dr. Umapathy Reddy V, Indian Institute of Technology, Hyderabad</li>
    <li>Dr. Govindan V K, National Institute of Technology, Calicut</li>
    <li>Dr. Fazal A. Talukdar, National Institute of Technology, Surathkal</li>
    <li>Dr. Debapriya Das, Indian Institute of Technology, Kharagpur</li>
    <li>Dr. Abraham T Mathew, National Institute of Technology, Calicut</li>
    <li>Dr Shukla K K, Indian Institute of Technology, Varanasi</li>
    <li>Dr. Pandey R K, Indian Institute of Technology, Varanasi</li>
    <li>Dr. Bhattacharjee R, Indian Institute of Technology, Guwahati</li>
    <li>Dr. Panda G, Indian Institute of Technology, Bhubaneswar</li>
    <li>Dr. Mandal S K, NITTTR, Kolkatta</li>
    <li>Dr. Manoharan P A, Chairman, IEEE Madras Section, Chennai</li>
    <li>Dr. Sahasrabudhe S C, Dhirubhai Ambani Inst. of Information and Communication Technology, Gandhinagar</li>
    <li>Dr. Hadadi S B, Hirasugar Institute of Technology, Nidasoshi</li>
    <li>Dr. Suresh Chandra Gupta, Banaras Hindu University, Varanasi</li>
    <li>Dr. Maheswarapu Sydulu, National Institute of Technology, Warangal</li>
    <li id='International'>Dr. Vaisakh K, Andhra University, Vizag</li>
  </ul>
  </div>
</div>
{/* International Advisory Committee */}
<div className='bg-white px-6 ml-4'>
  <div className='bg-gray-100 rounded-lg shadow-lg p-6 mb-8'>
    <h2 className="text-xl font-semibold mb-4">International Advisory Committee</h2>
    <ul>
      <li>Dr. Diego Bellan, Politecnico di Milano, Italy</li>
      <li>Dr. Jens Bo Holm-Nielsen, Aalborg University, Denmark.</li>
      <li>Dr. John K.Pedersen, Aalborg Univeristy, Denmark</li>
      <li>Dr. Stig Munk-Nielsen, Aalborg University, Denmark</li>
      <li>Dr. Brad Lehman, Northeastern University, USA</li>
      <li>Dr. David Infield, University of Strathclyde, UK</li>
      <li>Dr. Vincenzo Piuri, University of Milano, Italy</li>
      <li>Dr. Gabriele Grandi, University of Bologna, Italy</li>
      <li>Dr. Nasrudin Bin Abd Rahim, University of Malaysia, Malaysia</li>
      <li>Dr. Tarek Bouktir, University of Setif, Algeria</li>
      <li>Dr. Subramaniam Ganesan, Oakland University, USA</li>
      <li>Dr. Claudio Moraga Roco, European Centre for Soft Computing, Spain</li>
      <li>Dr. Suganthan P N, Nanyang Technological University, Singapore</li>
      <li>Dr. Sanjib Kumar P, National University of Singapore, Singapore</li>
      <li>Dr. Ralph Kennel, University of Muenchen, Germany</li>
      <li>Dr. Udaya Madawala, University of Auckland, New Zealand</li>
      <li>Dr. Dylan Lu, University of Sydney, Australia</li>
      <li>Dr. Yeap Peik Foong, Multimedia University, Malaysia</li>
      <li>Dr. Terence Karran, University of Lincoln, United Kingdom</li>
      <li>Dr. Jyh-Horng Chou, NKUAS, Taiwan</li>
      <li>Dr. Saad Mekhilef, University of Malaysia, Malaysia</li>
      <li>Dr. Yurii Boreisha, Minnesota State University, USA</li>
      <li>Dr. Herbert H C lu, University of Western Australia, Australia</li>
      <li>Dr. Patrick Gaydecki, The University of Manchester, United Kingdom</li>
      <li>Dr. Sardar Ethem Hamamci, Inonu University, Turkey</li>
      <li>Dr. Krzysztof Kolowrocki, Gdynia Maritime University, Poland</li>
      <li>Dr. Kazuya Masu,Tokyo Institute of Technology, Japan</li>
      <li>Dr. Bin Wu, Ryerson University, Canada</li>
      <li>Dr. Ping Jiang, University of Hull, United Kingdom</li>
      <li>Dr. Eswaran C, Multimedia University, Malaysia</li>
      <li>Dr. Mohd Fareq Abdul Malek, University of Wollonong, Dubai, UAE</li>
      <li>Dr. Sanjay Misra, Covenant University, OTA, Nigeria</li>
      <li>Dr. Omar Ellabban, Texas A&M University, Qatar</li>
      <li>Dr. Mohammad Faridun Naim Tajuddin, University Malaysia Perlis, Malaysia</li>
      <li>Dr. Yasser S. Abdalla, Suez University, Suez, Egypt</li>
      <li id='EE'>Dr. Sanjeevikumar Padmanaban, Aalborg University, Denmark</li>
    </ul>
  </div>
</div>

<div className="bg-white px-6 ml-4">
      {/* Electrical Engineering Track */}
      <div className="bg-gray-100 rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6">Electrical Engineering Track (EE)</h1>
        <p className="mb-6">Electrical Engineering, Electronics Engineering, Power Engineering, Instrumentation and Control Engineering.</p>

        <h2 className="text-xl font-semibold mb-4">International Review Committee</h2>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Chairs</h3>
          <ul className="list-disc ml-6">
            <li>Dr. Sreeramkumar R, King Abdulaziz University Jeddah, Saudi Arabia.</li>
            <li>Dr. Patel R N, National Institute of Technology, Raipur</li>
            <li>Dr. Omar Ellaban, Texas A&M University, Qatar</li>
            <li>Dr. NAMOUNE Abdelhadi, Institute of Science and Technology, BOURMADIA, Algeria</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Reviewers</h3>
          <ul className="list-disc ml-6">
            <li>Dr. Hadadi S B, Hirasugar Institute of Technology, Nidasoshi</li>
            <li>Dr. Mary Lourde R, Birla Institute of Technology and Science, Dubai</li>
            <li>Dr. Arulmurugan Ramsamy, S R Engineering College, Warangal</li>
            <li>Dr. Bharathiraja C, SRM Institute of Science and Technology, Chennai</li>
            <li>Dr. Senthilkumar C, AAA College of Engineering and Technology, Tamil Nadu</li>
            <li>Dr. Albert Alexander S, Kongu Engineering College, Erode</li>
            <li>Dr. Maheshwari S, Kongu Engineering College, Erode</li>
            <li>Dr. Saravanan V, Arunai Engineering College, Thiruvannamalai</li>
            <li>Dr. Alivelu Manga Parimi, Birla Institute of Tech. and Science, Hyderabad</li>
            <li>Dr. Deepa K, Amrita School of Engineering, Bangalore</li>
            <li>Dr. Faridun Naim Tajjuddin, University Malaysia Perlis, Malaysia</li>
            <li>Dr. Vamsi Krishna Tumuluru, Amrita School of Engineering</li>
            <li>Dr. Subhendu Kumar Sahoo, BITS, Hyderabad</li>
            <li>Dr. Supriya P, Amrita University, Coimbatore</li>
            <li>Dr. Kirubakaran D, St Joseph’s Institute of Technology, Chennai</li>
            <li>Dr. Raja P, National Institute of Technology, Trichy</li>
            <li>Dr. Shivakumar R, Sona College of Technology, Salem</li>
            <li>Dr. Swarnalatha R, BITS, Pilani-Dubai</li>
            <li>Dr. Nagavolu Srinivasa Murty, Amrita School of Engineering, Bangalore</li>
            <li>Dr. Doddipatla Vivekananda Prasad, BITS, Pilani-Dubai</li>
            <li>Dr. Vijayachitra S, Kongu Engineering College, Erode</li>
            <li>Dr. Umamaheswari M G, Rajalakshmi Engineering College, Chennai</li>
            <li>Dr. Vasantha Rathna S, Coimbatore Institute of Technology, Coimbatore</li>
            <li>Dr. Umashankar S, VIT University, Vellore</li>
            <li>Dr. Rashmi M R, Amrita School of Engineering, Bangalore</li>
            <li>Dr. Bhuvaneshwari N S, Easwari Engineering College, Chennai</li>
            <li>Dr. Chandira Sekharan E, Coimbatore Institute of Technology, Coimbatore</li>
            <li>Dr. Shanmugalatha A, Vellamal College of Engineering and Technology, Madurai</li>
            <li>Dr. Porkumaran K, Dr.N.G.P Institute of Technology, Coimbatore</li>
            <li>Dr. Durairaj S, Kings College of Engineering, Pudukottai</li>
            <li>Dr. Indurani B, V.V College of Engineering, Thirunelveli</li>
            <li>Dr. Kalyani S, Kamraj College of Engineering and Technology, Virdhunagar</li>
            <li>Dr. Senthil Kumar S, National Institute of Techonology, Trichy</li>
            <li>Dr. Mary Linda M, Ponjesly College of Engineering, Nagercoil</li>
            <li>Dr. Nagalakshmi S, Kamaraj College of Engineering and Technology, Virdhunagar</li>
            <li>Dr. Rathina Prabha N, Mepco Schlenk Engineering College, Sivakasi</li>
            <li>Dr. Bindeshwar Singh, Kamla Nehru Institute of Technology, Sultanpur</li>
            <li>Dr. Prabha S U, Sri Ramakrishna Engineering College Coimbatore</li>
            <li>Dr. Thangavel S, K.S.Rangasamy College of Technology, Thiruchengode</li>
            <li>Dr. Vimala R, PSNA College of Technology, Dindigul</li>
            <li>Dr. Geethhanjali M, Thiagarajar College of Engineering, Madurai</li>
            <li>Dr. Prince Winston D, Kamraj College of Engg. and Tech., Virdhunagar</li>
            <li>Dr. Rathika P, V.V College of Engineering, Thirunelveli</li>
            <li>Dr. Sumithira T R, K.S.Rangasamy College of Engineering, Thiruchengode</li>
            <li>Dr. Deiva Sundari P, KCG College of Technology, Chennai</li>
            <li>Dr. Muniraj C, K.S.Rangasamy College of Technology, Thiruchengode</li>
            <li>Dr. Ramesh T K, Amrita School Of Engineering, Bangalore</li>
            <li>Dr. Kalaichelvi V, Birla Institute of Technology and Science, Pilani-Dubai</li>
            <li>Dr. Selvakumar G, Muthayammal Engineering College, Rasipuram, Tamil Nadu</li>
            <li>Dr. Mahendiran T V, Coimbatore Institute of Engineering & Technology, Coimbatore</li>
            <li>Dr. Monoharan S, Thiyagarajar College of Engineering, Madurai</li>
            <li id='CE'>Dr. Sarat Kumar Sahoo, Vellore Institute of Technology, Vellore</li>
          </ul>
        </div>
      </div>

      {/* Computer Engineering Track */}
      <div className="bg-white">
        <div className='bg-gray-100 rounded-lg shadow-lg p-6 mb-8'>
        <h1 className="text-3xl font-bold mb-6">Computer Engineering Track (CS)</h1>
        <p className="mb-6">Computer Science & Engineering, Information Security and Software Engineering.</p>

        <h2 className="text-xl font-semibold mb-4">International Review Committee</h2>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Chairs</h3>
          <ul className="list-disc ml-6">
            <li>Dr. Sanjay Misra, Covanent University, Nigeria</li>
            <li>Dr. Kotteswaran, Veltech University, Chennai</li>
            <li>Dr. Nur Hafizah Ghazalia, University Malaysia Perlis, Malaysia</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Reviewers</h3>
          <ul className="list-disc ml-6">
            <li>Source store: steroids store</li>
            <li>Dr. Shahed Mohammadi, Ragheb Isfahani, Isfahani, Iran</li>
            <li>Dr. Renuka Mohanraj, Maharishi University of Management, Fairfield, USA</li>
            <li>Dr. Sandra Wahid Amin Rizkallah, Cairo University, Egypt</li>
            <li>Dr. Lydia Wahid Amin, Cairo University, Egypt</li>
            <li>Dr. Vidhya K, College of Engineering, Guindy, Anna University, Chennai</li>
            <li>Dr. Jatinderkumar R Saini, Narmadha College of CA, Gujarat</li>
            <li>Dr. Anuj Kumar, DIT University, Uttarakhand</li>
            <li>Dr. Sakthivel A, Adithya Institute of Technology, Coimbatore</li>
            <li>Dr. Suresh R.M, Sri Muthukumaran Institute of Technology, Chennai</li>
            <li>Dr. Thangam P, Coimbatore Institute of Engineering & Technology, Coimbatore</li>
            <li>Dr. Rani C, Government College of Engineering, Salem</li>
            <li>Dr. Vanitha M, VIT University, Vellore</li>
            <li>Dr. Rakesh N, Amrita University, Bangalore</li>
            <li>Dr. Kamakshi, KITS, Warangal, Andhrapradesh</li>
            <li>Dr. Kamalesh Tiwari, Indian Institute of Technology, Kanpur</li>
            <li>Dr. Abhishek Shukla, R.D. Engineering College Technical Campus, Ghaziabad</li>
            <li>Dr. Raja Rajeswari P, Sri Venkateswara Hindu College of Engg., Andhra Pradesh</li>
            <li>Dr. Karthik Rajasekar, Oak Ridge National Laboratory, BLDG, USA</li>
            <li>Dr. Balasubramanie P, Kongu Engineering College, Perundurai</li>
            <li>Dr. Geetha Balan, Vellore Institute of Technology, Velore</li>
            <li>Dr. Gomathy V, National Engineering College, Kovilpatti</li>
            <li>Dr. Muralidhar K, Ananthalakshmi Institute of Technology and Science, Andhrapradesh</li>
            <li>Dr. Baskaran R, College of Engineering, Guindy, Anna University, Chennai</li>
            <li>Dr. Rajesh S, Mepco Schelenk Engineering College, Sivakasi, India</li>
            <li>Dr. Premalatha K, Bannariamman Institute of Technology, Sathy, Tamil Nadu</li>
            <li>Dr. Paul Rodrigues, DMI College of Engineering, Chennai</li>
            <li>Dr. Mohankumar P, Jeppiar Engineering College, Chennai</li>
            <li>Dr. Shanthi N, Kongu Engineering College, Tamil Nadu</li>
            <li>Dr. Vivekanandan P, Park College of Engineering and Technology, Coimbatore</li>
            <li>Dr. Giridhar Akula V.S, Methodist College of Engineering and Technology, Hyderabad</li>
            <li>Dr. Santhiyakumari N, Knowledge Institute of Technology, Salem, Tamil Nadu</li>
            <li>Dr. Mariakalavathy G, St.Joseph’s College of Engineering, Chennai</li>
            <li>Dr. Nagaraj S.V, Society for Electronic Transactions and Security, Chennai</li>
            <li>Dr. Saradha A, Institute of Road and Transport Technology, Erode, Tamil Nadu</li>
            <li>Dr. Sree Sharmila T, SSN College of Engineering, Chennai</li>
            <li>Dr. Wiselin Jiji G, Dr.Sivanthi Aditanar College of Engineering, Tuticorin, Tamil Nadu</li>
            <li>Dr. Srinivasan S, RMD Engineering College, Chennai</li>
            <li>Dr. Vimala Devi K, P.S.R. Engineering College, Sivakasi, Tamil Nadu</li>
            <li>Dr. Thyagharajan K.K, RMD Engineering College, Chennai</li>
            <li>Dr. Srihari K, Sri Ramakrishna Institute of Technology, Coimbatore</li>
            <li id='EC'>Dr. Seethalakshmi Pandian, University College of Engineering, Tiruchirappalli</li>
          </ul>
        </div>
      </div>
      </div>
    </div>

    {/* Electronics and Communication Track */}
    <div className='bg-white px-6 ml-4'>
    <div className="bg-gray-100 rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6">Electronics and Communication Track (EC)</h1>
        <p className="mb-6">Electronics Engineering, Communication Technologies, VLSI and Embedded Systems.</p>

        <h2 className="text-xl font-semibold mb-4">International Review Committee</h2>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Chairs</h3>
          <ul className="list-disc ml-6">
            <li>Dr. Mohd Fareq Abd Malek, University of Wollonong, Dubai, UAE</li>
            <li>Dr. Murugappan R, KUST, Kwait</li>
            <li>Dr. Senthilkumar S, SVS College of Engineering, Coimbatore</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Reviewers</h3>
          <ul className="list-disc ml-6">
            <li>Dr. Nirmal D, Karunya University, Coimbatore</li>
            <li>Dr. Sabrigiriraj S, SVS College of Engineering, Coimbatore</li>
            <li>Dr. Marimuthu C N, Nandha Engineering College, Erode</li>
            <li>Dr. Arun M, VIT University, Vellore</li>
            <li>Dr. Nagavolu Srinivasa Murthy, Amritha University, Bangalore</li>
            <li>Dr. Rutu Parekh, Dhirubai Ambani IICT, Gandhinagar, Gujarat</li>
            <li>Dr. Sreedevi K Menon, Amritha Vishwa Vidyapeedam, Kollam</li>
            <li>Dr. Kandhavel R, Vellammal College of Engineering, Chennai</li>
            <li>Dr. Chandrasekaran S, EASA College of Engg. & Tech., Coimbatore</li>
            <li>Dr. Sonqing Zhao, ISUT, Taiwan</li>
            <li>Dr. Bhagyaveni M A, CEG, Anna University, Chennai</li>
            <li>Dr. Ashokan R, Kongunadu College of Engg. & Tech., Namakkal</li>
            <li>Dr. Kamalaa J, College of Engineering Guindy, Anna University, Chennai</li>
            <li>Dr. Kumaratharan N, Sri Venkateshwara College of Engineering, Chennai</li>
            <li>Dr. Radha S, SSN College of Engineering, Chennai</li>
            <li>Dr. Laavanya S, Technical Consultant, Ahal Associates, Coimbatore</li>
            <li>Dr. Srivatsun G, PSG College of Technology, Coimbatore</li>
            <li>Dr.Santhi M, Saranathan College of Engineering, Tiruchirappalli</li>
            <li>Dr. Seetharaman G, Oxford Engineering College, Tiruchirappalli</li>
            <li>Dr. Vishnu Kumar Kaliappan, KPR Institute of Engineering and Technology Coimbatore</li>
            <li>Dr. Selvathi D, Mepco Schlenk Engineering College, Sivakasi, Tamilnadu</li>
            <li>Dr. Ruba Soundar K, P.S.R. Engineering College, Sivakasi, Tamilnadu</li>
            <li>Dr. Venkatalakshmi K, University College of Engineering, Tindivanam, Tamilnadu</li>
            <li>Dr. Sivakumar P, SKP Engineering College, Thiruvannamalai, Tamilnadu</li>
            <li>Dr. Robinson S, Mount Zion College of Engineering and Technology, Pudukkottai</li>
            <li>Dr. Vidhyapriya R, PSG College of Technology, Coimbatore</li>
            <li>Dr. Sivabalan Arumugam, NEC India Pvt Ltd, Chennai</li>
            <li>Dr. Vijaykumar V R, Anna University Regional Centre, Coimbatore</li>
            <li>Dr. Vasuki S, Velammal College of Engineering and Technology, Madurai</li>
            <li>Dr. Shantha Selva Kumari R, Mepco Schlenk Engineering College, Sivakasi, Tamilnadu</li>
            <li>Dr. William J, M.A.M. College of Engineering, Tiruchirappalli</li>
            <li>Dr. Venkatakrishnan P, K.L.N College of Information Technology, Madurai</li>
            <li>Dr. Sankara Malliga G, Dhanalakshmi College of Engineering, Chennai</li>
            <li>Dr. Hanumantha Rao P, SAMEER- Centre For Electromagnetics (Ministry of Communication and Information Technology), Chennai.</li>
            <li>Dr. Sridevi B, Velammal College of Engineering and Technology, Madurai</li>
            <li>Dr. Srinivasagan K G, National Engineering College, kovilpatti, Tamilnadu</li>
            <li>Dr. Rangarajan R, R.V.S College of Engineering and Technology, Coimbatore</li>
            <li>Dr. Sumathi M, Dhirajlal Gandhi College of Technology, Salem</li>
            <li>Dr. Vennila C, Saranathan College of Engineering, Tiruchirappalli</li>
            <li>Dr. Srinivasan K S, Turbomachinery Institute of Technology & Sciences, Hyderabad</li>
            <li>Dr. Balamurugan S, Vellore Institute of Technology, Vellore</li>
            <li>Dr. Sivakumar P, Karpagam College of Engineering, Coimbatore</li>
            <li>Dr. Sakthivel R, Vellore Institute of Technology, Vellore</li>
            <li>Dr. Vanitha M, Vellore Institute of Technology, Vellore</li>
            <li>Dr. Marimuthu R, Vellore Institute of Technology, Vellore</li>
            <li>Dr. Vijayakumar S, Sreenivasa Institute of Technology and Management Studies, Chittor</li>
            <li>Dr. Sivanatham S, VIT University, Vellore</li>
          </ul>
        </div>
      </div>
      </div>

    </>
  );
}

export default Committees;
