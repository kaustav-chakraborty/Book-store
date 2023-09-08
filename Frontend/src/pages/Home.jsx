import  { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/spinner';

import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
//import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox,} from 'react-icons/md';
import BooksTable from '../components/BooksTable';
//import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:8888/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (<div className='p-4'>
    <div className='flex justify-between items-center'>
      <h1 className='text-3xl my-8'>Book list</h1>
      <Link to='/books/create'>
        <MdOutlineAddBox className='text-sky-400 text 4xl'></MdOutlineAddBox>
      </Link>
    </div>
    {loading?(
      <Spinner></Spinner>

    ):(<BooksTable books={books}></BooksTable>)}

  </div>

  )
}

export default Home;