const CategoryItem = ({ isActive = false, name }) => {
    return (
        //eslint-disable-next-line
        <a className={`nav-link ${isActive ? 'active fw-bolder' : null }`
} aria-current="page" href = "#" > { name }</a >
    );
};

export default CategoryItem;