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
        id: 1,
        name: 'Hack GymLeco',
        description: 'Esta marca de máquinas las puedes encontrar en el gimnasio de CBUM. Es perfecta porque puedes regular la base, a diferencia de las hacks fijas.',
        image: 'https://fitnex.cl/cdn/shop/files/hacklift-244-plate-loaded-gym-machine-friviktsmaskin-gymleco-1.jpg?v=1707134631&width=750'
    },
    {
        id: 2,
        name: 'Leg Press GymLeco',
        description: 'Esta prensa es regulable de la base también, lo que la hace muy cómoda para personas con rangos de movimiento muy cortos o largos, ya que se ajusta tanto el respaldo, como la base (apoyo de pies)',
        image:  'https://fitnex.cl/cdn/shop/files/G243_1.jpg?v=1707134903&width=750',
    },
    {
        id: 3,
        name: 'Booty Builder Platinum',
        description: 'El fabricador de glúteos por excelencia. Buscamos lo mejor para ti.',
        image:  'https://fitnex.cl/cdn/shop/files/Booty_Builder_Platinum_4_0_6.jpg?v=1707135813&width=750',
    },
    {
        id: 4,
        name: 'Leg Extension ILUS',
        description: 'La ILUS Kairos Evolve Leg Extension es una máquina especializada, evolución de nuestra serie selectorizada de alta gama. Se enfoca en el entrenamiento de las extremidades inferiores; en específico en el desarrollo y fortalecimiento de los cuádriceps.',
        image:  'https://fitnex.cl/cdn/shop/files/Captura_de_pantalla_2024-02-05_a_la_s_09.27.26.png?v=1707136061&width=750',
    },
    {
        id: 5,
        name: 'ILUS 4 Stack Jungle',
        description: 'Para los verdaderos amantes del ejercicio; la ILUS 4 Stacks Jungle tiene todo lo necesario para entrenar con poleas en un espacio centralizado y reducido: Cuatro máquinas en una.',
        image:  'https://fitnex.cl/cdn/shop/files/Captura_de_pantalla_2024-02-05_a_la_s_09.30.26.png?v=1707136289&width=750',
    },
    {
        id: 6,
        name: 'ILUS Kairos Evolve Dual Pulley Pro',
        description: 'En la ILUS Kairos Evolve Dual Pulley pueden entrenar dos personas a la vez usando sus poleas de forma independiente. Cada salida de polea cuenta con tomadas enganchadas con mosquetones.',
        image:  'https://fitnex.cl/cdn/shop/files/Captura_de_pantalla_2024-02-05_a_la_s_09.33.20.png?v=1707136416&width=750',
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
    },
    {
        name: "Roberto",
        instagram: "https://www.instagram.com/",
        tiktok: "https://www.tiktok.com/",
        image: "/images/man-trainer.jpg",
        discipline: "Calistenia",
    },
    {
        name: "Carla",
        instagram: "https://www.instagram.com/",
        tiktok: "https://www.tiktok.com/",
        image: "/images/girl-trainer.jpg",
        discipline: "Yoga",
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