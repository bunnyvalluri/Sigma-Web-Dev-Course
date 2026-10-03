/**
 * ==========================================================================
 * Sigma Web Development Course - Video 092
 * Topic: EJS Template Engine with Express
 * File: index.js
 * 
 * Description:
 *   Rendering server-side dynamic HTML using Embedded JavaScript (EJS) templates, partials, and variables.
 * ==========================================================================
 */
// Import Express framework
const express = require('express')
// Create Express application instance
const app = express()
const port = 3000

app.set('view engine', 'ejs');

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = ["Hey", 54, 65]
    res.render("index", { siteName: siteName, searchText: searchText, arr })
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when?"
    let blogContent = "Its a very good brand"
    res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})