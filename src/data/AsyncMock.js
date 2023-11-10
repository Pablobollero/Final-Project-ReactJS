const productos = [
    {
      id: 1,
      title: 'Classic Roll',
      img: '../img/classic.jpg',
      description: 'Un clásico cinamón roll con la mezcla perfecta de canela y azúcar, envuelto en una masa suave y horneado a la perfección. Ideal para los amantes del sabor tradicional.',
      price: 2.5,
      stock: 10
    },
    {
      id: '2',
      title: 'Lemon Pie Roll',
      img: '../img/lemonpie.jpg',
      description: 'Un cinamón roll con un giro refrescante. Relleno de deliciosa crema de limón y espolvoreado con azúcar glas. Un sabor cítrico y dulce que te sorprenderá.',
      price: 1.99,
      stock: 5
    },
    {
      id: 3,
      title: 'Pistacho Roll',
      img: '../img/pistacho.jpg',
      description: 'Este cinamón roll está lleno de pistachos tostados y triturados, lo que le da un delicioso sabor y un toque de textura crujiente. Perfecto para los amantes de los frutos secos.',
      price: 3,
      stock: 8
    },
    {
      id: '4',
      title: 'Strawberries Roll',
      img: '../img/strawberrie.jpg',
      description: 'Un cinamón roll fresco y afrutado con fresas jugosas. Relleno con fresas picadas y espolvoreado con azúcar glas, es una explosión de sabor a frutas rojas.',
      price: 4.2,
      stock: 15
    }
  ];

  export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
  }

  export const getProductsById = (productosId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const foundProduct = productos.find(prod => prod.id === productosId);
        resolve(foundProduct ? [foundProduct] : []);
      }, 2000);
    });
  };