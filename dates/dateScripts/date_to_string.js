function getDate(){
    let d = new Date();
   console.log(`
   ${d.toString()} 
   ${d.toDateString()} 
   ${d.toUTCString()} 
   ${d.toLocaleString()} `)

}
getDate();