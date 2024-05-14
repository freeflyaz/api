import './App.css'
import { useEffect, useState } from 'react';

interface Post {
  userId : number;
  id: number;
  title : string;
  body : string;

}

function App() {
  const [ data, SetData ] = useState<Post[]> ([])

  useEffect ( () => {
    fetchData();
  },[])

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response) {
        throw new Error ('Network response was not ok')
      }
      const data : Post[] = await response.json();
    //  console.log(data);
      SetData(data)

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    {console.log(data)}
    <ul>
    {data.map((item: Post)=>(
      <li key={item.id}> 
     <h3>User ID: {item.userId} </h3>
     <p>{item.title}</p>
     <p>Post Number : {item.id}</p>
     <p>{item.body}</p>  
       
      
       </li>
    ))
  }
    </ul>
    </>
  )
}

export default App
