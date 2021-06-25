import React , {Component} from 'react';
import './dataForm.css';
import { Button,TextField } from '@material-ui/core';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import TreeData from './grace.json'  






class AddDataForm extends Component{
    constructor(props){
        super(props);
        this.state={
            form_name:'',
            description:'',
            tree:"<h2>txfgvhbj</h2>",
        }
        this.listit=this.listit.bind(this)
        this.fetch_child=this.fetch_child.bind(this)
    }
    listit=(data,level)=>{
        var ro=[]
        for (var c in data) {
            ro.push(<h2>{c['name']}</h2>);
            
        }
        return ro
    }
    
    fetch_child=(datas)=>{
        var finalrow=[]
        for(let data in datas){
            finalrow.push(this.listit(datas[data]))
        }
        this.setState({tree:finalrow})
    }
    componentDidMount(){
        this.fetch_child(TreeData)
    }
    render(){
        return (
            <>
                <div className="dataform">
                    <div className='df-create-section'>
                        <div className='df-form-gen'>
                            <div className="df-title">Add Form</div>
                            <div className="df-subtitle">Form Essentials</div>
                            <div className="df-description" >Fill the listed field which will help you to identify this form later</div>
                            <div className="df-form-ess">
                                <TextField id="outlined-basic" label="Form Name" variant="outlined" /><br/>
                                <TextField id="outlined-basic-large" label="Description" variant="outlined"/>
                                <div className="df-create2"><Button variant="contained" color="primary" startIcon={<CreateOutlinedIcon />}> Create </Button></div>
                                <div className="df-create2"><Button variant="contained" href='/' color="secondary" startIcon={<CreateOutlinedIcon />}> Discard </Button></div>
                            </div>
                            <div className="df-subtitle">Add fields</div>
                            <div className="df-description" >choose the listed fields which will be the part of form created</div>
                            <div className="df-create-section">
                                <div className="df-dnd">
                                    {this.state.tree}
                                </div>
                            </div>
                        </div>
                        <div className="df-form-pre-con">
                            <div className='df-form-pre'>

                            </div>
                        </div>
                    </div>
                    <div className="df-end" ></div>
                    <div className="df-footer" ></div>
                    
                </div>
            </>
            );
        }
}

export default AddDataForm;
