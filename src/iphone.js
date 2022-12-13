import React from "react";
import Cart from './Cart'

function Child () {

//  const name = "akshupdf"
//  const age = "25"

//  const test = (data) =>{

//         console.log("test" , data)
//  }

const data = [{
    name:"iphone 7",
    price:"30000",
    img : "https://www.refurbished.store/cache/images/iphone-7-rose-multiapple_600x600_BGresize_16777215-tj.png"
},
{
    name:"iphone 8",
    price:"40000",
    img : "https://beyondapple.in/wp-content/uploads/2021/05/refurb-iphone8-silver.jpg"
},
{
    name:"iphone 10",
    price:"40000",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_68WZa-dtkw6CKDFS-ivhBiZf6r84DWNV9u7cxYhgpAVDHPhBbiCRXALaAZg2j6KqMg0&usqp=CAU"
},
{
    name:"iphone 11",
    price:"50000",
    img:"https://www.aptronixindia.com/media/catalog/product/i/p/iphone1164gbblack_2.png"
},
{
    name:"iphone 12",
    price:"60000",
    img:"https://m.media-amazon.com/images/I/317JiGToz-L.jpg"
}]


    return(
        <div>
        
            
             
                    <div className="flex hover-pointer">

                        
                        {
                            data.map((data) => {
                               
                                return (

                                    <div className="h-50 w-60 m-2  p-2  border-black border-2">
<Cart
                    name = {data.name}
                    price ={data.price}
                  img ={data.img} 
                  
            />
            </div> 

                                )
                                


                            })
                        }
                    
            </div>

              
            



            {/* <Cart>
                <buttom onClick={test} >Click here</buttom>
            </Cart> */}

           
        </div>

        
    )
    }

export default Child;