 console.log('ml5 version:', ml5.version)
 
 classifier = ml5.imageClassifier('MobileNet', modelLoaded);
 
 function modelLoaded()
 {
     console.log('Model Loaded!');
 }
 
 function check1()
 {
     img1 = document.getElementById('oil');
     classifier.classify(img1, gotResult1);
 }
 function check2()
 {
     img2 = document.getElementById('phone');
     classifier.classify(img2, gotResult2);
 }
 function check3()
 {
     img3 = document.getElementById('fork');
     classifier.classify(img3, gotResult3);
 }
 function check4()
 {
     img4 = document.getElementById('spoon');
     classifier.classify(img4, gotResult4);
 }
 function check5()
 {
     img5 = document.getElementById('clock');
     classifier.classify(img5, gotResult5);
 }
 function gotResult1(error, results)
 {
     if (error)
     {
         console.error(error);
     } else
     {
         console.log(results);
         document.getElementById("object1").innerHTML = results[0].label;
     }
 }
 function gotResult2(error, results)
 {
     if (error)
     {
         console.error(error);
     } else
     {
         console.log(results);
         document.getElementById("object2").innerHTML = results[0].label;
     }
 }
 function gotResult3(error, results)
 {
     if (error)
     {
         console.error(error);
     } else
     {
         console.log(results);
         document.getElementById("object3").innerHTML = results[0].label;
     }
 }
 function gotResult4(error, results)
 {
     if (error)
     {
         console.error(error);
     } else
     {
         console.log(results);
         document.getElementById("object4").innerHTML = results[0].label;
     }
 }
 function gotResult5(error, results)
 {
     if (error)
     {
         console.error(error);
     } else
     {
         console.log(results);
         document.getElementById("object5").innerHTML = results[0].label;
     }
 }