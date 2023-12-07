const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let subarr = [];
	let ans = [];
	let sum = 0;
	for ( let i = 0; i < arr.length; i++ ){
		sum = sum + arr[i];
		if( sum == n ){
			subarr.push(arr[i]);
			ans.push(subarr);
			subarr = [];
			sum = 0;
		}
		else if(sum > n){
			ans.push(subarr);
			sum = arr[i];
			subarr = [arr[i]];
		}
		else{
			subarr.push(arr[i]);
		}
		
	}
	ans.push(subarr);
	return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

