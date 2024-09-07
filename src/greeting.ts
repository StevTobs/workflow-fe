interface Data {
    name: string;
    age: number;
    format?: "Table" | "Default"; 
  }
  
  function greeting(params: Data) {
    const { name, age, format = "Default" } = params; 
  
    switch (format) {
      case "Table":
        console.log("name : ", name); 
        console.log("age : ", age);
        console.log("format : ", format);
        break;
      case "Default":
        console.log(`Hi, ${name}`); 
        console.log(`age : ${age}`);
        break;
      default:
        console.log("Error: Invalid format");
    }
  }
  
//   greeting({ name: "Alice", age: 18, format: "Table" });
//   greeting({ name: "Bob", age: 18, format: "Default" });
//   greeting({ name: "Charlie", age: 18 }); // Hi, Charlie
//   greeting({ name: "Charlie", age: 18, format: "abc" }); // Error: Invalid format