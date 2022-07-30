import React from "react";
import Createe from "./createe";
const Context = (props)=>{

const data = [{
    "id": 1,
     "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUGzQB6-DTwXTWtHD1kye2pfVM8XcR7DUwA&usqp=CAU",
    "name": "Mahendra Singh Dhoni",
    "description": "Dhoni used to captain the Indian national team in limited-overs formats from 2007 to 2016 and in Test cricket from 2008 to 2014. He has led India to 2007 ICC World Twenty20 victory, the 2010 and 2016 Asia Cup victories, the 2011 ICC Cricket World Cup victory and the 2013 ICC Champions Trophy victory."
  },
  {
    "id": 2,
     "Image": "https://staticc.sportskeeda.com/editor/2019/09/63354-15683627079428-800.jpg",
    "name": "Virat Kohli",
    "description": "Virat Kohli made his debut for the senior national side against India in 2008. His performance soon made him a regular in the squad and earned him a spot in the 2011 ICC World Cup. The same year he made his Test debut. The next year he was appointed the vice-captain of the ODI team and in 2014, he was given the Test captaincy following Dhoni’s retirement from Tests." 

     
  },
  {
    "id": 3,
     "Image": "https://staticg.sportskeeda.com/editor/2020/08/2d5f6-15986222148125-800.jpg",
    "name": "Rohit sharma",
    "description": "Rohit is a right-handed opening batsman and bowls right-arm off break occasionally. Rohit is widely popular for his aggressive style of batting where he likes to take the charge to the bowler. He is the only batsman in the world to hit three double centuries in ODI cricket."
  },
  {
    "id": 4,
     "Image": "https://staticc.sportskeeda.com/editor/2019/09/f6527-15681100296497-800.jpg",
    "name": "Shikhar Dhawan",
    "description": "Shikhar is a left-handed opening batsman and occasional right-arm off break bowler . Shikhar is widely popular for his calm and composed but yet aggressive style of batting especially in ICC tournaments. At the 2015 ICC World Cup"
  },
  
  {
    "id": 5,
     "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpmGDlxXcnpcQiRaOzWFVmsCFVTX7d9-SKQ&usqp=CAU",
    "name": "Ravindra Jadeja",
    "description": "Playing as an all-rounder, Jadeja is a left-handed opening batsman and bowls slow left-arm orthodox. Jadeja is widely popular for his amazing fielding skills. Fans have lovingly nicknamed him as 'Sir Jadeja'.Jadeja is famous for his iconic mustache and his love for horse riding. He is a trained horse rider and loves the sport so much that."
  }]



    return(<div>
     <Createe.Provider value = {data}>
      {props.children}
     </Createe.Provider>
    
    
    </div>)
}
export default Context;