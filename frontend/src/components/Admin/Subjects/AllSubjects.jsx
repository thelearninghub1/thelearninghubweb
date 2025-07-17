import React, { Fragment, useEffect } from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { clearErrors , deleteSubjectAction , allSubjectsAction } from '../../../actions/subjectActions';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from '../Dashboard/Sidebar.jsx';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link , useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { DELETE_SUBJECT_RESET } from '../../../constants/subjectConstants';
import { toast } from 'react-toastify';
import './AllSubjects.css';
import Loader from '../../layout/Loader/Loader.jsx';



const AllSubjects = () => {

  const {loading,error,subjects} = useSelector((state)=>state.allSubjects);
  const {error:deleteUser,success , message} = useSelector((state)=>state.createSubject);




  const history = useNavigate();


  const dispatch = useDispatch();

  const deleteSubmitHandler = (id) => {
    dispatch(deleteSubjectAction(id))

  }


  const columns = [
    {
     field:"id",
     headerName:"Subject ID's",
     minWidth:160,
     flex:2.5
    },
   {
    field:"name",
    headerName:"Subject Names",
    minWidth:160,
    flex:1
  },
  {
    field:"createdAt",
    headerName:"Created At",
    minWidth:160,
    flex:1
  },
  {
    field:"teacher",
    headerName:"Teacher Name",
    minWidth:160,
    flex:1
  },
    {
    field:"grade",
    headerName:"Subject Grade",
    minWidth:160,
    flex:1
  },
  {
    field:"teacherQualification",
    headerName:"Teacher Qualification",
    minWidth:160,
    flex:1
  }, {
    field:"description",
    headerName:"Description",
    minWidth:250,
    flex:1
  },

  {
    field:"actions",
    headerName:"Actions",
    flex:0.3,
    minWidth:160,
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

subjects && subjects.map((user) =>(
    rows.push({
        id: user._id,
        description: user.description,
        teacherQualification: user.teacherQualification,
        teacher: user.teacher,
        grade: user.grade,
        name: user.name,
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
            type:DELETE_SUBJECT_RESET
        })
    }
  

    dispatch(allSubjectsAction())
 
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
                        <h1 id='productListHeading'>All Subjects Data Management</h1>
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
       

export default AllSubjects