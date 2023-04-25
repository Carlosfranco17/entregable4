import React from "react";

const Modal = ({ isShowForm, setIsShowForm, register, handleSubmit,Submit}) => {
  const handleClickClosedModal = () => {
    setIsShowForm((isShowForm) => !isShowForm);
  };

  return (
    <section
      className={`fixed top-0 left-0 botton-0 right-0 bg-black/40 flex justify-center items-center h-screen transition-opacity ${
        isShowForm ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <form
        onSubmit={handleSubmit(Submit)}
        className="bg-white p-4 grid gap-4 w-[300px] relative"
      >
        <h3 className="text-2xl font-semibold">Nuevo usuario</h3>

        <div className="grid  gap-1">
          <label className="text-xs font-semibold" htmlFor="first_name">
            Nombre
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="first_name"
            type="text"
            {...register("first_name")}
          />
        </div>

        <div className="grid  gap-1">
          <label className="text-xs font-semibold" htmlFor="last_name">
            Apellido
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="last_name"
            type="text"
            {...register("last_name")}
          />
        </div>

        <div className="grid  gap-1">
          <label className="text-xs font-semibold" htmlFor="email">
            Correo
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="email"
            type="email"
            {...register("email")}
          />
        </div>

        <div className="grid  gap-1">
          <label className="text-xs font-semibold" htmlFor="password">
            Contraseña
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="password"
            type="password"
            {...register("password")}
          />
        </div>

        <div className="grid  gap-1">
          <label className="text-xs font-semibold" htmlFor="birthday">
            Cumpleaños
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="birthday"
            type="date"
            {...register("birthday")}
          />
        </div>

        <div className="grid  gap-1">
          <label className="text-xs font-semibold" htmlFor="image_url">
            URL imagen
          </label>
          <input
          value="https://randomuser.me/api/portraits/women/75.jpg"
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="image_url"
            type="text"
            {...register("image_url")}
          />
        </div>
        <i
          onClick={handleClickClosedModal}
          className="absolute text-2xl p-1 cursor-pointer hover:text-red-500 right-0 bx bx-x"
        ></i>

        <button className="w-full bg-purple-500 p-2 text-white font-semibold bg-[#555A88] hover:bg-[#555A88]/90 transition-colors text-sm">
          Agregar Nuevo Usuario
        </button>
      </form>
    </section>
  );
};

export default Modal;
