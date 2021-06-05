RESTful endpoint:
Representational State Transfer - sever has no idea who you are.
It gets request and sent stuff back.
It can not maintain state - So to get around that, use session data 

cookies session

![project end product](https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2Fsession-data.gif?v=1622861408724)

- Cookies - where does it live? lives browser, the cookie is sent every http request (post/get request).  Server that recognizes the cookie may respond accordingly.  

postaman.com has cookie banner. go to cookie setting.

![cookie-session](https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2FScreen%20Shot%202021-06-04%20at%209.04.36%20PM.png?v=1622855138547)
![cookie.png](./cookie.png)

- we can see what information endpoints we are hitting which is exposed to the internet outside of world. network traffic, therefore sending data (password) to the internet is not secure way to login (using req.query `?password=funny`)

- because of session cookie => server can remember who you are.
![networktraffic](https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2FScreen%20Shot%202021-06-04%20at%209.23.05%20PM.png?v=1622856202624)
- Targeting cookies: all cookies 
    - few things about cookies: 1. cookies have expration date.
- To see cookies:
- console > Storage > Cookies > Application tab
￼

- To clear cookies: Application > Storage > “Clear Site Data”
- Cookies are tiny (4 bytes, a string)

- How to set cookies:
document.cookie = "Mycookie=this site is way cool!!dude!!"

then check cookies > Application tap