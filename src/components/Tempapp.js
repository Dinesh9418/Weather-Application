import React,{useEffect,useState} from 'react';
import './css/style.css';

const Tempapp = () => {
    const [city,setCity] = useState(null)
    const [search,setSearch] = useState('pune')

    useEffect(() => {
           const fetchApi = async() => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=dc9ccd49b4db0a24ed203470646710c7 `
            const response = await fetch(url);
            const reJson = await response.json();
            setCity(reJson.main);
           }
        fetchApi();
    },[search])

    return(
        <>
            <div className ="box">
                 <div className = "inputData">
                    <input
                    type = "search" 
                    className = "inputField"
                    onChange = {(event) => {setSearch(event.target.value) }                  
                     }/>
                 </div>
           
              {! city ?(
                 <p className ="errorMsg">Data Not Found</p>):
            (<div>
                <div className = "info">
                    <h2 className = "location"></h2>
                    <i className="fas fa-street-view"></i>
                    <i className="fas fa-street-view"></i>{search}
                    <h1 className ="Temp" >
                        {city.temp} °C
                    </h1>
                    <h3 className = "Temp_max"> Min :{city.temp_min} °C | Max :{city.temp_max} °C
                    </h3>
                </div>
         </div>
          )}

        </div>
        </>
    )
}

export default Tempapp;