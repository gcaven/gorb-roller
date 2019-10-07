import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [BAB, setBAB] = useState([9, 4]);
  const [DEX, setDEX] = useState(8);
  const [kiAttack, setKiAttack] = useState(false);
  const [fullAttack, setFullAttack] = useState(false);
  const [haste, setHaste] = useState(false);
  const [sneakAttack, setSneakAttack] = useState(false);
  const [inariBuff, setInariBuff] = useState(false);
  const [rapidShot, setRapidShot] = useState(false);
  const [within30ft, setWithin30ft] = useState(false);
  const [flurryOfStars, setFlurryOfStars] = useState(false);
  const options = [
    { label: 'target within 30ft', enabled: within30ft, setEnabled: setWithin30ft },
    { label: 'Inari Buffing', enabled: inariBuff, setEnabled: setInariBuff },
    { label: 'Haste', enabled: haste, setEnabled: setHaste },
    { label: 'Spend Ki', enabled: kiAttack, setEnabled: setKiAttack },
    { label: 'Full Attack', enabled: fullAttack, setEnabled: setFullAttack },
    { label: 'Sneak Attack', enabled: sneakAttack, setEnabled: setSneakAttack },
    { label: 'Rapid Shot (req. Full Attack)', enabled: rapidShot && fullAttack, setEnabled: setRapidShot, disabled: !fullAttack },
    { label: 'Flurry of Stars (req. Full Attack)', enabled: flurryOfStars && fullAttack, setEnabled: setFlurryOfStars, disabled: !fullAttack },
  ];

  function calculateAttackRollBonus(babVal = 0) {
    let bonus = 0;
    const bab = BAB[babVal]; // unless its not, deal with later
    bonus += bab;
    bonus += DEX;
    if (inariBuff) bonus += 1;
    if (rapidShot) bonus -=2 ;
    if (within30ft) bonus += 1;
    if (flurryOfStars) bonus -= 2;
    return bonus;
  }

  function calculateDamageRoll() {
    let baseDMG = '10';
    let staticPlusses = 0;
    let everythingElse = '';
    if (sneakAttack) everythingElse += '7d6';
    if (inariBuff) {
      staticPlusses += 1;
      everythingElse += `${sneakAttack ? ' + ' : ''} 1d6 elemental`;
    }
    if (within30ft) staticPlusses += 1;
    let string = baseDMG;
    if (staticPlusses > 0) string += ` + ${staticPlusses}`;
    if (everythingElse.length > 0) string += ` + ${everythingElse}`;
    return string;
  }

  function calculateNumberOfAttacks() {
    let numAttacks = 1;
    if (kiAttack) numAttacks += 1;
    // if (fullAttack) numAttacks += 1;
    if (haste) numAttacks += 1;
    if (rapidShot) numAttacks += 1;
    if (flurryOfStars) numAttacks += 2;
    return numAttacks;
  }

  function calculateKiCost() {
    let kiCost = 0;
    if (kiAttack) kiCost++;
    if (flurryOfStars) kiCost++;
    return kiCost;
  }

  return (
    <div className="App">
      <Heading>Gorb Roller 1.2</Heading>
      <Configuration BAB={BAB} DEX={DEX} setBAB={setBAB} setDEX={setDEX} />
      <OptionsContainer>
        {options.map(option => <Selector {...option} />)}
      </OptionsContainer>
      <SummaryBlock>
        <div>{calculateNumberOfAttacks()} Attacks @</div>
        <div>
          <span>Attack Roll:</span>
          <span>1d20 + {calculateAttackRollBonus()}</span>
        </div>
        <div>
          <span>Damage Roll:</span>
          <span>{calculateDamageRoll()}</span>
        </div>
      </SummaryBlock>
      {fullAttack && (
        <SummaryBlock>
          <div>1 Attack @</div>
          <div>
            <span>Attack Roll:</span>
            <span>1d20 + {calculateAttackRollBonus(1)}</span>
          </div>
          <div>
            <span>Damage Roll:</span>
            <span>{calculateDamageRoll()}</span>
          </div>
        </SummaryBlock>
      )}
      <SummaryBlock>
        <span>Ki Cost: {calculateKiCost()}</span>
      </SummaryBlock>
    </div>
  );
}

function Configuration({ BAB, DEX, setBAB, setDEX }) {
  const [collapsed, setCollapsed] = useState(false);

  function setPartialBAB(max = BAB[0], min = BAB[1]) {
    setBAB([max, min]);
  }

  return (
    <>
      {/* <button 
        value={collapsed} 
        onClick={() => {setCollapsed(!collapsed)}}
      >
        Stats Config
      </button> */}
      {!collapsed && (
        <ConfigurationContainer>
          <Option>
            <label>Base Attack Bonus:</label>
            <NumberInput type="number" value={BAB[0]} onChange={e => setPartialBAB(e.target.value)}/>
            <span>/</span>
            <NumberInput type="number" value={BAB[1]} onChange={e => setPartialBAB(null, e.target.value)}/>
          </Option>
          <Option>
            <label>Dex Mod:</label>
            <NumberInput type="number" value={DEX} onChange={e => setDEX(e.target.value)}/>
          </Option>
        </ConfigurationContainer>
      )}

    </>
  )
}

function Selector({ enabled, label, setEnabled, disabled }) {
  return (
    <Option>
      <input 
        type="checkbox" 
        checked={enabled} 
        onChange={() => {setEnabled(!enabled)}}
        disabled={disabled}
      />
      <label>{label}</label>
    </Option>
  );
}

const Heading = styled.h3`
  width: 100%;
  margin: 0;
  padding: 15px 0 20px;
  text-align: center;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ConfigurationContainer = styled(OptionsContainer)`
  border-bottom: 1px solid #afa;
  padding-bottom: 15px;
  margin-bottom: 15px;
`;

const Option = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 25px;
  padding: 0 15px;
`;

const NumberInput = styled.input`
  font-size: 14px;
  padding: 2px 5px;
  border-radius: 4px;
  border: 1px solid #afa;
  background-color: #1e1e1e;
  color: white;
  width: 25px;
  margin-left: 5px;
  margin-right: 5px;
`;

const SummaryBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #afa;
  padding-top: 15px;
  margin-top: 15px;
`;

export default App;
