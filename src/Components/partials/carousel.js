 import React,{useState} from 'react';
 import { Carousel} from 'react-bootstrap';

const CarouselBox = (props)=>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return(
        <Carousel activeIndex={index} onSelect={handleSelect}>
             {
                props.images.map(x=>
                    <Carousel.Item>
                        <img className="img-blur" src={x} className="image-carousel"></img>
          
                    </Carousel.Item>)
            }
      </Carousel>
    )
}
export default CarouselBox;