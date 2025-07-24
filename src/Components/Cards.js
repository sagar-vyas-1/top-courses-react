import Card from "./Card";

const Cards = ({ courses }) => {
    // if (!courses || Object.keys(courses).length === 0) {
    //     return <p>No courses available.</p>;
    // }

  const allCourses = Object.values(courses).flat();

  return (
    <div>
        {
            allCourses.map((course, index) => (
                <Card key={course.id || index} course={course} />
            ))
        }
    </div>
  );
};

export default Cards;
