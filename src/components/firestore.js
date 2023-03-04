// import { addDoc, collection, getDocs, getFirestore,deleteDoc,doc } from "firebase/firestore";
// import moment from "moment";
// import app from "./config/firestore";

// const db = getFirestore(app);

// // Paths

// const schoolPath = "App";

// // Functions

// async function addSchool(fname,address,city,state,pincode,country,inchargefn,inchargeln,inchargeemail,inchargewhatsapp,principalfn,principalln,principalemail,principalwhatsapp) {
//     const docRef = collection(db, schoolPath);
//     await addDoc(docRef, {
//         name: {
//             firstName: fname,
            
//         address:address,
//         city:city,
//         state:state,
//         pincode:pincode,
//         country:country,
//         inchargefname:inchargefn,
//         inchargelname:inchargeln,
//         inchargeemail:inchargeemail,
//         inchargewht:inchargewhatsapp,
//         principalfname:principalfn,
//         principallname:principalln,
//         principalemail:principalemail,
//         principalwht:principalwhatsapp,
//         date: moment().format()
 
//         }
//     });
// }

// async function getSchool() {
//     const docRef = collection(db, schoolPath);
//     const docSnaps = await getDocs(docRef);
//     return docSnaps;
// }
// const deleteData  = async(_id) =>{
//         console.log(typeof _id)
//     try{
//         const docRef = doc(db,"Schools",_id)
//         await deleteDoc(docRef)
   
//         console.log("Deleted")
        
//     }catch(err){
//         console.log(err)
//     }
    
// }


// export default db;
// //export { addStudent, getStudents };
// export { addSchool, getSchool,deleteData };