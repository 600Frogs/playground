
function getUniqueStudents(scores) {
    return scores
        .map(e => e.id)
        .filter((element, index, array) => array.indexOf(element) === index)
}

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


getUniqueStudents(scores)
    .forEach(id => console.log("ID: " + id + " -> AvgScore: " + getAverage(getTopFiveScores(scores, id))))