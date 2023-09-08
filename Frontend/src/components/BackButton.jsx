
import { Link } from 'react-router-dom';
import { BsArrowLeft} from 'react-icons/bs'
import PropTypes from 'prop-types';


const Backbutton = ({destination='/'}) => {
  return (
    <div className='flex'>
        <Link to={destination}
        className='bg-sky-200 text-white px-4 py-1 rounded-lg w-fit'>
            <BsArrowLeft className='text 2xl:'></BsArrowLeft>
        </Link>
    </div>
  )
}
Backbutton.propTypes = {
    destination: PropTypes.string, // Assuming destination is a string
  };

export default Backbutton;