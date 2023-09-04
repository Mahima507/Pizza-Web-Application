/* script for network calls 
  Network talk  
  HTTP/ HTTPS
  ASYNC CALL, PROMISE
  a) then b) catch 

*/ 
//makeNetworkCall('https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json');
 async function makeNetworkCall(URL){
  try{
   const response = await fetch(URL); 
   // await for async to sync
   const data = await response.json();
   console.log(data);
   return data;
  }
   catch(err){
      console.log('Error is'+err);
     throw err;
  } 
  // ES6 (2015) its an wrapper method for XML (2000 xml http request)
   /**  
   promise.then((response)=>{
      // Header + Body
     const promise2 = response.json();
      promise2.then(data=>{

      }).catch((err)=>{

      })
   }).catch((err)=>{

   });
   //return undefined 
   */
}
export default makeNetworkCall;