// import React from 'react';
// class Card extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             image:null,
//             titre:'',
//             description:''
//         }
//     }

    
//         componentDidMount(){
//         fetch('https://image.tmdb.org/t/p/w300/mb7wQv0adK3kjOUr9n93mANHhPJ.jpg')
//         .then(res=> res.json())
//         .then(data=>{
//             console.log('iamge');
//             this.setState({
//                 image:data[0]
//             });

//         });
//     }
//     render () {
//         return (
//             <div> </div>
//         );
//     }
// }
// export default Card;