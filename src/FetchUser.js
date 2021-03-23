import React, { Component } from 'react';


export default class FetchUser extends Component {
    
    state = {
        loading: true,  //by default loading is true 
        people: [] //by default person is null
    }

    //fetch data which has been rendered atleast once
    async componentDidMount(){
        const url = "https://api.randomuser.me/?results=6"; //query this url and fetch 6 users 
        const response = await fetch(url); //get response
        const data = await response.json(); //get json data 
        this.setState({people: data.results, loading: false}); //get first person, set to false 
        console.log(response);
        console.log(data);
    }

    render() {
        return (
            <div>   
                {this.state.loading || !this.state.people ? (<div className="col-sm-12 col-md-12 col-lg-12" style={{textAlign:"center", backgroundColor:"#fff"}}>Users Loading...</div>) : (
            // display person data
                <div style={{backgroundColor:"#fff"}} className="row">
                    {/* mapping through the array people and render each person */}
                    {this.state.people.map(person => ( //unique key prop for each person 
                        <div style={{textAlign:"center"}} className="col-sm-12 col-md-4 col-lg-4" key={person.login.uuid}> 
                            <img className="img-fluid" src={person.picture.large} alt="userpic"/>
                            <h3>
                                {person.name.title}{" "}
                                {person.name.first}{" "}
                                {person.name.last}
                            </h3>
                            <p>{person.email}</p>
                            <p>{person.phone}</p>
                        </div>
                    ))}

                </div>
                )}
            </div>
        )
    }
    
}
