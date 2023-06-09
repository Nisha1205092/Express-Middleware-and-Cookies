const date = new Date();
date.setTime(date.getTime() + 20000);
document.cookie = "custom2=value; expires=" + date.toUTCString() + ";";
