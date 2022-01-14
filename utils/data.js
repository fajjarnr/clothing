import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'user',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Black Basic Tee',
      slug: 'black-basic-tee',
      category: 'Shirts',
      image: '/images/favorite-1.jpg',
      isFeatured: true,
      featuredImage: '/images/banner1.jpg',
      price: 32,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Off-White Basic Tee',
      slug: 'off-white-basic-tee',
      category: 'Shirts',
      image: '/images/favorite-2.jpg',
      isFeatured: true,
      featuredImage: '/images/banner2.jpg',
      price: 32,
      brand: 'Adidas',
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Mountains Artwork Tee',
      slug: 'mountains-artwork-tee',
      category: 'Shirts',
      image: '/images/favorite-3.jpg',
      price: 36,
      brand: 'Raymond',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
  ],
};

export default data;
