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
function report(){

// eslint-disable-next-line react-hooks/rules-of-hooks
const [schoolList, setSchoolList] = useState([]);
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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getSchoolList();
  }, []);

 return(
     <div>
        {schoolList.map((school) => (
          <div>
            <h1 style={{ color: school.isAtl ? "green" : "red" }}>
              {school.title}
            </h1>
            </div>))}</div>
)
        }
export default report;