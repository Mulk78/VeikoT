import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import categoriesFromFile from "../../data/categories.json";
import { TextField } from '@mui/material';
import { useRef } from 'react';

function MaintainCategories() {
  const [categories, setCategories] = useState (categoriesFromFile);
  const categoryRef = useRef();

  const addCategory = () => {
    categoriesFromFile.push({ "name": categoryRef.current.value});
    setCategories(categoriesFromFile.slice());
    categoryRef.current.value = ""; //see tühjendab sisestusvälja peale sisestamist
  }
  const deleteCategory = (index)=>{
    categoriesFromFile.splice(index,1);
    setCategories(categoriesFromFile.slice());
  }
  return (
    <div>
      <br />
      Millegipärast see Textfield lahendus ei tööta nii nagu peaks. <br /><br />
      <TextField label="New category" ref={categoryRef} type="text" ></TextField>
      <br />
      <Button variant="outline-dark" onClick={addCategory} >Add category</Button>

      <br /><br /><br />
      <label>Uus kategooria</label><br />
      <input ref={categoryRef} type="text" /> <br />
      <Button variant="outline-dark" onClick={addCategory} >Add category</Button>
      {categories.map((element, index) => (
        <div key={index}> 
          {element.name} <Button variant="outline-dark" onClick={() => deleteCategory(index)} >Delete</Button> 
        </div>))}


    </div>
  )
}

export default MaintainCategories