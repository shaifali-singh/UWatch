import React from 'react';

const Spinner = props => {
  return (
    <div className="ui segment"  style={{minHeight:'500px'}}>
      <div class="ui active inverted dimmer">
         <div class="ui large text loader">Loading</div>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;
