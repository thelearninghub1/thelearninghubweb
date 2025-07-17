import React, { Fragment, useEffect } from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { deleteCalenderAction , clearErrors , allCalenderAction } from '../../../actions/calenderAction';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from '../Dashboard/Sidebar.jsx';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link , useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { DELETE_CALENDER_RESET } from '../../../constants/calenderConstants';
import { toast } from 'react-toastify';
import Loader from '../../layout/Loader/Loader.jsx';



const AllCalenders = () => {

  const {loading,error,calenders} = useSelector((state)=>state.allCalenders);
  const {error:deleteUser,success , message} = useSelector((state)=>state.createCalender);




  const history = useNavigate();


  const dispatch = useDispatch();

  const deleteSubmitHandler = (id) => {
    dispatch(deleteCalenderAction(id))

  }


  const columns = [
    {
     field:"id",
     headerName:"Academic Calendar ID's",
     minWidth:200,
     flex:2.5
    },
  {
    field:"createdAt",
    headerName:"Created At",
    minWidth:200,
    flex:1
  },
  {
    field:"date",
    headerName:"Academic Calendar Date",
    minWidth:200,
    flex:1
  },
    {
    field:"details",
    headerName:"Academic Calendar Description",
    minWidth:300,
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

calenders && calenders.map((user) =>(
    rows.push({
        id: user._id,
        date: user.date,
        details: user.details,
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
            type:DELETE_CALENDER_RESET
        })
    }
  

    dispatch(allCalenderAction())
 
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
                        <h1 id='productListHeading'>All Academic Calendar Data Management</h1>
                        <DataGrid
                          rows={rows}
                          columns={columns}
                          pageSize={10}
                          disableSelectionOnClick
                          className='productListTable'
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
       

export default AllCalenders