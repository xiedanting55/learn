const express = require("express");
const app = express();
const dps = require('dbpedia-sparql-client').default;
const port = 3000;

app.get("/subject/:s", (req, res) => {
    let s = req.params.s;
    let uri = "dbpedia:" + s;

    let query = "PREFIX dbpedia: <http://dbpedia.org/resource/> " +
    "PREFIX dbpedia-owl: <http://dbpedia.org/ontology/> " +
    "SELECT ?s ?p ?o WHERE { " + uri + " ?p ?o. } LIMIT 10";
    dps.client()
    .query(query)
    .timeout(15000)
    .asJson()
    .then((data) => {
        let {bindings} = data.results;
        let html = "<h1>Results for</h1>";
            html += "<h1>dbpedia:"+ s +"</h1>";
            html += "<table border=1><tr><th>Predicate</th><th>Object</th></tr>";
        for (var i in bindings) {
            html += "<tr><td>"+ bindings[i].p.value +"</td><td>"+ bindings[i].o.value +"</td></tr>";
        }
            html += "</table>";
        res.end(html)
     })
    .catch(function(e) { 
        throw e;
    });
})
  


app.listen(port, () => {
	console.log(`listening on port number: ${port}`);
});