module.exports = function() { 
    let fs = require('fs');
    this.save = function(record) {      
        fs.writeFileSync('init.sav', JSON.stringify(record));
       
    };
    this.get = function() { 
        let fs = require('fs');
        var data = fs.readFileSync('init.sav');
        
        return JSON.parse(data); 
    };
    
}