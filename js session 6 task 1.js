function hoistExample() {
    console.log(a); // undefined...var a exists but inited after
    var a = 10;
  
    function inner() {
      console.log(a); // undefined...same thing as above
      var a = 20;
    }
  
    inner();
    console.log(a); // 10... we can't see inner var and only see the first var a = 10
  }
  
  hoistExample();