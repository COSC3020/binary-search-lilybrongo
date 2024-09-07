function binarySearch(list, element) {
    // Creating variables in order to find the midpoint. 
    // Will then iterate through the array after finding the midpoint 
    // and continue to use the high and low points to sort through the 
    let low = 0;
    let high = list.length-1;
    let midpoint;

    while (high >= low){
        midpoint = low + Math.floor((high-low)/2);

        if(list[mid] == x)
            return mid;

        if(list[mid] > x)
            high = mid - 1;

        else
            low = mid - 1;
    }


    return -1;
}
