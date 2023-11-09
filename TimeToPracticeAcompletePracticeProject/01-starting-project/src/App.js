import React,{useState} from 'react';
import Header from './Header';
import InvestForm from './InvestForm';
import Result from './Result';

function App() {
  const [initialInvestment, setInitialInvestment] = useState();
  const [myData, setMyData] = useState(null);
  const handleFormSubmit = (formData) => {
    // Handle the form data here if needed in the App component
    console.log(formData);
     setMyData(formData);
     

  };
  const initial = (currentSavings) =>{
    setInitialInvestment(currentSavings);
  }

  return (
    <div>
      <Header />
      <InvestForm  data ={handleFormSubmit} sendDataToParent={initial}/>
      {myData ? <Result yearlyData={myData} initial = {initialInvestment}/>:<p style = {{textAlign : 'center'}}>No results found</p>}
    </div>
  );
}

export default App;
