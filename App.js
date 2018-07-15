import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions/actions'
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TodoApp from './components/TodoApp.js'

export default class App extends Component {
   render() {
      const btnDesign  = { /*Bootstrap Button Design*/
         display: "inline-block",
         marginBottom: "0px",
         fontSize: "14px",
         fontWeight: "400",
         lineHeight: "1.42857",
         textAlign: "center",
         whiteSpace: "nowrap",
         verticalAlign: "middle",
         touchAction: "manipulation",
         cursor: "pointer",
         userSelect: "none",
         padding: "6px 12px",
         borderWidth: "1px",
         borderStyle: "solid",
         borderColor: "transparent",
         borderImage: "initial",
         borderRadius: "4px",
         marginRight: "10px",
         backgroundColor: "rgb(0, 255, 243)",
         color: "rgb(255, 255, 255)",
         borderColor: "rgb(26, 179, 148)"
      }
      const link = {
         textDecoration: "none"  
      }
      const Loading = () => <h1>Loading...</h1>;
      const Calcualtor = Loadable({ //Loading Calcualtor with dynamic loding
         loader: () => import('./components/Calculator.js'),
         loading: Loading,
      });
      return (
         <Router>
            <div>
               <h2>@Redux Calcualtor & TodoApp with dynamic importing</h2>
               <button style={btnDesign}><Link style={link} to={'/'}>Home</Link></button>
               <button style={btnDesign}><Link style={link} to={'/TodoApp'}>TodoApp</Link></button>
               <button style={btnDesign}><Link style={link} to={'/Calcualtor'}>Calcualtor</Link></button>
               <hr />
               <Switch>
                  <Route exact path='/TodoApp' component={TodoApp} />
                  <Route exact path='/Calcualtor' component={Calcualtor} />
               </Switch>
            </div>
         </Router>
      )
   }
}
