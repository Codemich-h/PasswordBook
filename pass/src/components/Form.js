/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from './Button';


function Form() {
    const [appName, setAppName] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        showData();
    }, []);
   


    const submit = (e) => {
        e.preventDefault();
        const postData = {
            appName,
            password
        }
        axios.post(`https://jsonplaceholder.typicode.com/posts`, postData)
        .then(response=>{
            console.log(response)
            setPassword([response.data, password])
        }); 
        setAppName(''); 
        setAppName('');           
    };

    const showData = async(e) => {

        e.preventDefaul();
        await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=8`)
        .then(response => {
            console.log(response);
            setPassword(response.data);
        });
    }

    const handleChangeApp = (e) => {
        e.preventDefault();
        const appName = e.target.value;
        setAppName(appName);
    }

    const handleChangePassword = (e) =>{
        e.preventDefault();
        const password = e.target.value;
        setPassword(password);
    }


    
    return(<div className="flex justify-center">
                <form className='bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4'>
                    <h1 className='block text-gray-700 text-2xl font-bold mb-3 mt-8'>Password Book</h1>
                    <div>
                        <input className="shadow appearance-none border rounded mt-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-96" id="appName" type="text" placeholder="AppName" onChange={(e) => handleChangeApp(e)}></input>
                    </div>
                    <div>
                        <input className="shadow appearance-none border rounded mt-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-96" id="password" type="password" placeholder="Password" onChange={(e) => handleChangePassword(e)}></input>
                    </div>
                    <div className='flex justify-center'>
                        <Button primary rounded outline className="mb-5 mt-5 mx-5" onClick={(e) => submit(e)}>Save</Button>
                        <Button success rounded outline className="mb-5 mt-5 mx-5" onClick={(e) => showData(e)}>Show password</Button>
                        <Button danger rounded outline className="mb-5 mt-5 mx-5">Hide Password</Button>
                    </div>
                </form>
            </div>
    )
}

export default Form;


