import {useRef, useEffect, useState} from 'react';

export default function Main(props) {

  const {data, showModal, handleToggleModal} = props;
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [imageWidth, setImageWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current && imageRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setImageWidth(imageRef.current.offsetWidth)
      }
    };

    if (imageRef.current) {
      imageRef.current.onload = updateDimensions;
    }

    return () => {
      if (imageRef.current) {
        imageRef.current.onload = null;
      }
    };
  }, [data]);

  return (
    <div onClick={() => {if (showModal) handleToggleModal();}} className="imgContainer" ref={containerRef}>
      <img src={data.hdurl} alt={data.title || 'APOD Image'} className="bgImage" ref={imageRef} />
    </div>
    
  )
}
