import React from 'react'

const Cardcompo = (props) => {
  const { data } = props
  return (
    <div className='container'>
      {data.length ?
        data.map((item, index) => {
          return (
            <div class="ui cards" key={index}>
              <div class="card">
                <div class="content">
                  <img class="right floated mini ui image" src={item.imgpath} alt={`${item.name} broken image`} />
                  <div class="header">
                    {item.name}
                  </div>
                  <div class="meta">
                    {item.designation}
                  </div>
                  <div class="description">
                    {item.exp}
                  </div>
                </div>
              </div>
            </div >
          )
        }) :
        <p>Nothing to display</p>}
    </div >

  )
}

export default Cardcompo