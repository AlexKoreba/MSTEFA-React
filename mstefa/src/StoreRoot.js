import React from "react";

import Store from "./Store";
import { withDataLoad } from "./hof/withDataLoad";


const fetchConfig = {
    URL: "http://localhost:3000/products",
    method: 'get',
    headers: {
        "Accept": "application/json",
    },
};

const StoreWithData = withDataLoad(fetchConfig,"productsList")(Store);


const StoreRoot = () => {
    return ( 
        <StoreWithData />
    );
}
 
export default StoreRoot;