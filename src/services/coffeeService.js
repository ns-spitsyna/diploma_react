export default class CoffeeService{
    
     getResource = async () =>{
        const res = await fetch(`${process.env.PUBLIC_URL}/db.json`);
       
       
        if(!res.ok){
            throw new Error(`Could not fetch  status: ${res.status}`);
        }
        
        return await res.json();
    }
    // getAllBest = async () =>{
    //     const res = await this.getResource('/');
    //     return res.map(this._transformBest);
        
    // }
    
    // _transformBest({name, url, price}) {
        
        
    //     return {name, url, price}
        
    // }
  
}