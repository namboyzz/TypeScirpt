import { useEffect, useState } from "react"
import type { User } from "../../../interface/users";
import axios from "axios";
import { Link } from "react-router-dom";

const ListUser = () => {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(()=>{
        const fetchUsers = async () => {
            try{
                const res = await axios.get(`http://localhost:3000/users`);
                setUsers(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchUsers();
    },[])
    const handleDelete = async (id: string | number | undefined) => {
        try{
           const res =  await axios.delete(`http://localhost:3000/users/${id}`);
           if(confirm("Bạn có chắc chắn muốn xóa user này không?") || res.status === 200){
            alert("Xóa user thành công");
            setUsers(users.filter(user => user.id !== id));
           }
        }catch(err){
            console.log(err);
        }
    }
  return (
   <>
    <div className="flex justify-end mb-4">
      <Link
        to="/admin/users/add"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition font-medium"
      >
        + Thêm nhân viên
      </Link>
    </div>
        <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    user name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {users.map((user)=>(
                <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.name}
                </th>
                <td className="px-6 py-4">
                    {user.email}
                </td>
                
                <td className="px-6 py-4">
                    <Link to={`/admin/users/${user.id}`} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</Link>
                    <button onClick={()=> handleDelete( user.id)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                </td>
            </tr>
            ))}
            
        </tbody>
    </table>
        </div>
    </>
  )
}

export default ListUser
