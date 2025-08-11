import React from 'react'

    const Dates = ({ dates }) => {

      return (
        <div>
          {dates.map((d) => (
                <h3 style={{textAlign:"center"}}><u>Date: {d.date}</u></h3>
          ))}
        </div>
      )
    };

    export default Dates