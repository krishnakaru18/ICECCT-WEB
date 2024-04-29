
const Registration = () => {
  return (
    <div className="container mx-auto px-4 py-12 mt-14">
      <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">Registration Details</h1>
      
      {/* Registration Fee Table */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Registration fee</h2>
        <table className="w-full border-collapse border border-gray-500">
          <thead>
            <tr>
              <th className="border border-gray-500 px-4 py-2">Category</th>
              <th className="border border-gray-500 px-4 py-2">Type</th>
              <th className="border border-gray-500 px-4 py-2">Non-IEEE Members</th>
              <th className="border border-gray-500 px-4 py-2">IEEE Members</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center ">Physical Mode Participation</td>
              <td className="border border-gray-500 px-4 py-2">Research Scholar / Academicians / Student</td>
              <td className="border border-gray-500 px-4 py-2">₹ 7,500</td>
              <td className="border border-gray-500 px-4 py-2">₹ 7,000</td>
            </tr>
            <tr>
              <td className=""></td>
              <td className="border border-gray-500 px-4 py-2">Industry and Others</td>
              <td className="border border-gray-500 px-4 py-2">₹ 8,500</td>
              <td className="border border-gray-500 px-4 py-2">₹ 8,000</td>
            </tr>
            <tr>
              <td className="border border-x-gray-500 border-b-gray-500 px-4 py-2"></td>
              <td className="border border-gray-500 px-4 py-2">Presentation only Mode</td>
              <td className="border border-gray-500 px-4 py-2">₹ 3,000</td>
              <td className="border border-gray-500 px-4 py-2">₹ 2,500</td>
            </tr>
            <tr>
              <td className="text-center">Online Mode Participation</td>
              <td className="border border-gray-500 px-4 py-2">Research Scholar / Academicians / Student</td>
              <td className="border border-gray-500 px-4 py-2">₹ 10,000</td>
              <td className="border border-gray-500 px-4 py-2">₹ 9,500</td>
            </tr>
            <tr>
              <td className=""></td>
              <td className="border border-gray-500 px-4 py-2">Industry and Others</td>
              <td className="border border-gray-500 px-4 py-2">₹ 12,000</td>
              <td className="border border-gray-500 px-4 py-2">₹ 11,000</td>
            </tr>
            <tr>
              <td className=""></td>
              <td className="border border-gray-500 px-4 py-2">Presentation only Mode</td>
              <td className="border border-gray-500 px-4 py-2">₹ 3,500</td>
              <td className="border border-gray-500 px-4 py-2">₹ 3,000</td>
            </tr>
            
          </tbody>
        </table>
      </div>

      {/* How to Register Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">How to register?</h2>
        <p>Registration form for ICECCT 2024 is available in the Downloads link. Duly filled-in registration form shall be sent to the Conference Chair on or before 15, May 2024. The bank account details have been detailed below. The payment of registration fee shall be made through internet banking, direct money transfer, or credit/debit card facilities. Corresponding authors are strictly advised to send the copy of receipt/bill or payment proof with banking payment reference number along with the registration form.</p>
        <p>The registration fee may be paid from debit/credit cards through the following link (Foreign authors should pay through this link only, please do not wire transfer): <a href="#">Click here to pay the registration fee</a></p>
        <p>Authors can also pay the fees by any of the following methods:</p>
        <ul>
          <li>Through Google Pay (GPay) and Phone Pe (+91) 78680 02762</li>
          <li>Alternatively, you can directly transfer the registration money to the account given below:</li>
        </ul>
        <p>Account Number : 0048104000358811<br/>Account Name: IEEE Student Branch CSVTU<br/>Bank Name: IDBI Bank<br/>Bank Address: Nehru Nagar, Bhilai<br/>IFSC Code: IBKL0000048<br/>BIC / SWIFT Code: IBKLINBB</p>
        <p><strong>Registration fee transfer details:</strong><br/>Please make sure that corresponding paper ID appears in the description in the transaction number or reference number (in case of direct bank transfer).</p>
        {/* Add the remaining content */}
      </div>
      

      
      {/* Invoice and Refund Policy Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Invoice and refund policy</h2>
        <p>Please email the copy of the online transfer receipt together with your paper ID to chair@icecct.com upon completion of the online transfer. For on-site registration and payment, only cash (INR or USD) is accepted.</p>
        <p><strong>INVOICE REQUEST</strong> - Invoice will be provided on-site at the conference for paid registration. However, if the authors need an invoice before the payment, please send the below details to chair@icecct.com. The subject of the invoice request mail must be “Invoice request”. The pdf copy of the invoice will be sent to the corresponding author.</p>
        <p><strong>Details needed for invoice:</strong><br/>1. Paper ID<br/>2. Name of the billing author and affiliation<br/>3. Billing address (with TAX number, if any)<br/>4. E-mail ID<br/>5. Title of the paper<br/>6. Category of registration (Student/ professional with publication option)<br/>7. Invoice amount (Registration fee)</p>
        <p>Please send the above details as soon as you received the acceptance mail from the ICECCT Secretariat.</p>
        <p><strong>IMPORTANT</strong> – Please note that at least ONE author MUST register the full conference prior to the final manuscript submission. Students must produce a full-time student card for verification at the conference.</p>
        <p><strong>LETTER OF INVITATION</strong> - Authors of the accepted papers shall request a “Letter of invitation” through email with the details such as name, affiliation, and a valid email address, paper ID, title, and list of authors. The subject of the mail must be “Invitation letter request”. Please send your request email to chair@icecct.com.</p>
        <p><strong>NOTES</strong> - Confirmation Email will be sent once you complete your registration. That mail can be kept as proof of the payment received. However, the receipt for the payment will be provided during the conference on request. Please report the registration desk for the receipt. Only Cash (INR) will be accepted at the registration desk. All the bank charges are to be borne by the participants. The final receipt will only declare the net amount to be received by ICECCT 2024 (excluding all the bank charges). Registrants will need to pay the balance (in cash onsite) if the final amount received is less than the invoice amount.</p>
        <p><strong>PLAGIARISM. REFUND AND CANCELLATION POLICY</strong> - 50% of the registration fee can be refunded for cancellation made in writing and received by the ICECCT 2024 Secretariat on or before 20, May 2024. After refund and cancellation, the corresponding final paper will be excluded from the proceeding. There will be no refund for cancellation made after 21, May 2024. Refund (if any) will be made after the conference by online transfer. The TPC of ICECCT 2024 takes very much care while evaluating the technical content of the paper before acceptance. Plagiarism is the sole responsibility of authors if it is found in the Camera Ready Paper submitted by the authors. There will be no refund if the paper is later rejected by the publisher citing the similarity / Plagiarism score. The conference will not undertake any responsibility to arrange alternate publication for such cases.</p>
      </div>
    </div>
    
  );
}

export default Registration;


