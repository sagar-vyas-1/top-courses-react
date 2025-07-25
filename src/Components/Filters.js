
const Filter = ({filterData, category, setCategory}) => {

    // let category = category;
    // let setCategory = category;
    
    const filterHandler = (title) => {
        setCategory(title);
    }

    return (
        <div className="filter">
            {
                filterData.map( (data, index) => {
                    return <button onClick={() => filterHandler(data.title)} className="filter-btn" key={data.id || data.title || index}>{data.title}</button>
                })
            }
        </div>
    );
}

export default Filter;