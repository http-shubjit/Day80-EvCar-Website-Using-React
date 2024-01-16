import './Hero.css'
import arrowbtn from "../../Assets/arrow_btn.png"
import playicon from '../../Assets/play_icon.png'
import pauseicon from '../../Assets/pause_icon.png'
const Hero = ({herodata,setherocount,herocount,setplaystatus,playstatus}) => 
{

  console.log(herodata)
  return (
    <div className='hero'>
      <div className="herotext">
        <p>{herodata.text1}</p>
        <p>{herodata.text2}</p>
      </div>
      <div className="heroexplore">
        <p>Explore The Feature</p>
        <img src={arrowbtn} alt="" />
      </div>
      <div className="herodotplay">
       <ul className="herodata">
        <li onClick={() =>setherocount(0)} className={herocount===0?"herodot orange":"herodot"}></li>
        <li onClick={() =>setherocount(1)} className={herocount===1?"herodot orange":"herodot"}></li>
        <li onClick={() =>setherocount(2)} className={herocount===2?"herodot orange":"herodot"}></li>
       </ul>
       <div className="heroplay">
        <img onClick={()=>setplaystatus(!playstatus)} src={playstatus?pauseicon:playicon} alt="" />
        <p>See The Video</p>
       </div>
      </div>


    </div>
  )
}

export default Hero