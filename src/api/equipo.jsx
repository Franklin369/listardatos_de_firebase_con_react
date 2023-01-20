import { db } from "./firebase.config";
import { collection, getDocs, query } from "firebase/firestore";
const conexion = collection(db, "equipo");
export async function Mostrarequipos() {
  const data = [];
  const q = query(conexion);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
}
