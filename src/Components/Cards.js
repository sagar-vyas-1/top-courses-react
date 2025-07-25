import Card from "./Card";

const Cards = ({ courses, category }) => {
  
  const getCourse = () => {
    if (category === 'All')
    {
      let allCourse = [];
      Object.values(courses).forEach(array => {
        array.forEach(courseData => {
          allCourse.push(courseData);
        })
      })
      return allCourse;
    }
    else 
    {
      return courses[category];
    }
  }

  return (
    <div className="cards">
        {
            getCourse().map((course, index) => (
                <Card key={course.id || index} course={course} />
            ))
        } 
    </div>
  );
};

export default Cards;
