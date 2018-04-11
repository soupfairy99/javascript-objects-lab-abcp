/*global describe, it */


var recipes ={breakfast:"egg"};

function
updateObjectWithKeyAndValue()
{var object1 = {prop:"1"};
var object2 = Object.assign({},object1,{prop2:"2"});
return object1, object2;
}

function
destructivelyUpdateObjectWithKeyAndValue(obj,key,value)
{ obj[key] = value;
 return obj;
  }
  const object5 = {prop: 1};
  
destructivelyUpdateObjectWithKeyAndValue(object5, 'prop2', 2);

function

deleteFromObjectByKey()

{var obj = { prop: 1 };
  var newObj=Object.assign({},obj);
  delete newObj.prop;
  return newObj;
}



function 
destructivelyDeleteFromObjectByKey()
{var obj = { 'prop': 1};
delete obj.prop;
}

