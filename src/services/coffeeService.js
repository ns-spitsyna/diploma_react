export default class CoffeeService{

     getResource = async () =>{
        const res = await fetch(`${process.env.PUBLIC_URL}/db.json`);
       
       
        if(!res.ok){
            throw new Error(`Could not fetch  status: ${res.status}`);
        }
        
        return await res.json();
    }
    getAllBest = async () =>{
        const res = await this.getResource();
        return  res.bestsellers;
        
        
    }
     getAllCoffee = async () =>{
        const res = await this.getResource();
        return  res.coffee;
        
        
    }
      getAllCoffee = async () =>{
        const res = await this.getResource();
        return  res.coffee;
        
        
    }
     getBest = async (id) =>{
        
        const best = await this.getResource();
        return best.bestsellers;
    }
    //this.coffeeService.getResource().then(res=>console.log(res.bestsellers));
    // _transformBest( {name, url,price}) {
        
    //         return  {name, url,price}

    //     } 
        
     }
  
