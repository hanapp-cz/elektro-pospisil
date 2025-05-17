import Image from 'next/image';

import { cn } from '@/utils/cn';

import photo1 from '../../public/images/photo1.jpg';
import photo2 from '../../public/images/photo2.jpg';
import photo3 from '../../public/images/photo3.jpg';
import photo4 from '../../public/images/photo4.jpg';
import photo5 from '../../public/images/photo5.jpg';
import photo6 from '../../public/images/photo6.jpg';
import photo7 from '../../public/images/photo7.jpg';
import photo8 from '../../public/images/photo8.jpg';
import styles from './PhotoCollage.module.css';

const photos = [
  { id: 1, src: photo1, className: styles.photo1 },
  { id: 2, src: photo2, className: styles.photo2 },
  { id: 3, src: photo3, className: styles.photo3 },
  { id: 4, src: photo4, className: styles.photo4 },
  { id: 5, src: photo5, className: styles.photo5 },
  { id: 6, src: photo6, className: styles.photo6 },
  { id: 7, src: photo7, className: styles.photo7 },
  { id: 8, src: photo8, className: styles.photo8 },
];

export const PhotoCollage = () => (
  <div
    className={cn(
      "relative size-80",
      "md:float-left md:mr-6 md:mb-2",
      "md:rounded-br-[20%] md:rounded-tr-[25%]",
      "md:[shape-outside:margin-box]"
    )}
  >
    {photos.map((photo) => (
      <div
        key={photo.id}
        className={`${styles.photoWrapper} ${photo.className}`}
      >
        <Image
          src={photo.src}
          alt="" // decorative
          fill
          sizes="(max-width: 320px) 100vw, 320px"
          className={"object-cover"}
        />
      </div>
    ))}
  </div>
);
