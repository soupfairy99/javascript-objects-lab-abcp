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
<<<<<<< HEAD

function 
destructivelyDeleteFromObjectByKey(object, key)
{var obj = { prop: 1};
var newObj = delete obj.prop; return {obj, newObj};
}
destructivelyDeleteFromObjectByKey(obj,'prop');
=======
function 
destructivelyDeleteFromObjectByKey()
{var obj = { prop: 1};
var newObj = delete obj.prop;
return newObj}

destructivelyDeleteFromObjectByKey();
>>>>>>> 3b3e0ba6014f0c351218ecc3d66a3ef229c28a58

/*

      

  describe('destructivelyDeleteFromObjectByKey(object, key)', function() {
    it('returns object without the delete key/value pair', function() {
      var obj = { prop: 1 }
      var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

      expect(newObj['prop']).toBe(undefined)
    })

    it('modifies the original object', function() {
      var obj = { prop: 1 }
      var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

      expect(obj['prop']).toBe(undefined)
    })
  })

})
*/