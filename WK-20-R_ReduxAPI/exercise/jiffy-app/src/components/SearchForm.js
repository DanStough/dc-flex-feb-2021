import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function SearchForm() {
  const formData = {term:''};
  const handleChange = (e) => {
    e.preventDefault();
    // formData.term = e.target.value
    console.log(e.target[0].value)
    return formData.term = e.target[0].value;
    
  }
  return (
    <Form onSubmit={handleChange}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Search Term</Form.Label>
        <Form.Control type="text" />
        <Form.Text className="text-muted">
          what type of gif are you looking for?
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
   );
  // return null;
};
  export default SearchForm;