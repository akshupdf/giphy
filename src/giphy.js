import React from "react";


class Giphy extends React.Component {
    
    state = {
        data: []
        
    }
    

    fetchData = () => {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((data)=>{
            this.setState({data })
            // console.log({data})
            
        })
        

    }


    render() {

        return(

            <div>
                


                <div className="flex flex-wrap ">
                {this.state.data.map((data) => (
                    
                        
                    <div className="w-60 h-auto flex p-2 m-4 border-black border-2 flex-wrap hover:scale-110 transition duration-300 ease-in-out cursor-pointer" key={data.id}>
<h1>name : {data.name}</h1>
<h1>Username : {data.username}</h1>
{/* <h1>Address : {data.address.street},{data.address.city}</h1> */}
<img src={`https://robohash.org/${data.id}?set=set2&size=200x200`} alt=""></img>

                    </div>
                    

                 
                ))
                }
                </div>
                
                <button className="border-black border-2 rounded-xl" onClick={this.fetchData}>Show cartoons</button>
            </div>
        )
    }
}


export default Giphy;