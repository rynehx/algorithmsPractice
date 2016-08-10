var test = [0, 0, 4, 0, 0, 6, 0, 0, 3, 0, 5, 0, 1, 0, 0, 0];


var volumeOfHistogram = function(arr){
 var highest = 0;
 var current = [];
 var last = 0; //idx of last none higher pillar
 var vol = 0;

 arr.forEach(function(el){
   if(el < highest){
     current.push(el);
     if(el > last){
       last = el
     }else{

     }

   }else{
     current.push(el);
     var waterBreak = highest;
     current.forEach(function(subEl){
       if(el<waterBreak){
         vol += (waterBreak - subEl);
       }
     });
     current = [];
     highest = el;
     last = 0;
   }
 });


};

volumeOfHistogram(test);
