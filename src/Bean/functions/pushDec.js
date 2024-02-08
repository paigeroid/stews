const Bean = require('../index.js');
const Soup = require('@stews/soup');


function BeanPushDec(value=null) {
    if ( !(value instanceof Bean) ) value = Bean.from(value);

    let stuff = Soup.from( (this.ints[0] instanceof Array) ? this.ints[0] : this.ints );
    let stuff2 = Soup.from( (this.ints[0] instanceof Array) ? this.ints[1] : Array );

    if (value.ints[0] instanceof Array) {
        stuff2.push( value.ints[1].join("") );
    }
    else {
        stuff2.push( value.ints.join("") );
    }
    
    this.content = parseFloat(`${stuff.join("")}.${stuff2.join("")}`);
}


Bean.newF("pushDec", BeanPushDec);
