import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../actions/actions'


export default function UserList() {

     const dispatch = useDispatch()
     const users = useSelector(state=>state.menustore)


     useEffect(() => {
        dispatch(getUser());
      },[]);
      console.log(users, "did we ?");

    return (
        <div>
            <h1>Liste des users</h1>
            
            {users.map((el,key) => (
            <div>
                <h2>{el.name}</h2>
                <p>{el.email}</p>
                <h3>{el.tel}</h3>
            </div>
        ))}

        </div>
    )
}