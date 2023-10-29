import React,{useRef} from 'react';
import ShowPagePrint from "./showPagePrint"
import { Link } from 'react-router-dom';

import "./showPage.css"
import { useReactToPrint } from 'react-to-print';

const ShowPages = () => {

  const componentRef =useRef();
  const printData = useReactToPrint({
       content : () => componentRef.current,
       documentTitle :"employee data",
  }) 

  return (
    <div className='showPage'>

      <div ref={componentRef}>
        <ShowPagePrint/>
        
      </div>
      <div className='showPage-button'>
      <button onClick={printData}>print</button>
      
        {/* <ShowPagePrint/> */}
      
        <Link to="/2"> ⇐ previous page</Link>
        
        </div>
    </div>
  );
};

export default ShowPages;