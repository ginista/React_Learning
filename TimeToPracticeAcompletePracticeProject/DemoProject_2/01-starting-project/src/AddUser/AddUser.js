import React, { useState, useRef } from "react";
import Button from '../Button/Button';
import Card from '../Card/Card'
import classes from './AddUser.module.css';
import ErrorModal from '../ErrorModal/ErrorModal';
import Wrapper from "../Helpers/Wrapper";
function AddUser(props) {
  //ref- store in real DOM node
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [usersDetails, setUsersDetails] = useState({
    userName: "",
    age: "",
  });
  const [showPopup, setShowPopup] = useState(false);
 const [error,setError] =useState('Fill the details ...cant be empty');
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
   
    setUsersDetails((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    const userName = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    // You can add the logic to store the user data or send it to a server here
    if((userName!=='' && age!=='')&& age>1){
    props.users(usersDetails);
    
    }
    else{
       setShowPopup(true);
       if(!(age)){
        setError('Cant be empty');
       }
       else{
        setError('age should be greater than 1');
        
       }
       
    }
    setUsersDetails({
      userName: "",
      age: "",
    });
  };

  return (
    <Wrapper>
    <Card className ={classes.input} key='g1'>
      <form >
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="userName" // Set the name attribute to identify the property in state
            value={usersDetails.userName}
            onChange={handleChange}
            ref={nameInputRef}
            
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age" // Set the name attribute to identify the property in state
            value={usersDetails.age}
            onChange={handleChange}
            ref={ageInputRef}
          />
        </div>
      
        <Button type="submit" onClick={handleAddUser}>
          Add User
        </Button>
      </form>
      
    </Card>
   { showPopup && (
        <ErrorModal
          message={error}
          onClose={handleClosePopup}
          key='g2'
        />
      )}
      </Wrapper>
  );
}

export default AddUser;
