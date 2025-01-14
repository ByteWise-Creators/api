import { db } from "../config/firebase.js";
import { doc, getDoc } from "firebase/firestore";

export const getResources = async (req, res) => {
  try {
    const { id } = req.params;

    const docRef = doc(db, "BWC_official", "resources");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      const result = data[id];
      if (result) {
        res.json({ data: result });
      } else {
        res.json({ message: "Resource not found" });
      }
    } else {
      res.json({ message: "Document not found" });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};