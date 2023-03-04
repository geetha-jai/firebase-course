import './App.css';
//import "./AppReportBox.jsx";
//import "./AppReoprt.jsx"
//import { Auth } from "./components/auth";
import { useEffect, useState } from "react";
import { db, auth, storage } from "./config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
//import ReportBox from './AppReportBox';
function App(){

const [schoolList, setSchoolList] = useState([]);
  const [newschoolTitle, setNewSchoolTitle] = useState("");
   const [newaddress, setNewAddress] = useState("");
    const [newcity, setNewCity] = useState("");
   const [newstate, setNewState] = useState("");
    const [newpincode, setNewPincode] = useState("");
   const [newcountry, setNewCountry] = useState("");
    const [newinchargefn, setNewInchargefn] = useState("");
   const [newinchargeln, setNewInchargeln] = useState("");
    const [newinchargeemail, setNewInchargeemail] = useState("");
   const [newinchargewhatsapp, setNewInchargewhatsapp] = useState("");
    const [newprincipalfn, setNewPrincipalfn] = useState("");
   const [newprinciplaln, setNewPrincipalln] = useState("");
    const [newprincipalemail, setNewPrincipalemail] = useState("");
   const [newprinciplawhatsapp, setNewPrincipalwhatsapp] = useState("");
  //const [newestdyear, setNewestdyear] = useState(0);
  const [isAtl, setIsAtl] = useState(false);


  const [updatedTitle, setUpdatedTitle] = useState("");


    const [fileUpload, setFileUpload] = useState(null);

  const SchoolsCollectionRef = collection(db, "Schools")
const getSchoolList = async () => {
    try {
      const data = await getDocs(SchoolsCollectionRef);
      console.log(data);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSchoolList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSchoolList();
  }, []);
  
const onSubmitSchool = async () => {
    try {
      await addDoc(SchoolsCollectionRef, {
        title: newschoolTitle,
       // estdyear: newestdyear,
        isAtl: isAtl,
        address:newaddress,
        city:newcity,
        state:newstate,
        pincode:newpincode,
        country:newcountry,
        inchargefn:newinchargefn,
        inchargeln:newinchargeln,
        inchargeemail:newinchargeemail,
        inchargewhatsapp:newinchargewhatsapp,
        principalfn:newprincipalfn,
        principalln:newprinciplaln,
        principalemail:newprincipalemail,
        principalwhatsapp:newprinciplawhatsapp
        //userId: auth?.currentUser?.uid,
      });
      getSchoolList();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteSchool = async (id) => {
    const schoolDoc = doc(db, "Schools", id);
    await deleteDoc(schoolDoc);
  };

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
  

  function clearForm() {
    setNewSchoolTitle(" ");
    setNewAddress("");
    setNewCity("");
    setNewState("");
    setNewPincode("");
    setNewCountry("");
    setNewInchargefn("");
    setNewInchargeln("");
    setNewInchargeemail("");
    setNewInchargewhatsapp("");
    setNewPrincipalfn("");
    setNewPrincipalln("");
    setNewPrincipalemail("");
    setNewPrincipalwhatsapp("");
    setIsAtl("")
    //setLoader("");
   }

  const uploadFile = async () => {
    if (!fileUpload) return;
    const filesFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);
    try {
      await uploadBytes(filesFolderRef, fileUpload);
    } catch (err) {
      console.error(err);
    }
  };
function handleClick(event) {
        if(event.target.type === "reset") {
            clearForm();
        }
    }
    document.title = "schoolDataForm | Digital ATL";
  return(
     <div className="container">
  
  <form>
      <div className="title"> School Registration Form </div>
                <hr />
 <div>
        <div className="formContainer">
        <label >school: </label>
        <input  type="text" name="fname" className="form-inp" autoComplete="off" required
          placeholder="School Name..."
          onChange={(e) => setNewSchoolTitle(e.target.value)}
        /></div>
              <div className="formContainer">
             <label ><strong>School Address</strong></label><br></br><br></br>
            
              <label >Addrees Line</label>
        <input  type="text" name="address" className="form-inp" autoComplete="off" required
          placeholder="Address..."
          onChange={(e) => setNewAddress(e.target.value)}
        /></div>
        <div className="formContainer">
         <label >city/District</label>
        <input  type="text" name="city" className="form-inp" autoComplete="off" required
          placeholder="city"
          onChange={(e) => setNewCity(e.target.value)}
        /></div>
          <div className="formContainer"></div>
         <label >State/Province </label>
        <input  type="text" name="state" className="form-inp" autoComplete="off" required
          placeholder="state"
          onChange={(e) => setNewState(e.target.value)}
        /></div>
         <div className="formContainer">
         <label >pincode</label>
        <input  type="text" name="pincode" className="form-inp" autoComplete="off" required
          placeholder="pincode"
          onChange={(e) => setNewPincode(e.target.value)}
        /></div>
         <div className="formContainer">
         <label >country </label>
        <input  type="text" name="country" className="form-inp" autoComplete="off" required
          placeholder="country"
          onChange={(e) => setNewCountry(e.target.value)}
        /></div>
          <div className="formContainer">
        <label> <strong>Is Atl School</strong></label>
        <input
            type="checkbox"  for="fname" id="switch" className="form-inp"
          checked={isAtl}
          onChange={(e) => setIsAtl(e.target.checked)}
        />
        </div>
         <div className="formContainer">
           <label ><strong>Incharge Details</strong></label><br></br><br></br>
        <label >Incharge First Name</label>
        <input  type="text" name="inchargefname" className="form-inp" autoComplete="off" required
          placeholder="First Name"
          onChange={(e) => setNewInchargefn(e.target.value)}
        /></div>
         <div className="formContainer">
         <label >Incharge Last Name   </label>
        <input   type="text" name="inchargelname" className="form-inp" autoComplete="off" required
          placeholder="Last Name"
          onChange={(e) => setNewInchargeln(e.target.value)}
        /></div>
         <div className="formContainer">
         <label >Incharge Email</label>
        <input  type="text" name="inchargeemail" className="form-inp" autoComplete="off" required
          placeholder="Email"
          onChange={(e) => setNewInchargeemail(e.target.value)}
        /></div>
         <div className="formContainer">
         <label>Incharge Whatsapp     </label>
        <input   type="text" name="inchargewhatsapp" className="form-inp" autoComplete="off" required
          placeholder="whatsapp"
          onChange={(e) => setNewInchargewhatsapp(e.target.value)}
        /></div>
         <div className="formContainer">
          <label ><strong>Principal Details</strong> </label><br></br><br></br>
          <label >Principal First Name  </label>
        <input   type="text" name="princippalfn" className="form-inp" autoComplete="off" required
          placeholder="First Name"
          onChange={(e) => setNewPrincipalfn(e.target.value)}
        /></div>
         <div className="formContainer">
         <label >Principal Last Name </label>
        <input   type="text" name="principalln" className="form-inp" autoComplete="off" required
          placeholder="Last Name"
          onChange={(e) => setNewPrincipalln(e.target.value)}
        /></div>
         <div className="formContainer">
         <label >Principal Email  </label>
        <input   type="text" name="principalemail" className="form-inp" autoComplete="off" required
          placeholder="Email"
          onChange={(e) => setNewPrincipalemail(e.target.value)}
        /></div>
         <div className="formContainer">
         <label >Principal Whatsapp </label>
        <input   type="text" name="principalwhatsapp" className="form-inp" autoComplete="off" required
          placeholder="Whatsapp"
          onChange={(e) => setNewPrincipalwhatsapp(e.target.value)}
        /></div>
         <div>
        {schoolList.map((school) => (
          <div>
            <h1 style={{ color: school.isAtl ? "green" : "red" }}>
              {school.title}
            </h1>
            </div>))}</div>
        {/* <label>established date</label>
        <input
          placeholder="Established year..."
          type="number"
          onChange={(e) => setNewestdyear(Number(e.target.value))}
        /><br></br> */}
       
        <div Name="buttonsContainer formContainer">
       
        <button  type="submit" className="submitbutton" onClick={onSubmitSchool}>Submit</button>
        <button type="reset" className="resetbutton" onClick={handleClick}>Reset</button>
         {/* <button type="reset" className="resetbutton"  const path="AppReoprt.jsx" >Report</button>
          <button const path = '/Components'> Click Me </button> */}
          
</div>
      </form>
    
     </div>
     )
}
export default App;

