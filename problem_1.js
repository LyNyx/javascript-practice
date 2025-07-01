const user_data_types = {
  u_info: "user_information",
  u_util: "user_utility",
};
const general_types = {
  STRING: "string",
  NUMBER: "number",
}
/**
* Validates that a value is of a specific type
* @param {*} value The value to check.
* @param {string} expectedType the type we expect the value to be.
* @param {string} propertyName the name of the property for a clear error message
*/
function validateType(value, expectedType, propertyName){
  const actualType = typeof value;
  if(actualType !== expectedType){
      throw new Error(`Invalid type for ${propertyName}. Expected ${expectedType}, but received ${actualType}.`);
  }
}
class User {
  constructor(id, name, age){
      this.id = id;
      this.name = name;
      this.age = age;
  }

  // Factory Method, belongs to the class itself
  static create(id, name, age) {
      try {
          // validate all inputs
          validateType(name, general_types.STRING, "name");
          validateType(age, general_types.NUMBER, "age");

          return new User(id, name, age);
      } catch (error) {
          console.error("User creation failed:", error.message);
          return false;
      }
  }
}
// --- fallback policy ---
function createUser(id, name, age){
  console.log(`\nAttempting to create a user with id: ${id}...`);

  // use static factory method
  const user = User.create(id,name,age);
  if(user){
      console.log("Success! User object created:", user);
  }else {
      console.log("Failure, executing fallback policy, user not added to system.")
  }
}

createUser(1,"Johnny", 30);
createUser(2, 1, 40);
