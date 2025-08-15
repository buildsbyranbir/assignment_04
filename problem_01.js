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
    