function reverse(s){
    let reversed = '';
    
    function helper(n){
        if(n > -1){
            reversed += s[n]
            helper(n-1)
        }
    }
    helper(s.length - 1)
    
    console.log(reversed);
}

reverse('abcd')