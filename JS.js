function  searchByName(year, peopleArray) {
    return peopleArray.filter(person => person.year > year)
}
function searchByName(length, peoplyArray) {
    return peoplyArray.filter(person => person.name.length > length)
}