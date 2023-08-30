import '../../CSS/TabTwo.css'
const TabTwo = () => {
    return (
        <>
       
        <div className="container container-resume" id='resumeId'>
          <div className="  resume-section">
          <div className='left'>
            <div className='profileText'>
              <div className='imgBox'>
                <img src='./Images/profilepic2.jpg' alt='pic' className='img-fluid'/>
              </div><br/>
              <h4>Prajakta Chiddarwar <br/> <span>Front End Developer</span></h4>
            </div>
       
            <div className='contactinfo'>
              <h3 className='title'>Contact Info :</h3>
              <ul>
                <li>
                  <span className='icons'><i className="fa fa-mobile"></i><p>Phono No.</p></span>
                  <span className='text'>+91 9067744154</span>
                </li>
                <li>
                  <span className='icons'><i className="fas fa-envelope"></i><p>Email Id</p></span>
                  <span className='text'>chiddarwarprajakta711@gmail.com</span>
                </li>
                <li>
                  <span className='icons'><i className="fab fa-github"></i><p>Git Account</p></span>
                  <span className='text'>https://github.com/PrajaktaChiddarwar</span>
                </li>
                {/* <li>
                  <span className='icons'><i className="fab fa-fire"></i><p>Firebase Account</p></span>
                  <span className='text'>https://github.com/PrajaktaChiddarwar</span>
                </li> */}
                <li>
                  <span className='icons'><i className="fab fa-linkedin"></i><p>Linkedin</p></span>
                  <span className='text'>https://www.linkedin.com/in/prajakta-chiddarwar-6178701a7/</span>
                </li>
              </ul>
              
            </div>
            <div className='contactinfo skills'>
              <h3 className='title'>Technical Skills :</h3>
              <h6 className='skillset'>Core Java, SQL,</h6>
                <h6 className='skillset'> HTML, CSS, JAVASCRIPT,</h6>
               <h6 className='skillset'>BOOTSTRAP, ReactJs, React Native</h6>
      
            </div>
            <div className='contactinfo skills'>
              <h3 className='title'>Software :</h3>
              <h6 className='skillset'>VS Code,      Eclipse,</h6>
               
               <h6 className='skillset'>Mysql Database</h6>
      
            </div>
      
          <div className='contactinfo Adress skills'>
          <h3 className='title'>Personal Information:</h3>
            <h6 className='skillset'>Name: Prajakta Vilas Chiddarwar</h6>
            <h6 className='skillset'>Date of birth: 30th April 1995</h6>
             <h6 className='skillset'>Address: B-1104, Golecha Ethos Wakad,Pune</h6>
             <h6 className='skillset'>Languages:	English, Marathi and Hindi.</h6>
          </div>
      
            </div>
          <div className='right'>
            <div className='aboutme-sec '>
              <h2 className='title'>PROFILE</h2>
              <p>Looking forward to obtain a position in a dynamic organization
      bringing exceptional abilities to handle multiple project work with
      high professionalism and skills.</p>
            </div>
            <div className='title'>
              <h5 className='title'>SELF MOTIVATED PROJECTS : </h5>
              <p>In this section, I have done some small projects usinh HTML, CSS ,Bootstrap  and ReactJs.</p>
              <h6>Project 1: HTML, CSS, Bootrsap and JS </h6>
              <p>In this project I have created a responsive website with navbar,header  section, footer section , hover effects, smoothscroll bar using js , animations,caresouel effects and many more  to make it nice and professional.</p>
      
            <h6>Project 2: HTML, CSS, Bootrsap and JS </h6>
            <p>This project mainly focus on Digital Agency Site, how the agency work, what they provide, why to choose this site , some clients reviews , testinomials, contact us footer with Copyright sections.</p>
          <h6> Project 3: ReactJs Projects</h6>
          <p>this is project section maily focus on core practice projects using reactjs such as: Accordion, Slot Machine Game,
          Netflix Webseries  Cards,
          Weather App (Using API),
          Digital Clock,
          Todo List and website using components,Events, hooks, Real time API, react router, and many topics.
      </p>
            </div>
            <div className='eductional-projects'>
              <h5 className='title'>ACADEMIC PROJECTS: </h5>
              <h6>Project 1: : E-Learning (Engineering)</h6>
              <p> In this Project, we provide information about various subjects from student convenience. All these subjects are explained in Pdfs, Tutorial format with relative MCQs and many more. Project was made on PHP platform.</p>
              <h6>Project 2: A Model to Measure Credibility of Information on Social Platform.</h6>
              <p>In this project, I have developed a web based chat application, which includes sign in, login, user and admin pages. Also created a chat box to post any news on it. The news will be first declare as undefined, if the news is new to previous database and admin panel will segregate the tweets basis of originality.  If any news is posted on chat box, this will first compare with database , if there is any relevant information found the news will auto segregate. </p>
            </div>
             
            <div className=' eductaion edu-sec'>
              <h5 className='title'>EDUCATION :</h5>
              <ul>
                <li>
                <h6>Mtech in Computer Engineering</h6>
                <p>Year of passing: 2022</p>
                <p>CGPA: 8.89</p>
                <p>College: Bharati Vidyapeeth (Deemed to be 
      University) College of Engineering,Pune.</p>
                </li>
                <li>
                <h6>BE in Computer Science and Engineering</h6>
                <p>Year of passing: 2016</p>
                <p>CGPA: 8.89</p>
                <p>College: Jawaharlal Darda Institute of 
      Engineering & Technology,Yavatmal(Amaravati).</p>
                </li>
                <li>
                <h6>Higher Secondary School Certificate(HSC)</h6>
                <p>Year of passing: 2012</p>
                <p>Percentage: 60%</p>
                <p>College: Yashoda Junior College,Nagpur.</p>
                </li>
                <li>
                <h6>Secondary school certificate(SSC)</h6>
                <p>Year of passing: 2010</p>
                <p>Percentage: 80%</p>
                <p>College: Mohanabai Girls High School,Digras(Amaravati)</p>
                </li>
              </ul>
              
            </div> 
          </div>
          </div>
          </div>
        </>
        )
}

export default TabTwo