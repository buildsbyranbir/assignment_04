/** Problem-01 : Train TT's Fine Calculator */
function totalFine( fare ) {
          // You have to write your code here

          if (typeof fare !== "number" || fare <= 0) {
            return "Invalid";
          }
          let extraCharge = fare * (20 / 100);
          let serviceCharge = 30;
          let total = fare + extraCharge + serviceCharge;
          return total;
}
    

/**Problem-02 : Clean & Capitalize Characters */
function onlyCharacter( str ) {
          // You have to write your code here

          if (typeof fare !== "number" || fare <= 0) {
            return "Invalid";
          }
          let extraCharge = fare * (20 / 100);
          let serviceCharge = 30;
          let total = fare + extraCharge + serviceCharge;
          return total;
}
    

/* Problem-03 : FIFA Best Team Award  */
function  bestTeam( player1, player2 ) {
          // You have to write your code here

          if (typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null) {
        return "Invalid";
    }

    let total1 = player1.foul + player1.cardY + player1.cardR;
    let total2 = player2.foul + player2.cardY + player2.cardR;

    if (total1 < total2) {
        return player1.name;
    } else if (total2 < total1) {
        return player2.name;
    } else {
        return "Tie";
    }
}


/* Problem-04 */
function  isSame(arr1 , arr2 ) {
          // You have to write your code here

           if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}



/* Problem-05: Exam Result Report Generator */
function  resultReport( marks ) {
          // You have to write your code here
          if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let total = 0;
    let passCount = 0;
    let failCount = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
        if (marks[i] >= 40) {
            passCount++;
        } else {
            failCount++;
        }
    }

    let finalScore = marks.length === 0 ? 0 : Math.round(total / marks.length);

    return {
        finalScore: finalScore,
        pass: passCount,
        fail: failCount
    };
}

