import React, { Fragment, useEffect } from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { deleteFeedbackAction , clearErrors , allFeedbackAction } from '../../../actions/feedbackActions';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from '../Dashboard/Sidebar.jsx';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link , useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { DELETE_FEEDBACK_RESET } from '../../../constants/feedbackConstants';
import { toast } from 'react-toastify';
import Loader from '../../layout/Loader/Loader.jsx';



const AllFeedbacks = () => {

  const {loading,error,feedbacks} = useSelector((state)=>state.allFeedbacks);
  const {error:deleteUser,success , message} = useSelector((state)=>state.createFeedback);




  const history = useNavigate();


  const dispatch = useDispatch();

  const deleteSubmitHandler = (id) => {
    dispatch(deleteFeedbackAction(id))

  }


  const columns = [
    {
     field:"id",
     headerName:"Feedback ID's",
     minWidth:200,
     flex:2.5
    },
   {
    field:"name",
    headerName:"Client Names",
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
    headerName:"Client Title",
    minWidth:200,
    flex:1
  },
 {
    field:"description",
    headerName:"Feedbacks",
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

feedbacks && feedbacks.map((user) =>(
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
            type:DELETE_FEEDBACK_RESET
        })
    }
  

    dispatch(allFeedbackAction())
 
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
                        <h1 id='productListHeading'>All Feedbacks Data Management</h1>
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
       

export default AllFeedbacks