const express = require('express');
const app = express(); 
const hymns = require('./mocks/hymns.json');

app.get('/heartbeat', (req, res)=>{
res.json({
    is: "working"
})
});
app.get('/hymns', (req, res) => {
    let reults  = "There are no hymns here because the array is empty.";
    
    if(req.query.title) {
        const reqTitle = req.query.title.toLowerCase();
        
        results = hymns.filter(hymn =>{
            return hymn.title.toLowerCase().indexOf(reqTitle) >-1
        }).map(hymn => {
            return`
            <li>
                <span>${hymn.hymnNo}</span>-<span>${hymn.title}</span>

            </li>`
            ;
        })
    }
    res.send(
        `<ul>
            ${results.join("")}
        </ul>`)
})
app.listen("8080", () => {
    console.log('The server is listening.')
})