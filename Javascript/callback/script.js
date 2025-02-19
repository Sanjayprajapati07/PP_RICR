//promise
function xyz(ID){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
          if(ID !== 3){
             console.log("Data", ID);
             Res("Success");
          }else{
             reject("error");
          }
        },5000)
     })
}




/*//callback hell
function fetchData(rollno,fetchnext){
    setTimeout(()=>{
        console.log("student"+rollno);
        if(fetchnext){
            fetchnext();
        }
    },2000)
  
}

//callback Hell
fetchData(1,()=>{
    fetchData(2,()=>{
        fetchData(3,()=>{
            fetchData(4,()=>{
                fetchData(5);
            })
        })
    })
});*/