import React , {Component} from 'react';
import './dataForm.css';
import DataformTable from './dftable';
import { Button } from '@material-ui/core';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import  {DataGrid}  from '@material-ui/data-grid';

const tabledata = [
    {id:1,form_name:"name1",description:"ct scan and xray",created_on:"25-06-2021"},
    {id:2,form_name:"name2",description:"ct scan",created_on:"26-06-2021"},
    {id:3,form_name:"name3",description:"ct scan xray",created_on:"25-06-2021"},
    {id:4,form_name:"name4",description:"xray",created_on:"24-06-2021"},
    {id:5,form_name:"name5",description:"x",created_on:"20-06-2021"},
]
const columndata=[
    { field: 'form_name', headerName: 'Form Name', description: 'Name of form',headerAlign: 'left',width:200 ,align:'left'},
    { field: 'description', headerName: 'Description',headerAlign: 'center',width:300,align:'center' },
    { field: 'created_on', headerName: 'Created On',headerAlign: 'right', description: 'Timestamp of form creation',width:150,align:'right' },
    { field: 'id', headerName: 'Options', hide: true ,headerAlign: 'center'},
    // {
    //     field: "none",
    //     headerName: "Options",
    //     headerAlign: 'right',
    //     width:150,
    //     align:'right',
    //     description: 'Click corresponding button to view this in detail',
    //     disableClickEventBubbling: true,
    //     renderCell: (params: CellParams) => {
    //     const onClick = () => {
    //         const api: GridApi = params.api;
    //         const fields = api
    //         .getAllColumns()
    //         .map((c) => c.field)
    //         .filter((c) => c !== "__check__" && !!c);
    //         console.log(fields)
    //         let thisRow = {};
    //         fields.forEach((f) => {console.log(f);});
    //         fields.forEach((f) => {if(!f)thisRow[f] = params.getValue(f);});
    //         localStorage.setItem('data_form_admin_id',thisRow.id)
    //         return alert(thisRow.id);
    //     };
    //     return <Button onClick={onClick} width='140' color="primary" variant="contained">View</Button>;
    //   }
    // },
  ];

class DataForm extends Component{
    render(){
        return (
            <>
                <div className="dataform">
                    <div className="df-title">Dataform</div>
                    <div className="df-subtitle">Forms</div>
                    <div className="df-description" >Here are the lists of form you created earlier</div>
                    <div className="df-table" ><DataGrid rows={tabledata} columns={columndata} pageSize={5}/></div>
                    {/* <div className="df-table" ><DataformTable data={tabledata} /></div> */}
                    <div className="df-create-section">
                        <div className='df-subdes'>
                            <div className="df-subtitle">Can't find form full filing your requirements ?</div>
                            <div className="df-description" >Click on <b>ADD FORM</b> button to create new form</div>
                        </div>
                        <div className="df-create"><Button href= variant="contained" color="primary" startIcon={<NoteAddOutlinedIcon />}> Add form </Button></div>
                    </div>
                    <div className="df-end" ></div>
                    <div className="df-footer" ></div>
                </div>
            </>
            );
        }
}

export default DataForm;
