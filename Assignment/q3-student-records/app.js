//jozza
const students = [
    { name: "Jozza", rollNo: "CS-594", marks: 88 },
    { name: "Abass", rollNo: "CS-601", marks: 74 },
    { name: "Ali", rollNo: "CS-602", marks: 91 },
    { name: "Sara", rollNo: "CS-603", marks: 65 },
    { name: "Hussain", rollNo: "CS-604", marks: 48 }
];
// Return grade according to marks
function getGrade(marks) { 

    if (marks >= 85) {
        return "A";
    }
    else if (marks >= 70) {
        return "B";
    }
    else if (marks >= 50) {
        return "C";
    }
    else {
        return "F";
    }
}
const table = document.getElementById("studentTable");

let total = 0;
let topStudent = students[0];
for (let i = 0; i < students.length; i++) {

    table.innerHTML += `
        <tr>
            <td>${students[i].name}</td>
            <td>${students[i].rollNo}</td>
            <td>${students[i].marks}</td>
            <td>${getGrade(students[i].marks)}</td>
        </tr>
    `;
    total = total + students[i].marks;
    if (students[i].marks > topStudent.marks) {
        topStudent = students[i];  }
}
const average = total / students.length;
document.getElementById("average").textContent =
    "Class Average: " + average.toFixed(1);

document.getElementById("topScorer").textContent =
    "Top Scorer: " + topStudent.name;
