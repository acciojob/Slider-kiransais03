import React, { useEffect, useState,useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";


library.add(faBackward);
library.add(faHouse);
library.add(faForward)


library.add(faBackward);

const Slider = ()=>{


    let [viewno,setViewno] = useState(0);

let data =[
    {
      id: 1,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
      name: 'maria ferguson',
      title: 'office manager',
      quote:
        'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      name: 'john doe',
      title: 'regular guy',
      quote:
        'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
    },
    {
      id: 3,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
      name: 'peter smith',
      title: 'product designer',
      quote:
        'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
    },
    {
      id: 4,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      name: 'susan andersen',
      title: 'the boss',
      quote:
        'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
    },
  ];


  function backward () {
    if(viewno===0)
    {
        console.log("hello")
        setViewno(3);
        return;
    }
    setViewno(viewno-1);
  }

  function forward () {
    if(viewno===3)
    {
        setViewno(0);
        return;
    }
    setViewno(viewno+1);
  }


    setTimeout(()=>{if(viewno===3){setViewno(0)} else {console.log("ok"); setViewno(viewno+1)}},3000);

  

    return(<div id="review-container">
        <div  className="icon1" onClick={backward}><FontAwesomeIcon icon="fa-solid fa-backward" size="2xl"/></div>
      {data.map((elemobj,index)=>{if(index===viewno){return (<div key={index}>
        <div id={`person-${index}`}>{elemobj.name}</div>
        <div id={` person-${index}-image `}><img style={{width:"1000px",height:"480px"}} src={elemobj.image} alt={index}/></div>
        </div>)}})}
        
        <div  className="icon1" onClick={forward}><FontAwesomeIcon icon="fa-solid fa-forward" size="2xl"/></div>
        </div>)
}
export default Slider;