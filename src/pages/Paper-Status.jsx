
const Paper = () => {
  const paperData = [
    ['CS 2022', 'Under Review', 'CS 5008', 'Accept', 'CS 2023', 'Accept', 'CS 5009', 'Accept'],
    ['CS 2024', 'Accept', 'CS 5010', 'Accept', 'CS 2028', 'Accept', 'CS 5011', 'Accept'],
    ['CS 2029', 'Accept', 'CS 5012', 'Accept', 'CS 2040', 'Under Review', 'CS 5013', 'Under Review'],
    ['CS 2046', 'Under Review', 'CS 5014', 'Accept', 'CS 2048', 'Under Review', 'CS 5015', 'Accept'],
    ['CS 2052', 'Under Review', 'CS 5016', 'Under Review', 'CS 2064', 'Under Review', 'CS 5017', 'Accept'],
    ['CS 2066', 'Under Review', 'CS 5018', 'Under Review', 'CS 2070', 'Under Review', 'CS 5019', 'Under Review'],
    ['CS 2071', 'Under Review', 'CS 5020', 'Under Review', 'CS 2072', 'Accept', 'CS 5021', 'Under Review'],
    ['CS 2073', 'Accept', 'CS 5022', 'Accept', 'CS 2075', 'Accept', 'CS 5025', 'Under Review'],
    ['CS 2080', 'Accept', 'CS 5030', 'Under Review', 'CS 2098', 'Accept', 'CS 5032', 'Accept'],
    ['CS 3003', 'Under Review', 'CS 5036', 'Accept', 'CS 3004', 'Under Review', 'CS 5040', 'Under Review'],
    ['CS 3011', 'Accept', 'CS 5041', 'Under Review', 'CS 3014', 'Accept', 'CS 5042', 'Under Review'],
    ['CS 3015', 'Accept', 'CS 5044', 'Under Review', 'CS 3022', 'Accept', 'CS 5048', 'Under Review'],
    ['CS 3024', 'Accept', 'CS 5049', 'Accept', 'CS 3025', 'Accept', 'CS 5050', 'Accept'],
    ['CS 3026', 'Accept', 'CS 5055', 'Accept', 'CS 3027', 'Accept', 'CS 5058', 'Under Review'],
    ['CS 3031', 'Accept', 'CS 5065', 'Under Review', 'CS 3032', 'Accept', 'CS 5066', 'Under Review'],
    ['CS 3037', 'Accept', 'CS 5067', 'Under Review', 'CS 3056', 'Accept', 'CS 5072', 'Under Review'],
    ['CS 3057', 'Accept', 'CS 5073', 'Under Review', 'CS 3074', 'Accept', 'CS 5074', 'Under Review'],
    ['CS 3095', 'Accept', 'CS 5075', 'Under Review', 'CS 3097', 'Under Review', 'CS 5076', 'Under Review'],
    ['CS 2022', 'Under Review', 'CS 5008', 'Accept'],
    ['CS 2023', 'Accept', 'CS 5009', 'Accept'],
    ['CS 2024', 'Accept', 'CS 5010', 'Accept'],
    ['CS 2028', 'Accept', 'CS 5011', 'Accept'],
    ['CS 2029', 'Accept', 'CS 5012', 'Accept'],
    ['CS 2040', 'Under Review', 'CS 5013', 'Under Review'],
    ['CS 2046', 'Under Review', 'CS 5014', 'Accept'],
    ['CS 2048', 'Under Review', 'CS 5015', 'Accept'],
    ['CS 2052', 'Under Review', 'CS 5016', 'Under Review'],
    ['CS 2064', 'Under Review', 'CS 5017', 'Accept'],
    ['CS 2066', 'Under Review', 'CS 5018', 'Under Review'],
    ['CS 2070', 'Under Review', 'CS 5019', 'Under Review'],
    ['CS 2071', 'Under Review', 'CS 5020', 'Under Review'],
    ['CS 2072', 'Accept', 'CS 5021', 'Under Review'],
    ['CS 2073', 'Accept', 'CS 5022', 'Accept'],
    ['CS 2075', 'Accept', 'CS 5025', 'Under Review'],
    ['CS 2080', 'Accept', 'CS 5030', 'Under Review'],
    ['CS 2098', 'Accept', 'CS 5032', 'Accept'],
    ['CS 3003', 'Under Review', 'CS 5036', 'Accept'],
    ['CS 3004', 'Under Review', 'CS 5040', 'Under Review'],
    ['CS 3011', 'Accept', 'CS 5041', 'Under Review'],
    ['CS 3014', 'Accept', 'CS 5042', 'Under Review'],
    ['CS 3015', 'Accept', 'CS 5044', 'Under Review'],
    ['CS 3022', 'Accept', 'CS 5048', 'Under Review'],
    ['CS 3024', 'Accept', 'CS 5049', 'Accept'],
    ['CS 3025', 'Accept', 'CS 5050', 'Accept'],
    ['CS 3026', 'Accept', 'CS 5055', 'Accept'],
    ['CS 3027', 'Accept', 'CS 5058', 'Under Review'],
    ['CS 3031', 'Accept', 'CS 5065', 'Under Review'],
    ['CS 3032', 'Accept', 'CS 5066', 'Under Review'],
    ['CS 3037', 'Accept', 'CS 5067', 'Under Review'],
    ['CS 3056', 'Accept', 'CS 5072', 'Under Review'],
    ['CS 3057', 'Accept', 'CS 5073', 'Under Review'],
    ['CS 3074', 'Accept', 'CS 5074', 'Under Review'],
    ['CS 3095', 'Accept', 'CS 5075', 'Under Review'],
    ['CS 3097', 'Under Review', 'CS 5076', 'Under Review'],
    ['CS 3098', 'Accept', 'CS 5077', 'Under Review'],
    ['CS 4006', 'Accept', 'CS 5081', 'Under Review'],
    ['CS 4013', 'Accept', 'CS 5083', 'Accept'],
    ['CS 4015', 'Accept', 'CS 5090', 'Accept'],
    ['CS 4022', 'Accept', 'CS 5091', 'Under Review'],
    ['CS 4037', 'Accept', 'CS 5095', 'Accept'],
    ['CS 4042', 'Accept', 'CS 5097', 'Under Review'],
    ['CS 4047', 'Accept', 'CS 5098', 'Under Review'],
    ['CS 4048', 'Accept', 'CS 5099', 'Under Review'],
  ];

  const ecPaperData = [
    ['EC 1004', 'Accept', 'EC 2039', 'Under Review'],
    ['EC 1005', 'Accept', 'EC 2040', 'Accept'],
    ['EC 1006', 'Accept', 'EC 2041', 'Accept'],
    ['EC 1015', 'Accept', 'EC 2045', 'Accept'],
    ['EC 1020', 'Accept', 'EC 2046', 'Under Review'],
    ['EC 1040', 'Accept', 'EC 2047', 'Under Review'],
    ['EC 1041', 'Reject', 'EC 2055', 'Under Review'],
    ['EC 1045', 'Accept', 'EC 2059', 'Accept'],
    ['EC 1061', 'Accept', 'EC 2066', 'Accept'],
    ['EC 1063', 'Accept', 'EC 2077', 'Accept'],
    ['EC 1078', 'Accept', 'EC 2083', 'Accept'],
    ['EC 1085', 'Under Review', 'EC 2084', 'Under Review'],
    ['EC 1089', 'Under Review', 'EC 2085', 'Under Review'],
    ['EC 1098', 'Under Review', 'EC 2086', 'Accept'],
    ['EC 1099', 'Under Review', 'EC 2087', 'Accept'],
    ['EC 2001', 'Reject', 'EC 2089', 'Accept'],
    ['EC 2002', 'Accept', '', ''],
    ['EC 2014', 'Under Review', '', ''],
    ['EC 2016', 'Accept', '', ''],
    ['EC 2018', 'Accept', '', ''],
    ['EC 2019', 'Accept', '', ''],
    ['EC 2021', 'Accept', '', ''],
    ['EC 2027', 'Accept', '', ''],
    ['EC 2033', 'Under Review', '', ''],
    ['EC 2035', 'Under Review', '', ''],
  ];

  return (
    <div className="container mx-auto px-4 py-12 mt-14">
      <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">Paper Status: Track CS (As on 18.04.2024)</h1>
      <div className="overflow-x-auto">
        <table className="w-full whitespace-nowrap border-collapse border border-gray-500">
          <thead>
            <tr>
              <th className="border border-gray-500 px-4 py-2">Paper ID</th>
              <th className="border border-gray-500 px-4 py-2">Status</th>
              <th className="border border-gray-500 px-4 py-2">Paper ID</th>
              <th className="border border-gray-500 px-4 py-2">Status</th>
              <th className="border border-gray-500 px-4 py-2">Paper ID</th>
              <th className="border border-gray-500 px-4 py-2">Status</th>
              <th className="border border-gray-500 px-4 py-2">Paper ID</th>
              <th className="border border-gray-500 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {paperData.map((rowData, index) => (
              <tr key={index}>
                {rowData.map((cell, index) => (
                  <td key={index} className="border border-gray-500 px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1 className="text-3xl font-bold text-center mb-8 mt-12 bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">Paper Status: Track EC (As on 18.04.2024)</h1>
      <div className="overflow-x-auto">
        <table className="w-full whitespace-nowrap border-collapse border border-gray-500">
          <thead>
            <tr>
              <th className="border border-gray-500 px-4 py-2">Paper ID</th>
              <th className="border border-gray-500 px-4 py-2">Status</th>
              <th className="border border-gray-500 px-4 py-2">Paper ID</th>
              <th className="border border-gray-500 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {ecPaperData.map((rowData, index) => (
              <tr key={index}>
                {rowData.map((cell, index) => (
                  <td key={index} className="border border-gray-500 px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Paper;
