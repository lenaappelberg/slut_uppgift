

const getAll= async()=>{
    const res= await fetch('https://js2-ecommerce-api.vercel.app/api/products')
    const data= await res.json();
    return data}
export default{
    getAll
}
export const postAll=async(id,number)=>{
    console.log(id)
    console.log(number)
        const response=await fetch('https://js2-ecommerce-api.vercel.app/api/orders',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body:JSON.stringify({
            "products":[{
            "productId":id,
            "quantity":number}]
        })
    })
    .then(response=>response.json())
    return response
}
