import CategoryDetailsListItem from "./CategoryDetailsListItem/CategoryDetailsListItem";

const CategoryDetailsList = ({ detailsList }) => {
    return (
        <ul>
            {detailsList.map(({ id, ...detailsItem }) => <CategoryDetailsListItem {...detailsItem} key={id} />)
            }
        </ul >
    );
}

export default CategoryDetailsList;


// category
// :
// "Еда"
// comment
// :
// ""
// new entry
// :
// "USD"
// date
// :
// "2021-08-26"
// id
// :
// "XLNAWAB0z"
// sum
// :
// "350"
// time
// :
