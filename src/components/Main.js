import React from 'react';
import { useState } from 'react';
import './style/Main.scss';

const Main = () => {
  const [control, setControl] = useState('manual');
  return (
    <main>
      <div className="container">
        <div className="betting">
          <div className="sidebar">
            <div className="manual-auto">
              <button onClick={() => setControl('manual')} className={control === 'manual' ? 'manual active' : 'manual'} >Manual</button>
              <button onClick={() => setControl('auto')} className={control === 'auto' ? 'auto active' : 'auto'}>Auto</button>
            </div>
            <div className="form">
              <div className="bet-amount form-group">
                <div className="label">
                  <span>Bet Amount</span>
                  <span>$100</span>
                </div>
                <div className="input-box">
                  <input type="number" min='1' max='100' />
                  <button>1/2</button>
                  <button>2x</button>
                </div>
              </div>
              <div className="risk form-group">
                <div className="label">
                  <span>Risk</span>
                </div>
                <div className="input-box">
                  <select name="" id="">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
              <div className="segment form-group">
                <div className="label">
                  <span>Segment</span>
                </div>
                <div className="input-box">
                  <select name="" id="">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </div>
              {
                control === 'auto' &&
                <div className="bets-number form-group">
                  <div className="label">
                    <span>Number of Bets</span>
                  </div>
                  <div className="input-box">
                    <input type="number" min='2' />
                  </div>
                </div>
              }
            </div>
            {control === 'manual' ?
              <button className="bet">Bet</button> :
              <button className="bet">Auto Start</button>}
          </div>
          <div className="spinner">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repellendus qui cum est temporibus ducimus rerum molestiae facilis asperiores in, impedit voluptas commodi, veniam dolorem aliquid voluptatum delectus ratione tenetur!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque optio nihil qui quis a animi sit ex, magni, soluta quisquam veniam rerum non in facilis quia ea, quos harum porro.
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;