import React from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
  Radio,
  Select,
  Option,
  Rating,
  checkbox,
} from "@material-tailwind/react";
import { useFormik } from 'formik';

const radioData = [
  {values: 'news', color: 'blue', label: 'News'},
  {values: 'travel', color: 'green', label: 'Travel'},
];
const checkData = [
  { color:'blue',label:'Blue' },
  { color:'red',label:'Red' },
  { color:'green',label:'Green'},
  { color:'amber',label:'Amber' }
]


const AddForm = () => {
  const {handleChange, handleSubmit, values, errors} =useFormik({
    initialValues:{
      title:'',
      author: '',
      blogType: '',
      example: [], 
      country:'',
      rating: '',
      description: ''

    }

  })

  return (
    <div className='p-10 w-[500px] max-w-screen-lg sm:w-96'>
          <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Add Blog
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
     Enter Blog Details
      </Typography>
      <form className="mt-8 mb-2 ">
        <div className="mb-1 flex flex-col gap-6">
          
          <Input
           name='title'
           onChange={handleChange}
           value={values.title}
            size="lg"
            placeholder="Type Your Blog Here"
            label='Blog Title'
            
          />
          <Input
          name='author'
          onChange={handleChange}
          value={values.author  }
            size="lg"
            label='Author'
            
          />
          <Typography className='font-bold'>Blog Type</Typography>
          <div>{radioData.map((rad, i)=>{
            return <Radio key={i} name='blogType' label={rad.label} color={rad.color} values={rad.values} onChange={handleChange}  />
          })}
          </div>
          <Typography className='font-bold'>Example</Typography>
          <div className="flex w-max gap-4">
            {checkData.map((check, i)=>{
              return <Checkbox key={i} color={check.color} label={check.label}/>

            })}
             
             
          </div>
          <div className="w-72">
             <Select label="Select Country">
               <Option>Nepal</Option>
               <Option>India</Option>
               <Option>Pakistan</Option>
               <Option>Bangladesh</Option>
               <Option>Afganistan</Option>
               <Option>Bhutan</Option>
               <Option>Maldives</Option>
               <Option>Srilanka</Option>
             </Select>
          
       </div>
       <div>
        <Typography className='font-bold' >Rating</Typography>
        <Rating />
       </div>
       <div>
        <Input type='file'
        label='Select image' />
       </div>
          <div>
            <Textarea label='Description' />
          </div>
        </div>
        
        <Button className="mt-6" fullWidth>
          Submit
        </Button>
        
      </form>
    </Card>

    </div>
 
  )
}

export default AddForm