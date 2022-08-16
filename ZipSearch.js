import React, { useState } from 'react';



function ZipSearch()  {
    const [zipCode, setZipCode] = useState('');

    return (
        <form action="" method="" >
            <fieldset>
                <legend>
                    Enter your 5 digit zip code:
                </legend>
                <input type="text"
                value={zipCode}
                id="zip"
                name="zipCode"
                placeholder="12345"
                size="5"
                maxLength="5"
                onChange={e => setZipCode(e.target.value)}
            
            />
            <label for="alert">
                <button name="alert" onClick={e => {
                    alert(`You entered ${zipCode}`);
                    e.preventDefault();
                }}>Submit</button>
            </label>
            </fieldset>
       </form>
    );
}

export default ZipSearch;