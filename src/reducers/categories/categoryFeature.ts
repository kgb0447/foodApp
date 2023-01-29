import React from 'react'
import dataActions from '../../actions/dataActions';
import useFetch from '../../utils/hooks/useFetch';


   
    const categoryFeature = (state:any, action: any) => {
        switch(action.type) {
            case dataActions.MAP_CATEGORY :    
            console.log(state,"TEST"); 
                return state.map((item : any) => item);
            default :
                 throw new Error("Oops, something went wrong, try again later!!!!")
        }

    }

    export default categoryFeature;


