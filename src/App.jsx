import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Modal from "./assets/components/Modal";
import Header from "./assets/components/Header";
import { useForm } from "react-hook-form";
import UserList from "./assets/components/UserList";

const BASE_URL = "https://users-crud.academlo.tech";

function App() {
  const [users, setUsers] = useState([]);

  const [isShowForm, setIsShowForm] = useState(false);

  const { register, handleSubmit,reset } = useForm();

  const Submit = (data) => {
    console.log(data);
    createUsers(data);
  };

  const createUsers = (data) => {
    const URL = BASE_URL + "/users/";

    axios
      .post(URL, data)
      .then(() => {
        getAllUsers();
        reset({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          birthday: "",
          image_url: "",
        });
        setIsShowForm(!isShowForm)
      })
      .catch((err) => console.log(err));
  };
  const getAllUsers = () => {
    const URL = BASE_URL + "/users/";

    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className="font-sans ">
      <Modal
        Submit={Submit}
        handleSubmit={handleSubmit}
        register={register}
        setIsShowForm={setIsShowForm}
        isShowForm={isShowForm}
      />

      <Header setIsShowForm={setIsShowForm} />

       <UserList users={users} />
    </main>
  );
}

export default App;
