import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CourseSkeleton = () => {
  return (
    <div className="skeleton-loading">
      {Array(10).fill(0).map((_, idx) => (
        <div className="card" key={idx}>
          <Skeleton height={140} className="card-img" />
          <div style={{ padding: '1rem' }}>
            <Skeleton width={180} height={20} />
            <Skeleton count={2} style={{ marginTop: '10px' }} />
            <Skeleton width={100} height={30} style={{ marginTop: '15px' }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseSkeleton;
