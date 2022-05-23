import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [order,setOrder]=useState("asc")
  const [titl,setTitl]=useState("Sort by Descending Salary")
 useEffect(()=>{
   fetchdata({page,order})
 },[page,order])

  const fetchdata=async({page,order})=>{
    setLoading(true);
    
   
    axios({method:"get",
   url:"https://json-server-mocker-masai.herokuapp.com/candidates",
   //url:"http://localhost:8080/candidates",
   params:{
     _page:page,
     _limit:5,
     _sort:"salary",
     _order:`${order}`
   }})
   .then(res=>{
       console.log(res)
       setData(res.data)
       setLoading(false);
   })
   .catch(err=>{
     setLoading(false);
   })
  }

  const changeorder=()=>{
    if(order=="asc"){
      setOrder("desc")
      setTitl("Sort by Ascending Salary")
      fetchdata()
    }
    else{
      setOrder("asc")
      setTitl("Sort by Descending Salary")
      fetchdata()
    }
  }
  console.log(data)
  return (
    <div className="App">
      <div>
        {loading && <div id="loading-container">...Loading</div>}
        <Button id="SORT_BUTTON" onClick={changeorder} title={titl}/>
        <Button title="PREV" disabled={page===1} onClick={()=>setPage(page-1)} id="PREV" />
        <Button id="NEXT" title="NEXT" onClick={()=>setPage(page+1)} />
      </div>
      {data.map((item) => (
        <div key={item.id}>
          <CandidateCard image={item.avatar} name={item.name} company={item.company_name} title={item.title} salary={item.salary}/>
        </div>
      ))}
    </div>
  );
}


