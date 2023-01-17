
import blobTop from '../assets/blob-top.png'
import blobBottom from '../assets/blob-bottom.png'

const Card = props => {
    return (
      <div className="bg-[#F5F7FB] font-karla text-[#293264] min-h-screen relative">
        <img src={blobTop} className='hidden md:block absolute right-0' alt='blob'/>
        <img src={blobBottom}  className='hidden md:block absolute bottom-0' alt='blob'/>
        {props.children}
      </div>
    );
}

export default Card