import { createSlice } from "@reduxjs/toolkit";





export const blogSlice = createSlice({
  name:'blogslice',
  initialState:{
    blogs:[]

  },
  reducers:{
    addToBlog: (state, action)=>{
      state.blogs.push(action.payload);

    },
    removeBlog: ()=>{

    }
  }
})
export const {addToBlog}= blogSlice.actions;




const r = [
  {id:1, name:'Ram'},
  {id:2, name:'Shyam'},
  {id:3, name:'Hari'},
  {id:4, name:'Chandra'}
]
const john = r.find((c)=>{
  c.name === 'Shyam'

})
console.log(john)