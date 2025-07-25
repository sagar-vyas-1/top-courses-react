
const Filter = ({filterData}) => {

    return (
        <div className="filter">
            {
                filterData.map( (data, index) => {
                    return <button className="filter-btn" key={data.id || data.title || index}>{data.title}</button>
                })
            }
        </div>
    );
}

export default Filter;