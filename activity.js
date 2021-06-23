
//inital string 
var input = "Albany|22.2*Caribou|9.5*Columbia|44.6*Denver|29.2*Indianapolis|26.5*Montgomery|46.6*San Diego|57.8*Tulsa|36.4*Tampa|61.3*Billings|24.0"

//Splitting the string into each city and temp in fahrenheit 
var citiesFahrenheit  = input.split('*');

//arrays to hold results in celsius
var cold = [];
var hot = [];
var moderate = [];


for(var i=0; i<citiesFahrenheit .length;i++)
{
    //putting the city and temp in an array
    var num = citiesFahrenheit [i].split('|');

    //taking the number and converting it to celsius
    var result = convert(num[1]);

    //storing the result and city name in a new string
    var newString = num[0] + "(" + result+ ")";

    //storing that string in the temp arrays 
    if(result < 20)
    {
        cold.push(newString);
    }
    else if(result > 30)
    {
        hot.push(newString);
    }
    else
    {
        moderate.push(newString);
    }
}

 print();

//HELPER FUNCTIONS
//Function to print the results
function print()
{
    console.log('Cold:');
    for(var i = 0; i < cold.length;i++)
    {
        console.log(cold[i]);
    }
    console.log('Moderate:');
    for(var i = 0; i < moderate.length;i++)
    {
        console.log(moderate[i]);
    }
    console.log('Hot:');
    for(var i = 0; i < hot.length;i++)
    {
        console.log(hot[i]);
    }
}

//Function to convert from fahrenheit to celsius
function convert(a){
    var cel = (a - 32) * 5/9;
    return cel.toFixed(2);
}