const CategoryItem = ({ isActive = false, name }) => {
    return (
        //eslint-disable-next-line
        <h2 className={`nav-link ${isActive ? 'active fw-bolder' : null }`
} aria-current="page" href = "#" > { name }</h2 >
    );
};

export default CategoryItem;