// copy-paste the code in the console of the browser
// and check the cookies to find the 
// custom2 cookie

const date = new Date();
date.setTime(date.getTime() + 20000);
document.cookie = "custom2=value; expires=" + date.toUTCString() + ";";
