import React, { useState } from "react";
import { Bars } from 'react-loader-spinner';
import { getSchool } from "../../firebase/sfirestore";
import ReportBox from "./ReportBoxComp";


function SchoolReport() {
    const[data,setData] =useState([]);
    const [loaderEnable, setLoaderEnable] = useState(true);
getSchool()
.then((docSnaps) =>{
    const dataArray =[];
    docSnaps.forEach((docSnap) => {
        dataArray.push(docSnap.data());
    });
    setData(dataArray);
        setLoaderEnable(false);
    })
    .catch((err) => {
        window.location.reload();
    });
    document.title = "schoolDataForm | Digital ATL";
    return(
        <div className="container">
        <link rel="stylesheet" href="/CSS/form.css" />
        <link rel="stylesheet" href="/CSS/report.css" />
        <div className="title">SchoolDataReport | Digital ATL</div>
        <hr />
        {(loaderEnable)?(
                <center>
                    <Bars
                        height="80"
                        width="80"
                        radius="9"
                        color="black"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                    />
                </center>
                 ):(console.log("Disabled loader"))}
                 {
                 data.map((school,index)  =>{
                    console.log (school);
                    return(
                        <ReportBox
                        key={index}
                        id={index}
                        fname={school.name.firstName}
                        address={school.name.address}
                        city={school.name.city}
                        state={school.name.state}
                        pincode={school.name.pincode}
                        country={school.name.country}
                        inchargefname={school.name.inchargefname}
                        inchargelname={school.name.inchargelname}
                        inchargeemail={school.name.inchargeemail}
                        inchargewht={school.name.inchargewht}
                        principalfname={school.name.principalfname}
                        principallname={school.name.principallname}
                        principalemail={school.name.principalemail}
                        principalwht={school.name.principalwht}
                        />
                    );
                 })}
                
                    </div>
    );
                }
                export default SchoolReport;
                    
