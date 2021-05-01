import {CreateToken,ReadToken} from 'components'

const $setLocalStorage = (name, data) => (sessionStorage.setItem(name, JSON.stringify(data)))
    
 

const $getLocalStorage = (name) => {
    let result =[]
    try{
        result = JSON.parse(sessionStorage.getItem(name))
    }catch{
        result = null
    }
    return result
};


const $deleteStorage = (name) => (sessionStorage.removeItem(name));

//#endregion

const $try = (func, message) => {

    try{
        console.info("were working on your funtion...",func)
        func()
    }
    catch(err){
        console.error(message,err)
    }
}




const setLocalStorage = (name,data) => (localStorage.setItem(name,JSON.stringify(CreateToken(data))));
const getLocalStorage = (name) => {
    let result =[]
    try{
        result = ReadToken(JSON.parse(localStorage.getItem(name)));
    }catch(e){
        console.log(e)
        result = null
    }
    //console.log(result)
    return result
};

export {$try,$setLocalStorage,$getLocalStorage,$deleteStorage, setLocalStorage, getLocalStorage}