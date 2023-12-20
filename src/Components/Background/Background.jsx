import './Background.css'
import video1 from '../../Assets/video.mp4'
import image1 from '../../Assets/1.jpg'
import image2 from '../../Assets/2.jpg'
import image3 from '../../Assets/3.jpg'

export const Background = ({PlayStatus,heroCount}) => {
    if (PlayStatus){
  return (
   <video className='background fade-in' autoPlay loop muted>
    <source src={video1} type='video/mp4' />
    </video>
  )
}
else if (heroCount===0){
    return <img src={image1} className='background fade-in' alt=""/>
}
else if (heroCount===1){
    return <img src={image2} className='background fade-in' alt=""/>
}
else if (heroCount===2){
    return <img src={image3} className='background fade-in' alt=""/>
}
}
export default Background