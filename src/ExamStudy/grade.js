window.onload = function () {
    displayStudents()
}

async function displayStudents() {
        const result = await fetch('https://example.com/students');
        const data = await result.json();
        const studentData=data.students;
try{
        studentData.forEach(student => {
          let html= `<tr>
                    <td>${student.firstname}</td>
                    <td>${student.lastname}</td>
                    <td>${calculateLetterGrades(student.grades)}</td>
                </tr>
            `;
            document.getElementById('myTable').innerHTML = html;
        });

    }catch(error){
        console.log('error');
    }
  
}

function calculateLetterGrades(grades) {
    const letterGrades = [];
  
    for (let i = 0; i < grades.length; i++) {
      const grade = grades[i];
  
      if (grade >= 92 && grade <= 100) {
        letterGrades.push('A');
      } else if (grade >= 79 && grade <= 91) {
        letterGrades.push('B');
      } else {
        letterGrades.push('C');
      }
    }
  
    return letterGrades.join(',');
  }
  
