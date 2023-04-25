import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Modal from "./assets/components/Modal";
import Header from "./assets/components/Header";
import { useForm } from "react-hook-form";
import UserList from "./assets/components/UserList";

const BASE_URL = "https://users-crud.academlo.tech";

function App() {
  const { register, handleSubmit,reset } = useForm();
  const [users, setUsers] = useState([]);
  const [isShowForm, setIsShowForm] = useState(!false);
  const [sex, setsex] = useState()
  const [isUserIdEdit , setIsUserIdEdit  ] = useState()
 

  const Submit = (data) => {
    console.log(data);

    if(isUserIdEdit) {

      editUser(data)

    }else{
    createUsers(data);
    }

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

  const deleteUser=(id)=>{
    const URL= BASE_URL + `/users/${id}/`;

    axios.delete(URL)
    .then(()=>getAllUsers())
    .catch((err)=>console.log(err))
  }


  const handleClickEdit=(data)=>{

    setIsShowForm(isShowForm=>!isShowForm)
    reset(data)
    setIsUserIdEdit(data.id)
  }


  const editUser=(data)=>{

    const URL = BASE_URL + `/users/${isUserIdEdit}/`;

    axios
      .patch(URL, data)
      .then(() => {
      getAllUsers()
      reset(DEFAULT_VALUES)
      setIsShowForm(!isShowForm)
      setIsUserIdEdit()
      })
      .catch((err) => console.log(err));

  }

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
    <main className="font-sans bg-gray-200 min-h-screen">
      <Modal
      sex={sex}
      setsex={setsex}
        Submit={Submit}
        handleSubmit={handleSubmit}
        register={register}
        setIsShowForm={setIsShowForm}
        isShowForm={isShowForm}
        reset={reset}
        setIsUserIdEdit={setIsUserIdEdit}
        isUserIdEdit={isUserIdEdit}
      />

      <Header setIsShowForm={setIsShowForm} />

       <UserList handleClickEdit={handleClickEdit} deleteUser={deleteUser} users={users} />
    </main>
  );
}

export default App;
