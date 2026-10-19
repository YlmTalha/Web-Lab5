import { useState } from 'react'
import ProductList from './components/ProductList'

function App() {
  const [showProducts, setShowProducts] = useState(false)
  const [name, setName] = useState('')

  return (
    <div>
      <h1>React Product Dashboard</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>

      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>

      {showProducts && <ProductList />}
    </div>
  )
}

export default App
