// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
    addDoc,
} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6-KmGhXFgbjuzK7PNAuf-vnXrwqeNZ4c",
    authDomain: "proyectofinaltienda-fcdb8.firebaseapp.com",
    projectId: "proyectofinaltienda-fcdb8",
    storageBucket: "proyectofinaltienda-fcdb8.appspot.com",
    messagingSenderId: "530640739033",
    appId: "1:530640739033:web:e03b64c93fb0ddce42bcc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


export async function getTerrarios() {
    const collectionRef = collection(firestore, "terrarios");
    let respuesta = await getDocs(collectionRef);

    let dataDocs = respuesta.docs.map((documento) => {
        let docFormateado = { ...documento.data(), id: documento.id }
        return docFormateado
    })
    return dataDocs;
}

export async function getSingleItem(idParams) {
    try {
        const docRef = doc(firestore, "terrarios", idParams);
        const docSnapshot = await getDoc(docRef)
        return { ...docSnapshot.data(), id: docSnapshot.id }
    } catch (error) {
        console.error(error)
    }
}

export async function getTerrariosByCategory(catParams) {
    const collectionRef = collection(firestore, "terrarios")
    const queryCategory = query(
        collectionRef, 
        where("category", "==", catParams))

    const respuesta = await getDocs(queryCategory)

    let dataDocs = respuesta.docs.map((documento) => {
        let docFormateado = { ...documento.data(), id: documento.id }
        return docFormateado
    })
    return dataDocs;
}

export async function createBuyOrder(orderData) {
    const collectionRef = collection(firestore, "orders")
    const respuesta = await addDoc(collectionRef, orderData)

    return respuesta.id;
}

/*
export async function exportDataToFirestore() {
    const terrarios = [
        {
            id: 1,
            name: "Terrario1",
            type: "abierto",
            plants: "suculentas",
            pot: "cilindro",
            potSize: "grande",
            price: 8000,
            dues: 3,
            offer: false,
            stock: 3,
            category: "cilindro",
            detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
            img: '/assets/images/terrariosImg/terrarios001.jpg',
            // en el url de img tengo que poner una barra ( / ) siosi
        },
        {
            id: 2,
            name: "Terrario2",
            type: "abierto",
            plants: "suculentas",
            pot: "pecera",
            potSize: "grande",
            price: 8000,
            dues: 3,
            offer: false,
            stock: 3,
            category: "pecera",
            detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
            img: '/assets/images/terrariosImg/terrarios002.jpg',
        },
        {
            id: 3,
            name: "Terrario3",
            type: "abierto",
            plants: "suculentas",
            pot: "cilindro",
            potSize: "mediano",
            price: 6000,
            dues: 3,
            offer: false,
            stock: 3,
            category: "cilindro",
            detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
            img: '/assets/images/terrariosImg/terrarios003.jpg',
        },
        {
            id: 4,
            name: "Terrario4",
            type: "abierto",
            plants: "suculentas",
            pot: "cilindro",
            potSize: "grande",
            price: 8000,
            dues: 3,
            offer: false,
            stock: 3,
            category: "cilindro",
            detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
            img: '/assets/images/terrariosImg/terrarios004.jpg',
        },
        {
            id: 5,
            name: "Terrario5",
            type: "abierto",
            plants: "suculentas",
            pot: "cilindro",
            potSize: "chico",
            price: 4000,
            dues: 3,
            offer: false,
            stock: 3,
            category: "cilindro",
            detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
            img: '/assets/images/terrariosImg/terrarios005.jpg',
        },
        {
            id: 6,
            name: "Terrario6",
            type: "abierto",
            plants: "suculentas",
            pot: "cilindro",
            potSize: "grande",
            price: 8000,
            dues: 3,
            offer: false,
            stock: 3,
            category: "cilindro",
            detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
            img: '/assets/images/terrariosImg/terrarios006.jpg',
        },
        {
            id: 7,
            name: "Terrario7",
            type: "abierto",
            plants: "suculentas",
            pot: "pecera",
            potSize: "grande",
            price: 8000,
            dues: 3,
            offer: false,
            stock: 3,
            category: "pecera",
            detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
            img: '/assets/images/terrariosImg/terrarios007.jpg',
        },
        {
            id: 8,
            name: "Terrario8",
            type: "abierto",
            plants: "suculentas",
            pot: "pecera",
            potSize: "mediano",
            price: 6000,
            dues: 3,
            offer: false,
            stock: 3,
            category: "pecera",
            detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
            img: '/assets/images/terrariosImg/terrarios008.jpg',
        },
        {
            id: 9,
            name: "Terrario9",
            type: "abierto",
            plants: "suculentas",
            pot: "pecera",
            potSize: "grande",
            price: 8000,
            dues: 3,
            offer: false,
            stock: 3,
            category: "pecera",
            detail: "Te presentamos el Terrario Kalanchoe Oliva, lleno de color. Un mundo de Suculentas y Kalanchoes que enamora.",
            img: '/assets/images/terrariosImg/terrarios009.jpg',
        },
    ];

    const collectionRef = collection(firestore, "terrarios");

    for (let item of terrarios) {
        const newDoc = await addDoc(collectionRef, item);
        console.log("Doc created", newDoc.id);
    }
}
*/

export default {firestore};