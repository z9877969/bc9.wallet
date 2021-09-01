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

