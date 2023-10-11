import { createSlice } from '@reduxjs/toolkit'

export const todo = createSlice({
  name: 'todo',
  initialState : {
    get: [
        {
            id : 1 ,
            title : "Hello",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor rem ratione natus voluptatibus itaque!",
            comlited: false,
            colors: "white",
            img : "../assets/obj1.svg"
        },
      
    
    ],
    text:"",
    idx : null ,
    text2 : "",
    title : "",
    modal : false,
    color: "",
    filter : "",
    addModal : false
  },
  reducers: {
    
    handleChange:(state , action)=>{
      state[action.payload.value] = action.payload.answer
    },

    addTodo : (state,action) =>{
      let obj = {
        id : new Date().getTime(),
        title : state.text,
        text : state.text2,
        comlited : false ,
        colors : state.color
      }
      state.get.push(obj)
      state.text = ""
      state.text2 = ""
      state.addModal = false
    },

    deleteTodo : (state ,action) =>{
      state.get = state.get.filter((e)=>{
        return e.id != action.payload
      })
    },

    comlitedTodo : (state ,action)=>{
      state.get = state.get.map((e)=>{
        if(e.id == action.payload ){
         e.comlited = !e.comlited 
        }
        return e
      })
    },
    handleModal :(state ,action) =>{
      state.modal = true
      state.idx = action.payload.id
      state.title = action.payload.title   
      state.text = action.payload.text 
    },
    addHandleModal:(state ,action) =>{
      state.addModal = true
    },

    editTodo : (state , action) =>{
      state.get = state.get.map((e) =>{
        if(e.id == state.idx){
          e.title = state.title
          e.text = state.text2
        }
        return e
      })
      state.modal = false
    },
    colorFunck : (state ,action) => {
      state.color = action.payload.hex 
      console.log(action.payload.hex);
    }
  },

})

export const {handleChange, addTodo , deleteTodo,comlitedTodo ,editTodo ,handleModal ,filtr , search,colorFunck ,addHandleModal} = todo.actions

export default todo.reducer