const res = await fetch('some api url');
const data = await res.json();
console.log(data);

//! this can block the entire execution of module