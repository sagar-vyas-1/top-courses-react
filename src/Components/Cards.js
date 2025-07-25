import Card from "./Card";

const Cards = ({ courses }) => {

  const allCourses = Object.values(courses).flat();

  return (
    <div className="cards">
        {
            allCourses.map((course, index) => (
                <Card key={course.id || index} course={course} />
            ))
        }
    </div>
  );
};

export default Cards;
