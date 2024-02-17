import { useState, useEffect } from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid';

const Tag = ({ children }) => (
  <div className='bg-gray-100 border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600'>
    {children}
  </div>
);

const ProductCard = ({ imageUrl, title }) => (
  <div className='mb-8'>
    <div className='relative rounded-lg overflow-hidden shadow-lg'>
      <img src={imageUrl} alt={title} className='w-full h-60 object-cover' />
      <div className='absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent'>
        <h3 className='text-white text-lg font-semibold'>{title}</h3>
        <div className='flex space-x-2 mt-2'>
          <Tag>SST</Tag>
          <Tag>React</Tag>
          <Tag>Astro</Tag>
        </div>
      </div>
    </div>
  </div>
);

function LandingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products or receive them via props
    // This is a placeholder until the actual data fetching logic is implemented
    const fetchedProducts = [
      {
        imageUrl: '/images/3767d2f93757584e53fd03a2f96194d4110754c3.png',
        title: 'Some cool app',
      },
      // ... more products
    ];
    setProducts(fetchedProducts);
  }, []);

  const handleProductClick = (product) => {
    // Placeholder for product click handler logic
    console.log(`Product clicked: ${product.title}`);
  };

  return (
    <div className='bg-white w-full min-h-screen'>
      <div className='text-center py-12'>
        <h1 className='text-4xl font-bold text-gray-900'>
          See all the cool things people have built
        </h1>
      </div>
      <div className='px-4 md:px-8 lg:px-16'>
        {products.map((product, index) => (
          <div key={index} onClick={() => handleProductClick(product)}>
            <ProductCard imageUrl={product.imageUrl} title={product.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
