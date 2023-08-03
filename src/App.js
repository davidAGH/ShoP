import React, { useState, useEffect } from 'react';
import { Shop } from './components/shop';
import Loading from './components/loading';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []); 


    return (
        <div>
            {loading ? 
                <Loading/>
                : 
                <div>
                    <Shop maxLimit={'13'}/>
                </div>
            }
        </div>
    );
};

export default App;
