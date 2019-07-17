import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from '@/pages/Index/Index'

const MyRouter = () => (
  <div>
    <Router>
      <Route path='/' component={Index} />
    </Router>
  </div>
);


export default MyRouter;