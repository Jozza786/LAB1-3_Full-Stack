const students = [
    {
        name: "Jozza",
        rollNo: "CS-594",
        marks: 88
    },
    {
        name: "Abbas",
        rollNo: "CS-601",
        marks: 74
    },
    {
        name: "Ali",
        rollNo: "CS-602",
        marks: 91
    },
    {
        name: "Sara",
        rollNo: "CS-603",
        marks: 65
    },
    {
        name: "Hussain",
        rollNo: "CS-604",
        marks: 48
    }
];

// Return the grade according to marks
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

const studentTable = document.getElementById("studentTable");
const averageElement = document.getElementById("average");
const topScorerElement = document.getElementById("topScorer");

let totalMarks = 0;
let topStudent = students[0];

for (let i = 0; i < students.length; i++) {

    const student = students[i];

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.rollNo}</td>
        <td>${student.marks}</td>
        <td>${getGrade(student.marks)}</td>
    `;

    studentTable.appendChild(row);

    totalMarks = totalMarks + student.marks;

    if (student.marks > topStudent.marks) {
        topStudent = student;
    }
}

const average = totalMarks / students.length;

averageElement.textContent = "Class Average: " + average.toFixed(1);

topScorerElement.textContent =
    "Top Scorer: " + topStudent.name + " (" + topStudent.marks + " marks)";