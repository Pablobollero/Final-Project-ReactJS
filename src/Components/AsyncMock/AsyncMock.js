const product = [
  {
    id:'1',
    name:'Classic Roll',
    price:2.5,
    category:'masPedido',
    img:'../img/classic.jpg',
    stock:10,
    description:'Un clásico cinamón roll con la mezcla perfecta de canela y azúcar, envuelto en una masa suave y horneado a la perfección. Ideal para los amantes del sabor tradicional.'
    
  },
  {
    id: '2',
    name: 'Lemon Pie Roll',
    price: 1.99,
    category: 'muyPronto',
    img: '../img/lemonpie.jpg',
    stock: 5,
    description: 'Un cinamón roll con un giro refrescante. Relleno de deliciosa crema de limón y espolvoreado con azúcar glas. Un sabor cítrico y dulce que te sorprenderá.'
  },
  {
    id: '3',
    name: 'Pistacho Roll',
    price: 3,
    category: 'muyPronto',
    img: '../img/pistacho.jpg',
    stock: 8,
    description: 'Este cinamón roll está lleno de pistachos tostados y triturados, lo que le da un delicioso sabor y un toque de textura crujiente. Perfecto para los amantes de los frutos secos.'
  },
  {
    id: '4',
    name: 'Strawberries Roll',
    price: 4.2,
    category: 'masPedido',
    img: '../img/strawberrie.jpg',
    stock: 15,
    description: 'Un cinamón roll fresco y afrutado con fresas jugosas. Relleno con fresas picadas y espolvoreado con azúcar glas, es una explosión de sabor a frutas rojas.'
  }
];

export const getProduct = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(product)
    }, 1500)
  })
}

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(product.find(prod => prod.id === productId))
    }, 1500)
  })
}

export const getProductByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(product.find(prod => prod.category === productCategory))
    }, 1500)
  })
}