import express from 'express'

const app = express()

// app.get('/', (req, res) => {
//     res.send('Server Is Ready')
// })

//My API Data

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            brand: 'Apple',
            price: '1099',
            rating: '4.12',
            thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
            discountPercentage: '14.99'
        },
        {
            id: 2,
            brand: 'Samsung',
            price: '899',
            rating: '4.69',
            thumbnail: 'https://cdn.dummyjson.com/product-images/3/thumbnail.jpg',
            discountPercentage: '14.99'
        },
        {
            id: 3,
            brand: 'Microsoft Surface Laptop 4',
            price: '1549',
            rating: '4.27',
            thumbnail: 'https://cdn.dummyjson.com/product-images/8/thumbnail.jpg',
            discountPercentage: '14.99'
        },
        {
            id: 4,
            brand: 'Oppo',
            price: '317',
            rating: '3.48',
            thumbnail: 'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg',
            discountPercentage: '14.99'
        },
        {
            id: 5,
            brand: 'Huawei P30',
            price: '369',
            rating: '3.89',
            thumbnail: 'https://cdn.dummyjson.com/product-images/5/thumbnail.jpg',
            discountPercentage: '14.99'
        },
    ]
    
    res.send(products)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
})