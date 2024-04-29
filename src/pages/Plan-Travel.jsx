import React from 'react';
import { tour } from '../assets';

const Plan = () => {
  return (
    <div className="bg-gray-100  mt-16 ">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">INCREDIBLE INDIA</h1>
        <div className="mb-8 flex flex-col md:flex-row items-cente">
          <img className=' shadow-xl ring-2 ring-green-800 p-2  ' src={tour} alt="INDIA" />
        </div>
        <div className="mb-6">
          <p>Currently India has 29 states and 7 union territories. Each state & UTs have their own language, clothing, cuisine and look. India is tagged as the mother of so many inventions like algebra, number zero, shampoo, chess, value of pi and diamond mining. India has nearly 90,000 types of animals including over 350 mammals, 1,200 bird species and 50,000 plant species. All these features made India a Unique Country in the World. In addition to these facts, 10 more interesting facts about India are given below:</p>
          <ol className="list-decimal ml-6">
            <li>India was one of the richest countries till the time of British rule in the early 17th Century. Christopher Columbus, attracted by India’s wealth, had come looking for a sea route to India when he discovered America by mistake.</li>
            <li>India never invaded any country in her last 100000 years of history.</li>
            <li>The Tirupati Balaji temple and the Kashi Vishwanath Temple both, receive more visitors than the Vatican City and Mecca combined.</li>
            <li>India has more mosques (300,000 mosques) than any other nation in the world.</li>
            <li>Besides Hindi, the following languages (arranged in descending order as regards numbers of speakers) are each spoken by more than 25 million Indians – Bengali, Telugu, Marathi, Tamil, Urdu, Gujarati, Kannada, Malayalam, Odia and Punjabi.</li>
            <li>Today, India has the world’s largest school in terms of students, the City Montessori School in Lucknow. It has more than 45 thousand students!</li>
            <li>More than 54 cr. people voted in the 2014 General Election – more people than the population of USA, UK, Australia and Japan combined.</li>
            <li>In a village called Shani Shingnapur in Maharashtra, people have been living in houses with no doors for generations. This is because they believe that whoever steals anything from this place will incur the wrath of Shani God and will have to pay for his/her sins very dearly. There is no police station in this village either.</li>
            <li>On an average Rs. 3000 cr. are spends by Indians every year on crackers during Diwali.</li>
            <li>India has nearly 90,000 types of animals including over 350 mammals, 1,200 bird species and 50,000 plant species.</li>
          </ol>
          <p>As we know that India is called a country of unity in diversity. 10 Indian states have population of 25 million each which speak different languages. India has nearly 90,000 types of animals including over 350 mammals, 1,200 bird species and 50,000 plant species. I think with the help of these crucial facts, now we are in the position to answer that why India is greatest country in world| why is India unique.</p>
        </div>
      </div>
    </div>
  );
};

export default Plan;
