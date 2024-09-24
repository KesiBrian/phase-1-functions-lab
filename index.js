 function distanceFromHqInBlocks(someValue) {
 const hqLocation=42;
 return Math.abs(someValue-hqLocation)
  }
   function distanceFromHqInFeet(somevalue){
    const blocks=distanceFromHqInBlocks(somevalue);
    return blocks * 264
  }

function distanceTravelledInFeet(start, destination) {
    let difference=Math.abs(destination - start)
    return difference * 264
  }
  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start,destination);
    if(distance < 400) {
        return 0
    }
    else if (distance > 400 && distance <2000) {
    return (distance -400) *0.02;
    }
    else if (distance >2000 && distance <2500) {
        return 25;
    }else{
        return 'cannot travel that far'
    }
  }