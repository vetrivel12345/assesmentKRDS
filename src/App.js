
import './App.css';
import axios from "axios"
import { Carousel } from 'antd';
import {useEffect, useState} from  "react";

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};


function App() {

  const [storeData,setStoreData]=useState([])
  const[logo,setLogo]=useState("")
  const getData=async()=>{
    let data=await axios.get("https://krds-assignment.github.io/aoc/api-assets/data.json")  
    setStoreData(data.data.features)
    setLogo(data.data.logo)
  }
  useEffect(()=>{
    getData()
  },[])
  const objColor={
    "Astonishing features requires worry-free security":"#41ca6e",
    "Be hooked!":"#fab153",
    "The best things in life are free":"#7277d5",
    "The thump never ends here":"#ff592a",
    "Being globally you":"#cf175d",
    "For the wise":"#4ec2e7"
  }
  return (
    <div className="main">
    <div className="Appdesktop">
    <div className="App">

    <img src={logo} alt="" style={{width:"10%",position:"absolute",left:"0%",padding:"1%"}}/>
    <div className='web' style={{display:"flex",width:"100%",flexWrap:"wrap"}}>
    {storeData.map(e=>(
      <div style={{width:"33%",backgroundColor:objColor[e.title] }}>
      <div style={{display:"flex",padding:"10%"}}>
      <div style={{width:"90%",position:"relative",top:"6em"}}>
      <div style={{width:"30%"}}>
      <img src={e.logo} alt="" style={{width:"100%"}} />
      </div>
      <p style={{fontSize:"smaller",width:"90%",textAlign:"initial"}}>{e.title}</p>
      <hr />
      <p style={{width:"150%",fontSize:"small",textAlign:"start"}}>{e.desc}</p>
      </div>
       <div style={{width:"70%"}}>
      <img src={e.image} alt="" style={{width:"100%"}}/> 
       </div>
      </div>
      </div>
    ))}
    </div>

     
    </div>
    </div>
    <div className="AppMobile">
    <div style={{width:"15%",margin:"3%"}}>
    <img src={logo} alt="" style={{backgroundColor:"black",width:"100%"}} />
    </div>
    <Carousel autoplay>
    { storeData.map((e)=>(
    <div>
      <div style={contentStyle,{backgroundColor:objColor[e.title],height:"40em",display:"flex",flexDirection:"column",alignItems:"center"}}>
      <div style={{padding:"3% 25%"}}>
      <div style={{width:"30%"}}>
      <img src={e.logo} alt="" style={{width:"100%"}} />
      </div>
      <br />
      <h3 style={{display:"flex",flexWrap:"wrap",width:"100%",justifyContent:"flex-start",fontSize:"large"}}>{e.title}</h3>
      <hr/>
      <p>{e.desc}</p>
      </div>
      <div style={{width:"30%"}}>
      <img src={e.image} alt="" style={{width:"100%"}} />
      </div>
      </div>
    </div>
    ))}
  </Carousel>,
    </div>
    </div>
  );
}

export default App;
