var number = 0;
var count = number;      
while (count < 5) {

    var count = number;  // I want to set it up so that *var count* equals *var number*
    console.log(count);   // So when I log *count* to console  it logs the current *number* value
    number++;
};