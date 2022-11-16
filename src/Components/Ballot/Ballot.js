import React from 'react';

const Ballot = (props) => {
  const { ballot } = props;
  console.log('ballot', ballot);
    
  return (
    <div className='ballot'>
      {ballot && ballot.map((item) => {
        return (
          <div key={item.id}>
            <h2>Category: {item.title}</h2>
            {item.items.map((el)=>{
              return(
                <ul key={el.id}>
                  <li><h3>{el.title}</h3></li>
                  <li><img src={el.photoUrL} alt={el.title}/></li>
                </ul>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Ballot;