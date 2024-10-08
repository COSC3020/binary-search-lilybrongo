function binarySearch(list, element) {
    // Initializing the needed variables in order to find the midpoint, then iterating through the list

    let low = 0;
    let high = list.length-1;


    //This will calculate the midpoint that will then be used to compare to other elements
    while (low <= high){
        let midpoint = Math.floor((high+low)/2);

        //Return the midpoint if it is equal to the element 
        if (list[midpoint] == element) {
            let first;
            for (let i = midpoint; list[i] == element; i--) {
                if (list[i] == element) {
                    first = i;
                }
            }
            return first;
        }

        //Adjusting the midpoint if the element is less than
        else if(list[midpoint] > element){
            high = midpoint - 1;
        }

        //Adjusting the midpoint if the element is greater than
        else {
            low = midpoint + 1;
        }    
    }

    //Exits loop if element is not found
    return -1;
}
