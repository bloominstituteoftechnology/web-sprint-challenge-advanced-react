import React, { useState } from "react";

const useDarkMode = ()=>{
const [darkmode, setDarmode] = useState(true);
const change = () => setDarmode(!darkmode);
return [darkmode, change]
}

export default  useDarkMode;
