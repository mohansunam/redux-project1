import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Search from "./Components/Search";
import { Button, Input } from "@material-tailwind/react";


const App = () => {
  const [search, setSearch] = useState('Search');
  const [data, setData]= useState();
  const formik = useFormik({
    initialValues:{
      search:'',
    },
    onSubmit:(value)=>{
      setSearch(value.search);
    }
   })
  const getData = async () =>{
    try{ const response = await axios.get(`http://www.omdbapi.com?apikey=6905a701&s=${search}`);
      setData(response.data.Search)
    } catch(err){}
  }
     useEffect(()=>{
      getData();
    }, [search])
    console.log(data)

  return (
    <div className='p-6 space-y-4'>
      <div className='w-[100%] flex justify-center'>
         <form onSubmit={formik.handleSubmit} className='flex   align-middle gap-4 '>  
        <Input className='w-[400px]'
        name='search'
        value={formik.values.search}
        onChange={formik.handleChange}
         type='text'label='' placeholder='Search Movie Name'/>
        <Button type='submit' className='p-1 px-3'>Search Movie</Button>
        </form>  
        </div>
        <div className='grid grid-cols-5 gap-3'>{data?.map((val)=>{
          return <Search key={val.imdbID}
          title={val.Title} year={val.Year}
          type={val.Type} img={val.Poster}/>
        })}
        </div>
    
      
      
  
      </div>

      

  )
}

export default App
