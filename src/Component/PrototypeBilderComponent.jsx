import * as React from 'react';

import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';

import slides from '../data/prototype_bilder';
import "yet-another-react-lightbox/styles.css";

export default function PrototypeBilder() {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <div className="animate-once animate-fade-up">
      <PhotoAlbum
          layout="rows"
          photos={slides}
          targetRowHeight={150}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={slides}
        />
    </div>
    </>
  )
}
