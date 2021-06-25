import React , {Component} from 'react';
import './dataForm.css';
import { Button,TextField,Divider } from '@material-ui/core';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import TreeData from './grace.json'  
import Sortable from 'sortablejs';

class AddDataForm extends Component{
    constructor(props){
        super(props);
        this.state={
            form_name:'',
            description:'',
            tree:[],
        }
        this.list_it=this.list_it.bind(this)
        this.list_to_html=this.list_to_html.bind(this)
        this.fetch_child=this.fetch_child.bind(this)
    }

    list_to_html=(name,level,parent)=>{
        if(level===0){
            return <h1>{name}</h1>
        }
        else if(level===1){
            return <h2>{name}</h2>
        }
        else{
            return <h3>{name}</h3>
        }
    }
    list_it=(data,parent)=>{
        var ro=[]
        for (var c in data) {
            if(parent==="imaging_reports"){
                ro.push(this.list_to_html(data[parseInt(c)],1,parent));
            }
            else if(parent==="testing_reports"){
                ro.push(this.list_to_html(data[c]["test_name"],1,parent));
            }
            else{
                ro.push(this.list_to_html(data[c]['name'],1,parent));
            }
        }
        return ro
    }
    
    fetch_child=(datas)=>{
        var finalrow=[]
        let i=0;
        for(let data in datas){
            let title=`sortablelist{i}`
            // finalrow.push(<div id={title} className="sortable-left">)
            
            finalrow.push(<h1>{data}</h1>)
            if(data==="imaging_reports"){
                finalrow.push(this.list_it(datas[data]["parameters"][0]["test_names"],"imaging_reports"))
            }
            else if(data==="testing_reports"){
                finalrow.push(this.list_it(datas[data]["parameters"][0]["test_names"],"testing_reports"))
            }
            else{
                finalrow.push(this.list_it(datas[data]["parameters"],0))
            }
            finalrow.push(<br/>)
            {/* finalrow.push(</div>) */}
        }
        this.setState({tree:finalrow})
    }
    componentDidMount(){
        this.fetch_child(TreeData)

        var left1=document.getElementById('sortable-1-left')
        var right1=document.getElementById('sortable-1-right')
        console.log("into sort")
        console.log(left1)
        console.log(right1)
        new Sortable(left1, {
            group: {
                name: 's',
                // sort:true,
                // pull: 'clone',
                put: false // Do not allow items to be put into this list
            },
            animation: 150,
            sort: false // To disable sorting: set sort to false
        });

        new Sortable(right1, {
            group: {
                name:'s',
                sort:true,
            },
            animation: 150
        });

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
                                    <div className="sort-cat">
                                        <div className="sort-box">
                                            <h1>box1 left</h1>
                                            <Divider />
                                            <div id="sortable-1-left" className="sort-sub-box">
                                                <h2 className="sortable">1</h2>
                                                <h2 className="sortable">2</h2>
                                                <h2 className="sortable">3</h2>
                                                <h2 className="sortable">4</h2>
                                            </div>
                                        </div>
                                        <div className="sort-box">
                                            <h1>box1 right</h1>
                                            <div id="sortable-1-right" className="sort-sub-box">
                                            </div>
                                        </div>
                                    </div>
                                    {/* {this.state.tree} */}
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
