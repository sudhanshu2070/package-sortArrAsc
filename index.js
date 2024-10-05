function sortArrAsc(arr) {
    try {
        if (arr.length <= 1) {
            return arr;
        }

        const mid = Math.floor(arr.length / 2);
        const left = sortArrAsc(arr.slice(0, mid));
        const right = sortArrAsc(arr.slice(mid));

        return merge(left, right);
    } 
    catch (error) {
        console.error("An error occurred in sortArrAsc:", error);
        return []; // Returning an empty array on error
    }
}

function merge(left, right) {
    try {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            // Converting both elements to strings for length comparison
            if (String(left[leftIndex]).length <= String(right[rightIndex]).length) {
                result.push(left[leftIndex]);
                leftIndex++;
            } 
            else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

        // Concatenating remaining elements to get the result
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    } 
    catch (error) {
        console.error("An error occurred in merge:", error);
        return []; // Returning an empty array on error
    }
}

module.exports = sortArrAsc;
