export const tabs = [
    {
        name: 'Inicio',
        href: '/'
    },
    {
        name: 'Planes',
        href: '/planes'
    },
    {
        name: 'Ubicaciones',
        href: '/ubicaciones'
    },
    {
        name: 'Tienda',
        href: '/tienda'
    },
    {
        name: 'Nosotros',
        href: '/nosotros'
    },
    {
        name: 'Blog',
        href: '/blog'
    }
];

export const machines = [
    {
        id: 2,
        name: 'Squat Master 5000',
        description: 'Equipment for full-body squats and lunges',
        image:  '/images/hacklift-244.webp',
    },
    {
        id: 3,
        name: 'LegPress Pro',
        description: 'Professional-grade leg press machine for lower body strength training',
        image:  '/images/hacklift-244.webp',
    },
    {
        id: 4,
        name: 'GluteBlaster X2',
        description: 'Advanced device for targeted glute activation and development',
        image:  '/images/hacklift-244.webp',
    },
    {
        id: 5,
        name: 'QuadSculptor 3000',
        description: 'Cutting-edge quad training machine for sculpting thighs and quads',
        image:  '/images/hacklift-244.webp',
    },
    {
        id: 6,
        name: 'HamstringMaster 2000',
        description: 'Specialized equipment for isolating and strengthening hamstrings',
        image:  '/images/hacklift-244.webp',
    }
];

export const products = [
    {
        id: 1,
        name: 'Creatina',
        price: 23500,
        brand: 'Nutrex',
        imagePath: '/images/creatina.jpg',
        description: '',
        stock: 100,
    },
    {
        id: 2,
        name: 'Proteina Whey',
        price: 49990,
        brand: 'Dymatize',
        imagePath: '/images/protein.jpg',
        description: '',
        stock: 100,
    },
    {
        id: 3,
        name: 'Shaker',
        price: 49990,
        brand: 'Dymatize',
        imagePath: '/images/shaker.jpg',
        description: '',
        stock: 100,
    },
    {
        id: 4,
        name: 'Proteina Whey',
        price: 49990,
        brand: 'Dymatize',
        imagePath: '/images/creatina.jpg',
        description: '',
        stock: 100,
    }
];

export const trainers = [
    {
        name: "Carlos",
        instagram: "https://www.instagram.com/",
        tiktok: "https://www.tiktok.com/",
        image: "/images/man-trainer.jpg",
        discipline: "Kickboxing",
    },
    {
        name: "Julia",
        instagram: "https://www.instagram.com/",
        tiktok: "https://www.tiktok.com/",
        image: "/images/girl-trainer.jpg",
        discipline: "Pilates",
    }
];

export const gyms = [
    {
        id: 1,
        name: "Rivanex",
        address: "Quillota 54, Viña del Mar, Chile",
        location: "Viña del Mar",
        contact: "+56 9 1234 5678",
        coordinates: { lat: -33.024258, lng: -71.549009 },
    },
];

export const planes = [
    {
        id: 4,
        price: 6990,
        name: 'Pase diario',
        features: [
            { id: 1, name: 'Trae cuantos clientes quieras' },
            { id: 2, name: 'Acceso a área de cardio' },
            { id: 3, name: 'Acceso a área de pesas' },
            { id: 4, name: 'Acceso a sauna' },
        ],
        stock: 100
    },
    { 
        id: 1, 
        name: '1 mes', 
        price: 42990,
        features: [
            { id: 1, name: 'Acceso a clases grupales' },
            { id: 2, name: 'Acceso a área de cardio' },
        ],
        stock: 100
    },
    {
        id: 2,
        name: '3 meses',
        price: 114990,
        features: [
            { id: 1, name: 'Acceso a clases grupales' },
            { id: 2, name: 'Acceso a área de cardio' },
            { id: 3, name: 'Acceso a área de pesas' },
        ],
        stock: 100
    },
    {
        id: 3,
        price: 199990,
        name: '6 meses',
        features: [
            { id: 1, name: 'Acceso a clases grupales' },
            { id: 2, name: 'Acceso a área de cardio' },
            { id: 3, name: 'Acceso a área de pesas' },
            { id: 4, name: 'Acceso a sauna' },
        ],
        stock: 100
    },
    {
        id: 5,
        price: 28990,
        name: 'Plan AM',
        features: [
            { id: 1, name: 'Trae cuantos clientes quieras' },
            { id: 2, name: 'Acceso a área de cardio' },
            { id: 3, name: 'Acceso a área de pesas' },
            { id: 4, name: 'Acceso a sauna' },
        ],
        stock: 0
    },
];

export const members = [
    {
        id: 1,
        name: 'Tomás',
        lastName: 'Peréz',
        rut: '12 345 678 - 9',
        createdAt: '16/03/2024',
        isActive: true
    },
    {
        "id": 2,
        "name": "Ana",
        "lastName": "González",
        "rut": "11 222 333 - 4",
        "createdAt": "22/02/2024",
        "active": false
    },
    {
        "id": 3,
        "name": "Carlos",
        "lastName": "Martínez",
        "rut": "98 765 432 - 1",
        "createdAt": "05/01/2024",
        "isActive": true
    },
    {
        "id": 4,
        "name": "Laura",
        "lastName": "López",
        "rut": "44 555 666 - 7",
        "createdAt": "11/04/2024",
        "isActive": true
    },
    {
        "id": 5,
        "name": "Juan",
        "lastName": "Rodríguez",
        "rut": "23 456 789 - 0",
        "createdAt": "03/06/2024",
        "isActive": false
    },
    {
        "id": 6,
        "name": "María",
        "lastName": "Fernández",
        "rut": "00 111 222 - 3",
        "createdAt": "19/07/2024",
        "isActive": true
    }
];