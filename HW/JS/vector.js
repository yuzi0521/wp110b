class Vector {

    constructor(array) {
      this.a = array
    }
  
    length() {

        let i,a=0;
        let p3 = new Vector([]);

        for(i=0;this.a.length>i;i++){ 
            p3.a[i]=this.a[i]*this.a[i];
            a+=p3.a[i]
        }
        a=Math.sqrt(a);
        return a
    }
  
    neg() {

        let i;
        let p3 = new Vector([]);

        for(i=0;this.a.length>i;i++){ 
            p3.a[i]=this.a[i]*-1;
        }
        return p3
    }
  
    add(p2) {
        let i;
        let p3 = new Vector([]);

        for(i=0;this.a.length>i;i++){
            p3.a[i]=this.a[i]+p2.a[i];       
        }
        return p3
        
    }
  
    sub(p2) {
        return this.add(p2.neg())
    }
  
    dot(p2) {

        let i,a=0;
        let p3 = new Vector([]);
        for(i=0;this.a.length>i;i++){
            p3.a[i]=this.a[i]*p2.a[i];
            a+=p3.a[i]
        }
        return a
    }
  
    distance(p2) {
        return this.sub(p2).length()
    }
  
    toString() {
      return this.a.toString()
    }
  }
  
  
  let p = new Vector([2,3]), p2 = new Vector([1,2])
  console.log(p)
  console.log(p.toString())
  console.log(p+'')
  console.log('p.length()=', p.length())
  console.log('p.sub(p2)=', p.sub(p2))
  console.log('p.dot(p2)=', p.dot(p2))
  console.log('p.sub(p2).length()=', p.sub(p2).length())
  console.log('p.distance(p2)=', p.distance(p2))
  