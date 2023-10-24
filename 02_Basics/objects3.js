//Object constructor and API things

const course = {
    courseName: "Learn JS",
    price: "Free",
    courseInstructor: "ShawonOrib"

}
const {courseInstructor: instructor} = course;
console.log(instructor);

//JSON look below👇
/* 
{
    "name": "ShawonOrib",
    "courseName": "Learn JS",
    "price": "free"
}
*/