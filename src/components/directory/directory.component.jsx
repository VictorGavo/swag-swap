import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles.jsx';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: '/images/hats.webp',
    route: 'shop/hats'
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: '/images/jackets.webp',
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: 'footwear',
    imageUrl: '/images/footwear.webp',
    route: 'shop/footwear'
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: '/images/womens.webp',
    route: 'shop/womens'
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: '/images/mens.webp',
    route: 'shop/mens'
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;