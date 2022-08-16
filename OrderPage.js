import React from 'react';
import GroceryTable from  '../components/GroceryTable.js';
import { GiCoffeeBeans} from 'react-icons/gi';
import { FaFish} from 'react-icons/fa';
import { GiStrawberry} from 'react-icons/gi';
import { TbMeat} from 'react-icons/tb';
import { GiMilkCarton} from 'react-icons/gi';
 

function OrderPage ({ items }) {
    return (
        <>
        <h2> Order your essentials </h2>
        <p>Select the quantity of each item</p>

        <GiCoffeeBeans className="coffee" /> 
        <FaFish className="fish"     /> 
        <GiStrawberry className="strawberry"     /> 
        <TbMeat className="meat"     />  
        <GiMilkCarton className="milk"     /> 


        <GroceryTable items={items} />
        </>
    );
}
export default OrderPage;