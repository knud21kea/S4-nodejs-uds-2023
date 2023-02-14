console.log(random(0, 10));

function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) - min);
    } // no semicolon because it is a function definition not a statement 

    const randomAnonymousFunction = function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) - min);
      };

      const randomArrowFunction = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) - min);
      };

      const randomArrowFunctionCompact = (min, max) => Math.floor(Math.random() * (max - min + 1) - min);

      function genericActionPerformer(genericAction, genericName) {        

        return genericAction(genericName);
      }

      const subtract = (name) => `${name} is subtracting`

      // task make it console.log Tobias is subtracting
      // must use both functions

      const textToLog = genericActionPerformer(subtract, "Tobias");
      console.log(textToLog);

      const walk = (name) => `${name} is walking`;

      // task maki it say Nicolas is walking

      const textToLogTwo = genericActionPerformer(walk, "Nicolas");
      console.log(textToLogTwo);

      // task read: Andrea
      
      const textToLogThree =  genericActionPerformer(((name) => `${name} is reading`), "Andrea");
      console.log(textToLogThree);

      




