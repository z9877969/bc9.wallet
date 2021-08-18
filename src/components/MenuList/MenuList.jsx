const menuList = [{
    name: "delete",
    title: "Удалить"
},
{
    name: "edit",
    title: "Переименовать"
}
]


const MenuList = () => {
    return (
        <ul className="">
            {menuList.map(({ name, title }) =>
                <li key={name} >
                    <button type="button" name={name}>{title}</button>
                </li>
            )}
        </ul>
    );
}

export default MenuList;