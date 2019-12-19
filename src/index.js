import React, {Component} from 'react';
import {render} from 'react-dom';
import Library from "./Lİbrary";

let bookList = [
    {},
    {"title": "red and white", "author": "henna", "pages": 260},
    {"title": "grey and orange", "author": "mehmet", "pages": 30},
    {"title": "hunger", "author": "mehmet", "pages": 30}
]








// class FavoriteColorForm extends React.Component {
//     state = {value: '#302ED1'}
//     newColor = e =>
//         this.setState({value: e.target.value})
//     submit = e => {
//         console.log(`New color: ${this.state.value}`)
//         e.preventDefault()
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.submit}>
//                 <label>Favorite Color:
//                     <input type="color"
//                         onChange={this.newColor}
//                         value={this.state.value}
//                     />
//                 </label>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }



render(
    <Library books={bookList}/>,
    document.getElementById('root')
);