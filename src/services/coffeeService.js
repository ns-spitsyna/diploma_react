
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
     getAllGoods = async () =>{
        const res = await this.getResource();
        return  res.goods;
        
        
    }

     // getBest = async (name) =>{
        
     //        return character => character.name === name;


     //  }
    getBest = async (name) =>{
        
        return this.getAllCoffee(`/coffee/${name}`);
      
    }
   
         _transformCoffee({name,country, url, price,description}) {
               
            return {name,country, url, price,description}
            
        }
        //return this.coffeeService.getAllCoffee(`coffee/${name}`);
        //this.getResource(`/coffee/${name}`);

    
    //  getBest = async (name) =>{
        
    //    // this.coffeeService.getAllCoffee()
    //           return this.getResource(`/${name}`);
   
    // }
    

    //this.coffeeService.getResource().then(res=>console.log(res.bestsellers));
   
        
     }
  
