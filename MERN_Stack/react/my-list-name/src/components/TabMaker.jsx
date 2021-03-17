import React, { useState } from 'react'

const TabMaker = () =>{
  
   const[tabs, setTabs] = useState([{tab1 : false}])

    const tab1Show = () =>{
        if(tabs[0].tab1 === true){
            return <div><h2>This is tab1 content</h2></div>

        }
        if(tabs[0].tab2 === true){
             return <div><h2>This is tab2 content</h2></div>
        }
        if(tabs[0].tab3 === true){
            return <div><h2>This is tab3 content</h2></div>
        }
    }
 
 

    return (
        <>
        <div className="holder">
            <div className="tabs">
            <h3 onClick={(e) => setTabs([{tab1:true}])}>Tab 1</h3>
            <h3 onClick={(e) => setTabs([{tab2:true}])}>Tab 2</h3>
            <h3 onClick={(e) => setTabs([{tab3:true}])}>Tab 3</h3>
            </div>
            <div className="tab-content">
                {tab1Show()}
            </div>
        </div>
        </>
    )
}

export default TabMaker;