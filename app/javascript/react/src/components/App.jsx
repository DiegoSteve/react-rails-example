import * as React from 'react'                          
import * as ReactDOM from 'react-dom'
import {Bye} from "./Bye"                   
                                                        
export const App = () => { 
  const name = "Diego"                                  
  return (
    <>
    <div>Hello, Rails 7!</div>
    <Bye name={name}/>
    </>
  )                   
}                                                       
                                        
// Use it if you don't plan to use "remount"                
 document.addEventListener('DOMContentLoaded', () => {     
  ReactDOM.render(<App />, document.getElementById('app'))                  
})                                                    
                                                        
