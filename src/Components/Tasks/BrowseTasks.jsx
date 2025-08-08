import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Task from '../Homepage/task';
import { Helmet } from 'react-helmet-async';

const BrowseTasks = () => {
    
    const { tasks } = useContext(AuthContext);

    
    return (
      <div className="w-[96%] mx-auto lg:w-[80%] md:w-[90%] mt-24">
        <Helmet><title>Browse</title></Helmet>
      <h1 className="text-center text-[48px] font-medium mb-5">
        Browse Tasks
      </h1>
      <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {tasks.map((task) => {
          return <Task key={task._id} task={task} />;
        })}
      </div>
    </div>
    );
};

export default BrowseTasks;