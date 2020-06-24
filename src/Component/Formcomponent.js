import React,{Component,Fragment} from 'react';


const url="http://localhost:3000/artists"

class  Form extends  Component{
        constructor(){
            super()
            this.state={
                name:'',
                cover:'',
                bio:'',
            }
        }
        handleChangeName =(event) => {
            this.setState({name:event.target.value})
        }
        handleChangeCover =(event) => {
            this.setState({cover:event.target.value})
        }
        handleChangeBio =(event) => {
            this.setState({bio:event.target.value})
        }
        handleSubmit =() => {
            var random = Math.floor(Math.random()*10000)
            var data={
                "id":random,
                "name":this.state.name,
                "cover":this.state.cover,
                "bio":this.state.bio
            }
    
            fetch(url,{
                method:'POST',
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            })
            .then(this.props.history.push('/'))
        }



        render(){
            return(
                <Fragment>
                    
                    <div className="container">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                Artist Forms
                            </div>
                            <div className="panel-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control"
                                    value={this.state.name}
                                    onChange={this.handleChangeName}
                                    />
                                </div>
                            </div>
                            <div className="panel-body">
                                <div className="form-group">
                                    <label>Cover</label>
                                    <input type="text" className="form-control"
                                    value={this.state.cover}
                                    onChange={this.handleChangeCover}
                                    />
                                </div>
                            </div>
                            <div className="panel-body">
                                <div className="form-group">
                                    <label>Bio</label>
                                    <input type="text" className="form-control"
                                    value={this.state.bio}
                                    onChange={this.handleChangeBio}
                                    />
                                </div>
                            </div>
                            <button className="btn btn-success"
                            onClick={this.handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
    
                </Fragment>
            )
        }
    }
   
export default Form