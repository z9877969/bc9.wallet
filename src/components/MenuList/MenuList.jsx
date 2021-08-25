const menuListDefault = [
  {
    name: "delete",
    title: "Удалить",
  },
  {
    name: "edit",
    title: "Переименовать",
  },
];

const MenuList = ({ menuList = menuListDefault, onChangeTouchedPeriod }) => {
  return (
    <ul className="">
      {menuList.map(({ name, title }) => (
        <li key={name}>
          <button
            type="button"
            name={name}
            onClick={() => onChangeTouchedPeriod({ name, title })}
          >
            {title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
