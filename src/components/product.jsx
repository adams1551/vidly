import {useState} from 'react'

const Products = () => {
    const [Products, setProduct] = useState([
        {id: 1, title: "Car", quantity: 1},
        {id: 2, title: "House", quantity: 1},
        {id: 3, title: "Yatch", quantity: 1},
        {id: 4, title: "Eternal", quantity: 1},
        {id: 5, title: "Jet", quantity: 1}
    ])

    const [selectedId, setSelectedId] = useState(null)
    const selectedProduct = Products.find((p) => p.id === selectedId)
    const increment = id =>{
        setProduct((prev) =>{
            prev.map(product =>{
                if(product.id === id){
                    return {...product, quantity: product.quantity +  1}
                }else return product;
            })
        })
    }
    const handleChoose = id =>{
        setSelectedId(id)
    }
  return (
    <div className='container ml-6'>
    <h2>All Products</h2>
    {
        Products.map((product) =>{return (
            <div key={product.id}>
                 <span>{product.title}
                 <button className="btn btn-success" onClick={()=>handleChoose(product.id)}>Choose</button>
                 </span>
                 <div className="quantity">
                    <button className="btn btn-danger">-</button>
                    <span>{product.quantity}</span>
                    <button className="btn btn-success" onClick={()=> increment(product.id)}>+</button>
                 </div>
                
            </div>
         ) }) 
        }          
        <br />
       <h3>Selected Products</h3>
       <h2 className='badge badge-info'>{selectedProduct?.title}</h2><br />
       <span>Quantity: {selectedProduct?.quantity}</span>
       
    </div>
  )
}

export default Products