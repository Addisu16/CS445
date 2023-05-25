async function displayStudents() {
    try {
      const studentsResponse = await fetch('http://www.example.com/students');
      const studentsData = await studentsResponse.json();
  
      for (const student of studentsData) {
        const studentId = student.id;
        const studentName = student.name;
        const courses = student.courses;
        let totalGrade = 0;
        let courseCount = 0;
  
        for (const courseId of courses) {
          const gradeResponse = await fetch(`http://www.example.com/grade?studentId=${studentId}&courseId=${courseId}`);
          const gradeData = await gradeResponse.json();
          const grade = gradeData.grade;
          totalGrade += grade;
          courseCount++;
        }
  
        const gradeAverage = totalGrade / courseCount;
  
        console.log(`{Student Name: ${studentName} Grade Average: ${gradeAverage}}`);
       
      }
    } catch (error) {
      console.log(error);
    }
  }
  