
const Callfor = () => {
  return (
    <div className="container mx-auto px-4 py-12 mt-14">
      <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">Call for Papers</h1>
      
      <div className="mb-8">
        <p className="mt-4">
          ICECCT 2024 invites full-length original research contributions from engineering professionals from industries, R&D organizations, academic institutions, government departments, and research scholars from across the world. Full-length original research contributions and review articles not exceeding eight pages as per the IEEE double-column format shall be submitted. The manuscript should contribute original research ideas, developmental ideas, analysis, findings, results, etc. The manuscript should not have been published in any journals/magazines or conference proceedings and not under review in any of them. Further, the manuscript should contain the name of the corresponding author with an email id and affiliation of all authors. Soft copies of the full-length manuscripts (in .doc and .pdf) shall be submitted to chair@icecct.com. All the submitted manuscripts will be sent for peer review, and the corresponding author will be notified of the outcome of the review process. If reviewers recommend further improvements in the manuscript, the manuscript will be sent back to the corresponding author, and the revised version of the manuscript shall be submitted within fifteen days of the notification date.
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Paper selection process #</h2>
        <ol className="list-decimal ml-8 mt-4">
          <li><strong>Step 1 (Received):</strong> Abstracts/full-length papers received will be given a paper ID in relevant to the conference topic and track.</li>
          <li><strong>Step 2 (Under Screening):</strong> Initial screening review will be done by the Technical Program Committee of ICECCT 2024. Initial screening includes relevance to the conference topic, plagiarism, organization of the paper, quality of figures/diagrams/illustrations/equations, etc.</li>
          <li><strong>Step 3 (Under Review):</strong> Papers got through Step 2 alone will be forwarded to the technical review process.</li>
          <li><strong>Step 4 (Revision):</strong> Corresponding author will be notified of the outcome of the review process, and the revised version of the manuscript shall be submitted within fifteen days of the intimation date.</li>
          <li><strong>Step 5 (Under Review):</strong> Revised version of the papers will be sent for review to ensure that all the suggested corrections have been carried out. If the reviewer recommends minor revision, TPC recommends its decision to the organizing Chair on the paper.</li>
          <li><strong>Step 6 (Accept / Reject):</strong> Final decision will be taken by the organizing chair based on the recommendations by the reviewers/TPC, and the same will be intimated to the corresponding authors.</li>
          <li><strong>Step 7 (CRP Received / Not Received):</strong> Status of the Camera Ready Paper after acceptance.</li>
          <li><strong>Step 8 (REG Complete / Pending):</strong> Status of the registration.</li>
        </ol>
      </div>
      <div className="p-6 bg-gray-100 rounded-md shadow-md mb-3">
        <p className="text-lg font-semibold">For further details please contact,</p>
        <p className="mt-2">The Organizing Chair,<br />
        ICECCT 2024,<br />
        Chhattisgarh Swami Vivekanand Technical University (CSVTU),<br />
        Newai, Durg, Chhattisgarh, INDIA<br />
        Ph: +91 9789489103<br />
        E-mail: <a href="mailto:chair@icecct.com" className="text-blue-600 hover:underline">chair@icecct.com</a></p>
      </div>
      
      <div className="mb-8">
      <h1 className="text-3xl font-bold text-center mb-2 mt-5">Topics</h1>
        <h2 className="text-xl font-semibold">Topics (but not limited to)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          <div>
            <h3 className="text-lg font-semibold">Electrical Engineering (EE)</h3>
            <ul className="list-disc ml-4">
              <li>Electrical and Electronic Materials and Process</li>
              <li>Semiconductor Technology</li>
              <li>Power Systems and Energy Engineering</li>
              <li>Soft Computing Techniques in Power Systems</li>
              <li>Transmission and Distribution System and Apparatus</li>
              <li>Instrumentation & Feedback Control Systems</li>
              <li>Power Electronics & Energy Efficient Drives</li>
              <li>Renewable Power Conversion Technologies</li>
              <li>Power Quality Improvement Techniques</li>
              <li>HVDC/FACTS</li>
              <li>Electrical Machines and Industry Applications</li>
              <li>Bio-medical Engineering</li>
              <li>Intelligent Systems</li>
              <li>High Voltage Engineering & Insulation Technology</li>
              <li>Photo/Opto Electronics</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Computer Science (CS)</h3>
            <ul className="list-disc ml-4">
              <li>Geo-informative Systems</li>
              <li>Grid Computing</li>
              <li>Pervasive Computing</li>
              <li>Digital Image and Video Processing</li>
              <li>Computer Vision and Image Analysis</li>
              <li>Data Mining and Cloud Computing</li>
              <li>Computer Architecture</li>
              <li>Computer Networks</li>
              <li>Distributed Computing</li>
              <li>Artificial Intelligence & Soft Computing</li>
              <li>Optimization Techniques</li>
              <li>Human-Computer Interaction</li>
              <li>Theoretical Computer Science</li>
              <li>Computer Applications</li>
              <li>Expert Systems</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Electronics and Communication (EC)</h3>
            <ul className="list-disc ml-4">
              <li>Broad Band Communication</li>
              <li>Computer and Intelligent Communication</li>
              <li>Mobile and Optical Communication</li>
              <li>Wireless Communication</li>
              <li>Mobile and Optical Networks</li>
              <li>Wireless Sensor Networks</li>
              <li>Network Security</li>
              <li>Advanced VLSI Systems</li>
              <li>Embedded Wireless Systems</li>
              <li>Medical Informatics</li>
              <li>Hardware Engineering</li>
              <li>Mechatranics</li>
              <li>Automation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Sustainable Technologies (ST)</h3>
            <ul className="list-disc ml-4">
              <li>Principles of sustainable systems</li>
              <li>Technology Development</li>
              <li>Metrics for technology evaluation</li>
              <li>Green Technology</li>
              <li>Applied Renewable Technologies</li>
              <li>Energy Management and Power Systems</li>
              <li>Sustainable Transportation Technologies</li>
              <li>Feedback Systems</li>
            </ul>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default Callfor;
