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
]
//terrarios en estilo harcodeado > quiero que sea dinamico

//RETORNA TODOS LOS TERRARIOS
export default function getTerrarios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(terrarios)
        }, 1500)
    })
}
//Primer parametro: (resolve, reject)
//Segundo parametro: el setTimeout de 1500 hace que la APP no se rompa


export function getItemsByCategory(cat) {
    return new Promise((resolve, reject) => {

        let itemFind = terrarios.filter((item) => {
            return item.category === cat
        });
        setTimeout(() => {
            if (itemFind) resolve(itemFind)
            else reject(new Error("item not found"))
        }, 1500)
    });
}


//RETORNA UN SOLO TERRARIO
export function getSingleItem(idItem) {
    return new Promise((resolve, reject) => {
        let itemFind = terrarios.find((item) => {
            return item.id === parseInt(idItem)
        });
        setTimeout(() => {
            if (itemFind) resolve(itemFind)
            else reject(new Error("Item no encontrado"))
        },1500)
    });
}