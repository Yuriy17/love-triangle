/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var num=0,i,firstSpichonee=0,secondSpichonee=0,thirdSpichonee=0;
  for(i=0; i<preferences.length; i++){

  	if(preferences[i]!==undefined){
  			firstSpichonee=preferences[i];
  	}else{continue;}

  	thirdSpichonee=i+1;

  	if(firstSpichonee<preferences.length && preferences[firstSpichonee-1]!==undefined){

  			secondSpichonee=preferences[firstSpichonee-1];

  			if(preferences[secondSpichonee-1]===thirdSpichonee){  				
  					num++;
  					delete preferences[i];
  					delete preferences[firstSpichonee-1];				
  					delete preferences[secondSpichonee-1];		
  			}else{continue;}
  	}else{continue;}
  }
  return num;
};
