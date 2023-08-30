

const Video = () => {
  return (
    <div className="vd"  style={{display:"flex" , justifyContent:"center", alignItems:"center", marginTop:"20px"}}
    >
      <iframe
          className="video"
            width="700"
            height="400"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"

          ></iframe>
    </div>
  )
}

export default Video