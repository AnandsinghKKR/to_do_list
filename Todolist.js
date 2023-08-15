import React, { useState } from 'react'


const Todolist = () => {
    const [activity, setActivity] = useState("");
    const [listdata, setListdata] = useState([]);
    function addactivity() {
        // setListdata([...listdata,activity])                -->> It will work Asynchronously 
        // console.log(listdata)        

        setListdata((listdata) => {
            const updatedlist = setListdata([...listdata, activity]);
            setActivity("")
            return updatedlist;
        })
    }

    function removeActivity(i){
        const updatedlistdata=listdata.filter((elem,id)=>{return id!==i})
        setListdata(updatedlistdata);
    }
    function removeall(){
        setListdata([]);
    }

    return (
        <>
            <div className='container'>
                <div className='header'>
                    TODO LIST
                </div>
                <input type="text" placeholder='Add Activity' value={activity} onChange={(e) => setActivity(e.target.value)} />
                <button onClick={addactivity}>Add</button>
                <p className='list-heading'>Here is your List :{")"}</p>
                {listdata !== [] && listdata.map((data, i) => {
        return (
            <>
                <p key={i}>
                    <div className='listdata'>{data}</div>
                    <div>
                        <button className='btn-position' onClick={() => removeActivity(i)}>remove(-)</button>
                    </div>
                </p>
            </>
        );
    })}
                {listdata.length>=1 && <button onClick={removeall}>Remove all</button>}

            </div>
        </>
    )
}


export default Todolist;
