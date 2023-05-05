import proto1 from '../img/prototype/Andri (16) edit.jpg';
import proto2 from '../img/prototype/Andri (18) edit.jpg';
import proto3 from '../img/prototype/Andri (21) edit.jpg';
import proto4 from '../img/prototype/Andri (22) edit.jpg';
import proto5 from '../img/prototype/Andri (23) edit.jpg';
import proto6 from '../img/prototype/Andri (24) edit.jpg';

const bilder = [
  {
    id: 1,
    src:
      proto6,
    width: 2000,
    height: 1600,
  },
  {
    id: 2,
    src:
      proto2,
    width: 2000,
    height: 1600,
  },
  {
    id: 3,
    src:
      proto3,
    width: 2000,
    height: 1600,
  },
  {
    id: 4,
    src:
      proto4,
    width: 2000,
    height: 1600,
  },
  {
    id: 5,
    src:
      proto5,
    width: 2000,
    height: 1600,
  },
  {
    id: 6,
    src:
      proto1,
    width: 2000,
    height: 1600,
  },
]


export const slides = bilder.map((photo) => {
  const width = photo.width * 4;
  const height = photo.height * 4;
  return {
    src: photo.src,
    width,
    height,
  };
});

export default slides;
