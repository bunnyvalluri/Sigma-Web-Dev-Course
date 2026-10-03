/**
 * ==========================================================================
 * Sigma Web Development Course - Video 080
 * Topic: Classes & Object-Oriented JavaScript
 * File: gs.js
 * 
 * Description:
 *   Covers ES6 classes, constructor functions, inheritance with extends/super, and getters/setters.
 * ==========================================================================
 */
class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("John");
  console.log(user.name); // John
  
  user.name = "Harry" // Name is too short.
  console.log(user.name)