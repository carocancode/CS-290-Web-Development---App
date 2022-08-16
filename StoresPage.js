import React from 'react';
import StoreTable from '../components/StoreTable.js';
import ZipSearch from '../components/ZipSearch.js';
import { GiCoffeeBeans} from 'react-icons/gi';
import { FaFish} from 'react-icons/fa';
import { GiStrawberry} from 'react-icons/gi';
import { TbMeat} from 'react-icons/tb';
import { GiMilkCarton} from 'react-icons/gi';
 


function StoresPage({ stores }) {
    return (
        <> <h2>Locate a store near you. </h2>
        <p>Use the form below to find the store near you</p>

        <GiCoffeeBeans className="coffee" /> 
        <FaFish className="fish"     /> 
        <GiStrawberry className="strawberry"     /> 
        <TbMeat className="meat"     />  
        <GiMilkCarton className="milk"     /> 

        
        <StoreTable stores={stores} /> 
        <ZipSearch />
        </>
    );
}

export default StoresPage;