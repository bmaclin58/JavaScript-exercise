var johnScore, mikeScore, maryScore;

johnScoreAVR = (89 + 120 + 103)/3;
mikeScoreAVR = (116 + 94 + 123)/3;
maryScoreAVR = (97+ 134 + 105)/3;

console.log(johnScoreAVR+' '+mikeScoreAVR+' '+maryScoreAVR);

switch (true){
    case (johnScoreAVR > mikeScoreAVR && johnScoreAVR > maryScoreAVR):
        console.log("John's team has the highest average with an average score of "+johnScoreAVR);
        break;
    
    case (mikeScoreAVR > johnScoreAVR && mikeScoreAVR > maryScoreAVR):
        console.log("Mike's team has the highest average with an average score of "+mikeScoreAVR);
        break;

    case (maryScoreAVR > mikeScoreAVR && maryScoreAVR > johnScoreAVR):
        console.log("Mary's team has the highest average with an average score of "+maryScoreAVR);
        break;
    
    default:
        console.log("Looks like there's a 3 way tie!");
}