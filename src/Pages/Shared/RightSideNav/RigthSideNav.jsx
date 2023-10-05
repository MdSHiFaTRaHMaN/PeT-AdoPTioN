import { FaGoogle, FaFacebook, FaInstagram ,FaTwitter} from 'react-icons/fa';
import Qimage1 from '../../../assets/qZone1.png'
import Qimage2 from '../../../assets/qZone2.png'
import Qimage3 from '../../../assets/qZone3.png'


const RigthSideNav = () => {
    return (
        <div className='border-l px-5'>
           <div className=''>
           <h2 className='text-center font-bold text-2xl mb-3'>Login With</h2>
           <div className='py-6 border border-sky-500 rounded text-center px-4'>
           <button className="btn mb-3 lg:w-full">
            <FaGoogle></FaGoogle> Google
            </button> <br /> 
           <button className="btn lg:w-full">
            <FaFacebook></FaFacebook>Facebook
            </button> 
           </div>
           </div>
           <div>
           <h2 className='text-center font-bold text-2xl mb-3'>Find Us On</h2>
              <a href="" className='p-4 flex gap-3 text-lg items-center border rounded-t-lg'>
                 <FaFacebook></FaFacebook> <span>Facebook</span>  
              </a>
              <a href="" className='p-4 flex gap-3 my-2 text-lg items-center border '>
                 <FaInstagram></FaInstagram> <span>Instragram</span>  
              </a>
              <a href="" className='p-4 flex gap-3 text-lg items-center border rounded-b-lg'>
                 <FaTwitter></FaTwitter> <span>Twitter</span>  
              </a>
           </div>
           <div className='p-4 space-y-3 mb-6'>
            <h2 className='text-3xl text-center'>Q Zone</h2>
            <img src={Qimage1} alt="" />
            <img src={Qimage2} alt="" />
            <img src={Qimage3} alt="" />

           </div>
        </div>
    );
};

export default RigthSideNav;