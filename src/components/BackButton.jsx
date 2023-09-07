import {Link} from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';

// eslint-disable-next-line react/prop-types
const BackButton = ({ destination = '/' })=>{
return (
    <div className='flex'>
 <Link to={destination}
 className='bg-sky-800 text'
 >
    <BsArrowLeft className='text-2xl' />
 </Link>
    </div>
)
}
export default BackButton