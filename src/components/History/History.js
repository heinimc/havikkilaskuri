import React from 'react';
import moment from 'moment';
import Content from '../Content/Content';


function History(props) {
  
  let kuukausi = moment(props.kuukausi);

  return(
    <Content>

      <div className="history"><h2>Historia</h2>
        <div className="history__row">
          <div className="history__kuukausi">{kuukausi.format("MMMM.YYYY")}</div>
        </div>

        <div className="history__row">
         <div className="history__kasvikset">{props.data.eurot}</div>
         <div className="history__maitotuotteet">Maitotuotteet 50€</div>
         </div>

         <div className="history__row">
          <div className="history__proteiinit">Proteiinit 90 €</div>
          <div className="history__proteiinit">Viljat 20 €</div>
        </div>
      </div>
        </Content>

    );
}

   
 export default History;