import {Config} from '../classes/Config';

let urlPath = `${Config.getUrlApi().toString()}/cadastro/`;

export default class Service{
    constructor(){
    }

    static getAll(){
        return fetch(urlPath).then(resp => {
            return resp.json();
        });
    }

    static getId(id){
        return fetch(`${urlPath}/${id}`).then(resp => {
            return resp.json();
        });
    }

    static add(formData){
        return fetch(urlPath,
            {
                method:'POST',
                body:formData,
            }
        ).then(resp => {
            return resp.json();
        }); 
    }

    static edit(formData){
        return fetch(urlPath,
            {
                method:'PUT',
                body:formData,
            }
        ).then(resp => {
            return resp.json();
        }); 
    }

    static delete(id){
        return fetch(`${urlPath}/${id}`,
            {
                method:'DELETE',
            }
        ).then(resp => {
            return resp.json();
        }); 
    }
}