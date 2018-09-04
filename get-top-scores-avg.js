//Parameter: an array of objects containing student ID's and test scores.  Example: [{id: 1, score: 86}]
//Returns: array of unique student ID's
function getUniqueStudents(scores) {
    return scores
        .map(e => e.id)
        .filter((element, index, array) => array.indexOf(element) === index)
}

//First parameter: an array of objects containing student ID's and test scores.  Example: [{id: 1, score: 86}]
//Second Parameter: a number matching a student ID contained in the scores array.
//Returns: an array containing the top five scores for that user ID
function getTopFiveScores(scores, studentID) {
    return scores
        .filter(e => e.id == studentID)
        .map(e => e.score)
        .reduce((rolling, curr) => {
            if (rolling.length < 5) {
                rolling.push(curr)
            } else {
                lowestScore = Math.min(...rolling)
                if (curr > lowestScore) {
                    index = rolling.indexOf(lowestScore)
                    rolling[index] = curr
                }
            }
            return rolling
        }, [])

}

//Takes array of numbers and returns the average (num)
function getAverage(arr) {
    return arr.reduce((t, c) => t + c) / arr.length
}

const scores = [
    { id: 1, score: 76 },
    { id: 2, score: 45 },
    { id: 1, score: 88 },
    { id: 2, score: 14 },
    { id: 1, score: 76 },
    { id: 2, score: 65 },
    { id: 1, score: 98 },
    { id: 2, score: 55 },
    { id: 1, score: 76 },
    { id: 2, score: 87 },
    { id: 1, score: 76 },
    { id: 2, score: 62 },
    { id: 1, score: 89 },
    { id: 1, score: 99 }];

//Print everything out
getUniqueStudents(scores)
    .forEach(id => console.log("ID: " + id + " -> AvgScore: " + getAverage(getTopFiveScores(scores, id))))