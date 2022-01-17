import Buy from './Buy'

function Lastest() {
    return (
        <div className="container">
            <div className="row text">
                <p>Lastet products</p>
            </div>
            <div className="row">
                <div className="column-2">
                    <div className="items">
                        <div>
                            <div className='buy__button'>
                                <img className='__product' src={require('../img/products/product-1.png')} /> 
                                <Buy />
                            </div>
                            <p>Christmas cup</p>
                            <span>$15.99</span>
                        </div>
                        <div>
                            <div className='buy__button'>
                                <img className='__product' src={require('../img/products/product-2.png')} />
                                <Buy /> 
                            </div>
                            <p>Christmas cup</p>
                            <span>$15.99</span>
                        </div>
                        <div>
                            <div className='buy__button'>
                                <img className='__product' src={require('../img/products/product-5.png')} />
                                <Buy /> 
                            </div>
                            <p>Christmas cup</p>
                            <span>$15.99</span>
                        </div>
                        <div>
                            <div className='buy__button'>
                                <img className='__product' src={require('../img/products/product-3.png')} />
                                <Buy /> 
                            </div>
                            <p>Christmas cup</p>
                            <span>$15.99</span>
                        </div>
                        <div>
                            <div className='buy__button'>
                                <img className='__product' src={require('../img/products/product-4.png')} /> 
                                <Buy />
                            </div>
                            <p>Christmas cup</p>
                            <span>$15.99</span>
                        </div>
                        <div>
                            <div className='buy__button'>
                                <img className='__product' src={require('../img/products/product-5.png')} />
                                <Buy /> 
                            </div>
                            <p>Christmas cup</p>
                            <span>$15.99</span>
                        </div>
                        <div>
                            <div className='buy__button'>
                                <img className='__product' src={require('../img/products/product-3.png')} /> 
                                <Buy />
                            </div>
                            <p>Christmas cup</p>
                            <span>$15.99</span>
                        </div>
                        <div>
                            <div className='buy__button'>
                                <img className='__product' src={require('../img/products/product-4.png')} />
                                <Buy /> 
                            </div>
                            <p>Christmas cup</p>
                            <span>$15.99</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Lastest