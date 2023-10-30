const students = [
    {
      name: 'Sophia',
      attendance: [true, true, false, true, true],
      testScores: [88, 92, 85, 78, 90]
    },
    {
      name: 'Mason',
      attendance: [true, true, true, true, false],
      testScores: [70, 82, 88, 75, 62]
    },
    {
      name: 'Isabella',
      attendance: [true, false, false, true, true],
      testScores: [68, 71, 70, 60, 78]
    },
    {
      name: 'Liam',
      attendance: [true, true, true, true, true],
      testScores: [90, 87, 92, 88, 95]
    },
    {
      name: 'Olivia',
      attendance: [true, true, true, true, false],
      testScores: [72, 78, 75, 80, 62]
    }
  ]
  
  function getAttendanceRate(student) {
    const arrTrue = student.attendance.filter((stu) => stu)
    const result = (arrTrue.length / student.attendance.length) * 100
    return result
  }
  
  // console.log(getAttendanceRate(students[2]))
  
  function getAvgScore(student) {
    const sum = student.testScores.reduce((total, current) => total + current, 0)
    return sum / student.testScores.length
  }
  // console.log(getAvgScore(students[2]));
  
  function underPerformStudents(students) {
    
    const underPerform = students.filter(
      (student) => getAttendanceRate(student) < 80 && getAvgScore(student) < 70
    )
    
    const pass=underPerform.map((obj)=>{
      return {
        Name:obj.name,
        attendanceRate:getAttendanceRate(obj),
        avgScore:getAvgScore(obj)
      }
      
    })
    return pass
    
  }
  console.log(underPerformStudents(students))