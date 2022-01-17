import {useContext} from 'react'
import {items} from '../App'



function Buy() {
    const countItems = useContext(items)
    const handleBuy = () => {
        countItems.setCount(countItems.count + 1)
    }
    return (
        <div className='buy'>
            <button onClick={handleBuy}>Buy</button>
        </div>
    )
}

export default Buy