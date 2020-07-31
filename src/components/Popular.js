import React from 'react';
// import placeholder from './placeholder.png';

class Popular extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movies:[],
        }
    }
    componentDidMount()
    {
     fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5fe0a95fce1b9223138fe6bacb954448')
     .then(res=>res.json())
     .then(json=>{
       console.log('movie#crpDOM',json)
       this.setState({
        movies:[],
       });
     });
    }
    render(){
        return (
            <div>
                popular
            </div>
        );
    }
}
export default Popular;