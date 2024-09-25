import {
  collection,
  getFirestore,
  doc,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import app from "./firebase.config";

const firestore = getFirestore(app);

export async function retriveData<T>(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as T;
  return data;
}

export async function updateData(
  collectionName: string,
  id: string,
  newData: Record<string, any>,
) {
  try {
    const snapshot = doc(firestore, collectionName, id);
    await setDoc(snapshot, newData, { merge: true });
    console.log(`Document with id ${id} has been updated successfully.`);
  } catch (error) {
    console.error("Error updating document:", error);
  }
}

export async function addData(collectionName: string, newData: object) {
  try {
    const docRef = await addDoc(collection(firestore, collectionName), newData);
    console.log(`Document added with id: ${docRef.id}`);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document:", error);
    throw error;
  }
}

export async function deleteData(collectionName: string, id: string) {
  try {
    const docRef = doc(firestore, collectionName, id);
    await deleteDoc(docRef);
    console.log(`Document with id ${id} has been deleted successfully.`);
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
}
