// import React, { Component } from 'react'
// import './App.css'

// import CurrencyConverter from './Components/CurrencyConverter'
// // import CurrencyDisplay from './Components/CurrencyDisplay' alternatively we can use the CurrencyDisplay component rather than inline JSX. We would need to pass an amount and currency prop

// class App extends Component {
// 	render() {
// 		return (
// 			<>
// 				<h2>Render Props</h2>
// 				<CurrencyConverter
// 					render={(currencyData, amount) => (
// 						<p>
// 							US Dollar ${amount.toFixed(2)} - {currencyData.name}{' '}
// 							{currencyData.symbol}
// 							{(amount * currencyData.rate).toFixed(2)}
// 						</p>
// 					)}
// 				/>
// 			</>
// 		)
// 	}
// }

// export default App



import React, { Component } from 'react'
import './App.css'

import CurrencyHOC from './Components/CurrencyConverter'

class App extends Component {
  render() {
    return (
      <>
        <h2>Higher Order Component</h2>
        <CurrencyHOC />
      </>
    )
  }
}

export default App