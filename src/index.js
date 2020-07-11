import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { useWindowDimensions, Text } from 'react-native';
import Typist from "react-typist";
import './index.css';
import arrow from "./imgs/arrow.png";
import prof_pic from "./imgs/profile_pic.jpg";
import { Row, Col, Container, Image, Tabs, Tab, Button} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";



class Profile extends Component{
	paragraph1 = "My name is AJ Druck and I am a rising senior at Carnegie Mellon University. I am majoring in math with a concentration on operations research and statistics, I also have a minor in computer science. I am very interested in all things relating to big data and machine learning. In my free time I like to read, take walks, and watch TV/movies.";
	paragraph2 = "This website is designed to be an interactice personal resume to showcase my skills and also as a learning project to get some experience with web development using React. Please feel free to leave any comments at the bottom!"
	render (){ 
		return (
		<div id="profile" style={{width:"100%", height:"100%", background:"#f2f2f2"}}>
			<br/><br/>
			<div class="line">
				<Text style={{textAlign:"center", 
					fontSize:"5vw", whiteSpace:"pre", color:"#00887A"}}> Profile </Text>
			</div>
			<br/>
			<Container>
				<Row>
					<Col lg={{span:4, offset:1}} style={{padding:0}}>
						<Image id="prof_pic" src={prof_pic} className="img-fluid"
							 roundedCircle/>
					</Col>
					<Col md={{span: 5, offset:0}} style={{marginLeft:"55px", paddingLeft:"0px", paddingRight:"0px"}}>
						<Tabs defaultActiveKey="facts" id="uncontrolled-tab-example">
							<Tab eventKey="facts" title="Fast Facts" style={{marginLeft:"5px"}}>
								<dl>
									<dt>Full Name</dt>
									<dd>Abraham J Druck</dd>
									<dt>Education</dt>
									<dd> Carnegie Mellon University <span style={{float:"right"}}>Class of 2021</span></dd>
									<dt>Major</dt>
									<dd>Mathematical Sciences concentrating in Operations Research and Statistics</dd>
									<dt>Minor</dt>
									<dd>Computer Science</dd>
									<dt>Location</dt>
									<dd>Pittsburgh, PA</dd>
								</dl>
							</Tab>
							<Tab eventKey="bio" title="Brief Bio" style={{marginLeft:"5px"}}>
								<Text>{this.paragraph1}</Text><br/><br/>
								<Text>{this.paragraph2}</Text>
							</Tab>
						</Tabs>
					</Col>
				</Row>
			</Container>
			<br/>
			<br/>
		</div>
		
	)}
}

class Resume extends Component{
	render (){
		return (
			<Button style={{position:'absolute', left:"5%", top:"5%"}} variant="light" >
				<a href="./Resume.pdf" download style={{textDecoration:"none", color:"inherit"}}> Resume</a>
			</Button>)
	}
}

function HomeScreen() {
	let w = useWindowDimensions();
	let styles = {width:w.width, height:w.height, backgroundColor:'#77a6f7',};
	const handleImageClick = () => {
		document.getElementById("profile").scrollIntoView({ behavior: "smooth" });
	  };

	return(
		<div style={styles}>
			<Resume/>
			<Typist avgTypingDelay={250} cursor={{show:false}}>
				<span style={{fontSize:"9vw", borderBottom:"1px solid black", 
							
							whiteSpace:"pre", position: 'absolute', left: '50%', 
							top: '35%', transform: 'translate(-50%, -50%)',
							color: '#f2f2f2'
							}}> AJ Druck </span>
			</Typist>

			<div style={{position: 'absolute', bottom:"0%", left: "85%",
						 backgroundColor:"black", width:"8%", height:"15%",
						 display:"flex", justifyContent:"center"}}
						 onClick={handleImageClick}>
				<img src={arrow}  class="moveArrow"
				style={{width:"50%", height:"50%"}}/>
			</div>
			
		</div>);
}

class App extends Component{
	render () {
		return (
		<div>
			<HomeScreen />
			<Profile />
		</div>)
	}


}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
