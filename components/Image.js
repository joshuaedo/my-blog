import { useEffect, useState } from 'react';

const Image = ({ ...props }) => {
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img {...props} loading='lazy' decoding='async' />;
};

const ZoomableImage = ({ className, alt, width, height, ...props }) => {
  const [cursorClass, setCursorClass] = useState < string > 'cursor-zoom-in';

  useEffect(() => {
    const image = document.getElementById('zoomable-image');
    let currentZoom = 1;
    const minZoom = 1;
    const maxZoom = 3;
    const stepSize = 0.1;

    function handleWheel(event) {
      // Zoom in or out based on the scroll direction
      const direction = event.deltaY > 0 ? -1 : 1;
      zoomImage(direction);
    }

    function zoomImage(direction) {
      const newZoom = currentZoom + direction * stepSize;

      if (newZoom < minZoom || newZoom > maxZoom) {
        return;
      }

      currentZoom = newZoom;

      image.style.transform = `scale(${currentZoom})`;

      const newCursorClass =
        direction === 1 ? 'cursor-zoom-in' : 'cursor-zoom-out';

      setCursorClass(newCursorClass);
    }

    setCursorClass('cursor-zoom-in');

    image.addEventListener('wheel', handleWheel);

    return () => {
      image.removeEventListener('wheel', handleWheel);
      image.style.transform = 'scale(1)';
      setCursorClass('cursor-zoom-in');
    };
  }, [setCursorClass]);

  return (
    <Image
      id='zoomable-image'
      className={`${className} ${cursorClass}`}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
};

export { Image as default, ZoomableImage };
