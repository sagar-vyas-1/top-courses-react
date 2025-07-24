
const Filter = ({filterData}) => {

    return (
        <div>
            {
                filterData.map( (data, index) => {
                    return <button key={data.id || data.title || index}>{data.title}</button>
                })
            }
        </div>
    );
}

export default Filter;