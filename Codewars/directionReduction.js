function dirReduc(arr){
    for (let i=0; i<arr.length; i++){
         arr.forEach((item, i) => {
      if(item === 'NORTH' && arr[i + 1] === 'SOUTH' ){
        arr.splice(i, 2)
      } else if(item === 'SOUTH' && arr[i + 1] === 'NORTH'){
        arr.splice(i, 2)
      } else if(item === 'WEST' && arr[i + 1] === 'EAST'){
        arr.splice(i, 2)
      } else if(item === 'EAST' && arr[i + 1] === 'WEST'){
        arr.splice(i, 2)
      }
    });
    }
   
    
      console.log(arr)
  }

  dirReduc(["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","WEST"])