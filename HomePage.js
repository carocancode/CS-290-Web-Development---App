import React from 'react';
import { GiCoffeeBeans} from 'react-icons/gi';
import { FaFish} from 'react-icons/fa';
import { GiStrawberry} from 'react-icons/gi';
import { TbMeat} from 'react-icons/tb';
import { GiMilkCarton} from 'react-icons/gi';
 



function HomePage() {
    return (
        <>

<GiCoffeeBeans className="coffee" /> 
        <FaFish className="fish"     /> 
        <GiStrawberry className="strawberry"     /> 
        <TbMeat className="meat"     />  
        <GiMilkCarton className="milk"     /> 


        <h2> Order Groceries at your local mercado </h2>
        <p> Use the tabs above to search for a store and order groceries

        </p>
       
       
       
        </>
    );
}

export default HomePage;

