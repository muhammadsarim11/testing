// ==========================================
// 1. JSON PARSING EXAMPLE
// ==========================================

// JSON data hamesha ek string format me aata hai network se
const jsonData = `{
  "students": [
    {
      "name": "Ali",
      "grade": "A"
    }
  ]
}`;

// Single line parser: Ye string ko direct JavaScript Object bana deta hai
const parsedJson = JSON.parse(jsonData);

// Data access karna bohot asan hai (Dot Notation)
console.log("--- JSON Output ---");
console.log(parsedJson.students[0].name);  // Output: Ali
console.log(parsedJson.students[0].grade); // Output: A


// ==========================================
// 2. XML PARSING EXAMPLE
// ==========================================

// XML data bhi string format me hota hai, tags ke sath
const xmlData = `
<students>
  <student>
    <name>Ali</name>
    <grade>A</grade>
  </student>
</students>
`;

// DOMParser built-in browser tool hai jo XML string ko ek HTML-like DOM document bana deta hai
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlData, "text/xml");

// Data access karne ke liye standard DOM methods use hote hain (Jaise HTML select karte hain)
const studentName = xmlDoc.getElementsByTagName("name")[0].textContent;
const studentGrade = xmlDoc.getElementsByTagName("grade")[0].textContent;

console.log("\n--- XML Output ---");
console.log(studentName);  // Output: Ali
console.log(studentGrade); // Output: A