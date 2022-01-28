import { Types } from "../Types/Types"


export const LogInUser =( newRegister )=> {
    return {
        type: Types.Loggin,
        payload: newRegister
    };
}

export const InitialFetch = ( data ) =>{
    return {
        type: Types.InitialRequest,
        payload: data
    }
}

export const ErrorControl = ( err )=>{
    return {
        type: Types.ErrorControl,
        payload: err
    }
}

export const FilterSelector = ( string ) =>{
    return {
        type: Types.Filter,
        payload: string
    }
}

export const ResetValue = ()=>{
    return{
        
        type: Types.Reset,
       
    }
}

export const SingleOut = ( id )=>{

    return{
        type: Types.Single,
        payload: id
    }
}

export const SearchAction = ( input ) =>{
    return {
        type: Types.Search,
        payload: input
    }
}