import React from 'react';
import { connect } from 'react-redux';
import Pidgeon from "./Pidgeon";
import {deletePidgeon} from './redux'; 
function List(props){
    
    const { pidgeons, deletePidgeon } = props;
    return (
        <div>
            {pidgeons.map((pidgeon, i) => 
            <Pidgeon key={i} {...pidgeon} index={i} 
            deletePidgeon={deletePidgeon} />)}
        </div>
    )
}
export default connect(state => ({pidgeons: state}), {deletePidgeon})(List);
