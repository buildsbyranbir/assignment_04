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

