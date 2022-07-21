import React from 'react';
import Pdf from "react-to-pdf";

import { useLocation} from 'react-router-dom';
const ref = React.createRef();



// Create Document Component
function PdfFile() {
  const {state} = useLocation();


  return (
  
  <div className="App">
  <Pdf targetRef={ref} filename="Report.pdf">
    {({ toPdf }) => <button onClick={toPdf} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Generate Pdf</button>
 }
  </Pdf>
  <div ref={ref}>
   <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Product name
                </th>
                <th scope="col" className="py-3 px-6">
                    Device Type
                </th>
                <th scope="col" className="py-3 px-6">
                    Original Stock
                </th>
                <th scope="col" className="py-3 px-6">
                    Devices Sent
                </th>
                <th scope="col" className="py-3 px-6">
                    Devices Remaining
                </th>
                <th scope="col" className="py-3 px-6">
                    Department
                </th>
                <th scope="col" className="py-3 px-6">
                    Server TimeStamp
                </th>
            </tr>
        </thead>
        <tbody>
            {
                state.map((e)=>(
                    <>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {e.name}
                </th>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {e.deviceType}
                </th>
                <td className="py-4 px-6">
                    {e.oldCount}
                </td>
                <td className="py-4 px-6">
                    {e.amountSent}
                </td>
                <td className="py-4 px-6">
                    {e.newCount}
                </td>
                <td className="py-4 px-6">
                   {e.department}
                </td>
                <td className="py-4 px-6">
                    {e.timestamp.seconds}
                </td>
            </tr>
            
           
                    </>
                ))
            }
            
        </tbody>
    </table>
  </div>
</div>
);
  }

export default PdfFile;