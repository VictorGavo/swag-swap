import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: '/images/hats.webp',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: '/images/jackets.webp',
    },
    {
      id: 3,
      title: 'footwear',
      imageUrl: '/images/footwear.webp',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: '/images/womens.webp',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: '/images/mens.webp',
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
