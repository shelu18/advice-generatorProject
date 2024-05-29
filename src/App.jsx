import React from 'react';
import './App.css';
import axios from 'axios';
// class based component 
class App extends  React.Component {
  state = { advise: ''}//state is like a global variable which holds the important information of the component 
  componentDidMount(){//component Didmount is a lifecycle method which is called when the component is mounted into dom initially 
    this.fetchAdvice();
  }
  // we make a seprate function under this class to get the data from the api
  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')//  by doing this we have made the call for the data from the api and stored it 
    .then((response) => {
    //wer apply destructuring on the advice that we have got from the api
    const { advice } = response.data.slip;
    this.setState({  advice }); 
                                     // console.log(response.data.slip.advice);   // now we have to get the data from the api and store it in the state  exactly by navigating at deeper level
    })
    .catch((error) => {
      console.log(error);
    });
  }


  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className = "card">
         <h1 className = "heading" >   {advice}</h1> {/*the advice will not display here out of scope that reason we will use the state to display the advice and destructuring to get the advice*/}
          <button className="button" onClick={this.fetchAdvice}>
            <span>Give me advice!</span>
           </button>
          </div>
       </div>
          
    );
        
     
  }
}
export default App;