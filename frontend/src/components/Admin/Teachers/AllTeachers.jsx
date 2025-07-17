import React, { Fragment, useEffect } from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { deleteTeacherAction , clearErrors , allTeacherAction } from '../../../actions/teacherActions';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from '../Dashboard/Sidebar.jsx';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link , useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { DELETE_TEACHER_RESET } from '../../../constants/teacherConstants';
import { toast } from 'react-toastify';
import Loader from '../../layout/Loader/Loader.jsx';



const AllTeachers = () => {

  const {loading,error,teachers} = useSelector((state)=>state.allTeachers);
  const {error:deleteUser,success , message} = useSelector((state)=>state.createTeacher);




  const history = useNavigate();


  const dispatch = useDispatch();

  const deleteSubmitHandler = (id) => {
    dispatch(deleteTeacherAction(id))

  }


  const columns = [
    {
     field:"id",
     headerName:"Teacher ID's",
     minWidth:200,
     flex:2.5
    },
   {
    field:"name",
    headerName:"Teacher Names",
    minWidth:200,
    flex:1
  },
  {
    field:"createdAt",
    headerName:"Created At",
    minWidth:200,
    flex:1
  },
  {
    field:"title",
    headerName:"Teacher Title",
    minWidth:200,
    flex:1
  },
 {
    field:"description",
    headerName:"Description",
    minWidth:350,
    flex:1
  },

  {
    field:"actions",
    headerName:"Actions",
    flex:0.3,
    minWidth:200,
    sortable:false,
    renderCell:(params)=>{
      return (
        <Fragment>
       
          <Link to={`edit/${params.row.id}`} >
          <EditIcon />
          </Link>
          <Button onClick={()=>deleteSubmitHandler(params.row.id)}>
          <DeleteIcon />
          </Button>
        </Fragment>
      )
    }
  }
];

const rows = [];

teachers && teachers.map((user) =>(
    rows.push({
        id: user._id,
        name: user.name,
        description: user.description,
        title: user.title,
        createdAt: String(user.createdAt).substr(0,10),
    })
))

  useEffect(()=>{
 
    if (error) {
        toast.error(error);
        dispatch(clearErrors());
    }
    if (deleteUser) {
        toast.error(deleteUser);
        dispatch(clearErrors());
    }
    if (success) {
        toast.success(message);
        history(`/dashboard`)

        dispatch({
            type:DELETE_TEACHER_RESET
        })
    }
  

    dispatch(allTeacherAction())
 
  },[dispatch,error,success,message,history,deleteUser])
  return (
    <Fragment>
        {
            loading ? (<Loader/>) : (
                <Fragment>
                <div className='dashboardMainWrapper'>
                  
            
                  <div className="dashboardLayout">
               
                      <div>
                          <Sidebar />
                      </div>
                      <div className='mainDiv'>
                      <div className="productListContainer" style={{ width: '100%', overflowX: 'auto' }}>
                        <h1 id='productListHeading'>All Teachers Data Management</h1>
                        <DataGrid
                          rows={rows}
                          columns={columns}
                          pageSize={10}
                          disableSelectionOnClick
                          className='productListTable'
                          autoHeight
                        />
                      </div>
              
                      </div>
                  </div>
                </div>
              
              
              
              </Fragment>
            )
        }
    </Fragment>
            )
        }
       

export default AllTeachers