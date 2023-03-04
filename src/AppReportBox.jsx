import React from "react";
//import { doc, deleteDoc } from "firebase/firestore";
//import db from "../../firebase/sfirestore";
//import { deleteData } from "firebase/firestore";
import { db, auth, storage } from "./config/firebase";
import { useEffect, useState } from "react";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";



function ReportBox(props) {
   // let editUrl = "/school-data/edit?id=" + props.id;
    //let deleteUrl = "/school-data/delete?id=" + props.id;

   const deleteSchool = async (id) => {
    const schoolDoc = doc(db, "Schools", id);
    await deleteDoc(schoolDoc);
  };
  const [updatedTitle, setUpdatedTitle] = useState("");
   const updateSchoolTitle = async (id) => {
    const schoolDoc = doc(db, "Schools", id);
    await updateDoc(schoolDoc,
      {title: updatedTitle,
        address:updatedTitle,
      city:updatedTitle,
   state :updatedTitle,
  pincode:updatedTitle,
country:updatedTitle,
 inchargefn:updatedTitle,
inchargeln:updatedTitle,
inchargeemail:updatedTitle,
inchargewhatsapp:updatedTitle,
principalfn:updatedTitle,
principalln:updatedTitle,
principalemail:updatedTitle,
principalwhatsapp:updatedTitle}
      );
  };

    return (
        <div class="box">
           <div class="name">school:{props.title} <br/>
              address:{props.address } <br/>
              city: {props.city } <br/>
              state:{props.state } <br/>
              pincode: {props.pincode} <br/>
              country: {props.country}  <br/>
              incharge first name:{props.inchargefn}<br/>
              inchargelast name:{props.inchargeln}<br/>
              incharge email:{props.inchargeemail }<br/>
              incharge whatsapp:{props.inchargewhatsapp }<br/>
              principal first name:{props.principalfn }<br/>
              principal last name:{props.principalln } <br/>
              principal email :{props.principalemail}<br/> 
              principal whatsapp:{props.principalwhatsapp }<br/></div>
            <button class="editBtn resetbutton" onClick={()=>console.log(props.id)}><i class="fa-solid fa-pencil"></i> Edit</button>
            <button class="submitbutton deleteBtn" onClick={()=>deleteSchool(props.id)}><i class="fa-solid fa-trash-can"></i> Delete</button>
      
       <button class="editBtn resetbutton" onClick={()=> updateSchoolTitle()}><i class="fa-solid fa-pencil"></i> Edit</button>
            <button class="submitbutton deleteBtn" onClick={()=>deleteSchool()}><i class="fa-solid fa-trash-can"></i> Delete</button>
      
        </div>
    );
    }
export default ReportBox;