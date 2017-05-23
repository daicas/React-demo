import React, { Component } from 'react';
import { Button, Grid, Jumbotron} from 'react-bootstrap';
class Services extends Component{
    render(){
        return(
            <Grid>
              <h1>Services</h1>
              <nav aria-label="Page navigation">
  <ul className="pagination">
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
            </Grid>
        )
    }
}
 export default Services