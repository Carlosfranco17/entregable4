import React from "react";

const Header = ({ setIsShowForm }) => {
  const handleClickShowModal = () => {
    setIsShowForm((isShowForm) => !isShowForm);
  };
  return (
    <header className="flex justify-between p-12 border-[1px]">
      <h1 className="text-2xl font-semibold">Usuario</h1>

      <button
        onClick={handleClickShowModal}
        className="pl-6 pr-4 bg-purple-500 p-2 text-white font-semibold bg-[#555A88] hover:bg-[#555A88]/90 transition-colors text-sm "
      >
        <i className="bx bx-plus"></i> Crear nuevo usuario
      </button>
    </header>
  );
};

export default Header;
