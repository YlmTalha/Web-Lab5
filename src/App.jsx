import { useState } from 'react'
import ProductList from './components/ProductList'

function App() {
  const [showProducts, setShowProducts] = useState(false)
  const [name, setName] = useState('')

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 16px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Product Dashboard</h1>

      <input
        style={{ padding: '6px', width: '100%', boxSizing: 'border-box' }}
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
