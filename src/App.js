import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [BAB, setBAB] = useState([12, 7, 2]);
  const [DEX, setDEX] = useState(8);
  const [generalBonus, setGeneralBonus] = useState(0);
  const [kiAttack, setKiAttack] = useState(false);
  const [fullAttack, setFullAttack] = useState(false);
  const [haste, setHaste] = useState(false);
  const [sneakAttack, setSneakAttack] = useState(  false);
  const [inariBuff, setInariBuff] = useState(false);
  const [rapidShot, setRapidShot] = useState(false);
  const [within30ft, setWithin30ft] = useState(false);
  const [flanking, setFlanking] = useState(false);
  const [flurryOfStars, setFlurryOfStars] = useState(false);
  const options = [
    { label: 'Target Within 30ft', enabled: within30ft, setEnabled: setWithin30ft },
    { label: 'Target Flanked', enabled: flanking, setEnabled: setFlanking },
    { label: 'Whiskers Haste', enabled: haste, setEnabled: setHaste },
    { label: 'Spend Extra Ki', enabled: kiAttack, setEnabled: setKiAttack },
    { label: 'Sneak Attack', enabled: sneakAttack, setEnabled: setSneakAttack },
    { label: 'Inari Buffing', enabled: inariBuff, setEnabled: setInariBuff },
    { label: 'Full Attack', enabled: fullAttack, setEnabled: setFullAttack },
    { label: ' - Rapid Shot', enabled: rapidShot && fullAttack, setEnabled: setRapidShot, disabled: !fullAttack },
    { label: ' - Flurry of Stars', enabled: flurryOfStars && fullAttack, setEnabled: setFlurryOfStars, disabled: !fullAttack },
  ];

  function calculateAttackRollBonus(babVal = 0) {
    let bonus = 1; // weapon focus
    const bab = BAB[babVal]; // unless its not, deal with later
    bonus += bab;
    bonus += DEX;
    if (inariBuff) bonus += 1;
    if (haste) bonus += 1;
    if (within30ft) bonus += 1;
    if (flanking) bonus += 2;
    if (rapidShot) bonus -=2 ;
    if (flurryOfStars) bonus -= 2;
    bonus += generalBonus;
    return bonus;
  }

  function calculateDamageRoll() {
    let baseDMG = '11'; // 10 from shuriken, +1 from weapon focus
    let staticPlusses = 0;
    let everythingElse = '';
    if (sneakAttack) everythingElse += '8d6';
    if (inariBuff) {
      staticPlusses += 1;
      everythingElse += `${sneakAttack ? ' + ' : ''} 1d6 elemental`;
    }
    if (within30ft) staticPlusses += 1;
    if (haste) staticPlusses += 1;
    if (flanking) staticPlusses += 2;
    let string = baseDMG;
    if (staticPlusses > 0) string += ` + ${staticPlusses}`;
    if (everythingElse.length > 0) string += ` + ${everythingElse}`;
    if (generalBonus !== 0) {
      staticPlusses += generalBonus;
    }
    return string;
  }

  function calculateNumberOfAttacks() {
    let numAttacks = 1;
    if (kiAttack) numAttacks += 1;
    if (haste && fullAttack) numAttacks += 1;
    if (rapidShot && fullAttack) numAttacks += 1;
    if (flurryOfStars && fullAttack) numAttacks += 2;
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
      <Heading>Gorb Roller 1.8</Heading>
      <Configuration 
        BAB={BAB} 
        DEX={DEX} 
        bonus={generalBonus} 
        setBAB={setBAB} 
        setDEX={setDEX} 
        setBonus={setGeneralBonus} 
      />
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
        <>
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
          <SummaryBlock>
            <div>1 Attack @</div>
            <div>
              <span>Attack Roll:</span>
              <span>1d20 + {calculateAttackRollBonus(2)}</span>
            </div>
            <div>
              <span>Damage Roll:</span>
              <span>{calculateDamageRoll()}</span>
            </div>
          </SummaryBlock>
        </>
      )}
      <SummaryBlock>
        <span>Ki Cost: {calculateKiCost()}</span>
      </SummaryBlock>
    </div>
  );
}

function Configuration({ BAB, DEX, bonus, setBAB, setDEX, setBonus }) {
  const [collapsed, setCollapsed] = useState(false);

  function setPartialBAB(first = BAB[0], second = BAB[1], third = BAB[2]) {
    setBAB([parseInt(first), parseInt(second), parseInt(third)]);
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
            <NumberInput type="number" value={BAB[1]} onChange={e => setPartialBAB(BAB[0], e.target.value)}/>
            <span>/</span>
            <NumberInput type="number" value={BAB[2]} onChange={e => setPartialBAB(BAB[0], BAB[1], e.target.value)}/>
          </Option>
          <Option>
            <label>Dex Mod:</label>
            <NumberInput type="number" value={DEX} onChange={e => setDEX(parseInt(e.target.value))}/>
          </Option>
          <Option>
            <label>Bonus/Malus:</label>
            <NumberInput type="number" value={bonus} onChange={e => setBonus(parseInt(e.target.value))}/>
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
  width: 35px;
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
