function  onlyCharacter( str ) {
          // You have to write your code here

          if ( typeof str !== "string"){
            return "Invalid";
          }

          let withoutSpaces = str.replace(/\s+/g, "");
          return withoutSpaces.toUpperCase();
}