import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom';
import { useWindowDimensions, Text, ScrollView} from 'react-native';
import Typist from "react-typist";
import './index.css';
import arrow from "./imgs/arrow.png";
import prof_pic from "./imgs/profile_pic.jpg";
import {Row, Col, Container, Image, Tabs, Tab, Button, Card, CardDeck, ListGroup, Form, Toast} from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import website from "./imgs/website.png";
import coming_soon from "./imgs/coming-soon.png";
import fb from "./imgs/f.png";
import github from "./imgs/github.png"
import A from "./imgs/A copy.png"
import config from "./config.json"
var CryptoJS = require("crypto-js");
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.default.CanvasJS;
var CanvasJSChart = CanvasJSReact.default.CanvasJSChart;


function MakeToast(props){
	const [showA, setShowA] = useState(true);
	const toggleShowA = () => setShowA(!showA);
	var message = "";
	if (props.work == "Unsuccessful"){
		message = "Oops, something went wrong. Please check your internet connection and try again later."
	} else{
		message = "Thanks so much for leaving feedback, your message has been sent (woohoo! I will follow up with a reply as soon as I can!"
	}
	
	return (
		<Toast style={{marginLeft:"20%", marginRight:"20%", maxWidth:"none"}} show={showA} onClose={toggleShowA}>
			<Toast.Header>
			<img
				src={A}
				style={{width:"3%"}}
				className="rounded mr-2"
				alt=""
			/>
			<strong className="mr-auto">Comment Bot</strong>
			<small>{props.work}</small>
			</Toast.Header>
			<Toast.Body>{message}</Toast.Body>
		</Toast>)
}

class Contact extends Component{
	constructor(props){
		super(props);
		this.state = {postWork:null};
	}
	
	email = (e) => {
		var bytes = CryptoJS.AES.decrypt("U2FsdGVkX19xjwN83thdsxC7+TiXm98nlAP5QGgZ7VZfeAyE5ZLt2VsNvt30+nDI+zO9FEh4ANfq8WgFARu+6K9SqideoaB9FLYMdf1a1KAsOWn9fZPSzRmOS7Q0EF2avP5GE2Bf/FSNDuQzcacdmg==", config.password)
		var url = bytes.toString(CryptoJS.enc.Utf8);

		e.preventDefault();
		var from = "Message from " + this.refs.email.value + ":\n"
		var message = this.refs.comment.value;
		var formatted = '{"text":"' + from + message + '"}';
		fetch(url, {
			method: "POST",
			body:formatted
		}).then(response => {
			if (!response.ok){
				this.setState({postWork:"Unsuccessful"})
			}else{
				this.setState({postWork:"Successful"})
			}});
	}

	renderContact = () => {
		if (this.state.postWork == null){
			return (<Card style={{marginLeft:"20%", marginRight:"20%"}}>
				<Card.Body>
				<Card.Title>Leave a Comment</Card.Title>
					<Form onSubmit={this.email} id="comments">
						<Form.Group>
							<Form.Label>Email address</Form.Label>
							<Form.Control ref="email" type="email" placeholder="name@example.com" />
						</Form.Group>
						<Form.Group>
							<Form.Label>Message</Form.Label>
							<Form.Control ref="comment" as="textarea" rows="3" placeholder="Wow AJ your website is so great!"/>
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Card.Body>
			</Card>)
		}else{
			return <MakeToast work={this.state.postWork}/>
		}
	}

	render (){
		return (
			<div id="contact" style={{width:"100%", height:"100%", background:"#282828", }}>
				<br/>
				<div class="line">
					<Text style={{textAlign:"center", width: "100%", display: "inline-block",
					fontSize:"5vw", whiteSpace:"pre", color:"#f2f2f2"}}> Contact Me </Text>
				</div>
				<div style={{width:"100%", paddingBottom:"2%", marginLeft:"20%"}}>
					<Text style={{fontSize:"2vw", color:"#f2f2f2", marginRight:"2%"}}>Find me on:</Text>
					<a href="https://www.facebook.com/aj.druck/"><img class="icon" style={{borderRadius:"50%"}} src={fb}/></a>
					<a href="https://github.com/djdrack"><img class="icon" src={github}/></a>
				</div>
				<div style={{paddingBottom:"7%"}}>
					{this.renderContact()}
				</div>
				
			</div>
		)
	}
}

function Tags(props){
	var t = [];
	props.tags.forEach(function (tag, _){
		
		t.push(<Button size="sm" >{tag}</Button>);
		t.push(<Text style={{whiteSpace:"pre"}}> </Text>);
	});
	return (<div>{t}</div>)
}

class Projects extends Component{
	render() {
		return (
			<div id="projects" style={{width:"100%", height:"100%", background:"#eae7dc", paddingBottom: "8%"}}>
				<br/>
				<div class="line">
					<Text style={{textAlign:"center", width: "100%", display: "inline-block",
					fontSize:"5vw", whiteSpace:"pre", color:"#00887A"}}> Personal Projects </Text>
				</div>
				<CardDeck class="card-deck cards">
				<Card>
					<Card.Header style={{fontSize:"1.3vw"}}><b>My personal website</b></Card.Header>
					<Card.Img variant="top" src={website} />
					<Card.Body>
					<Card.Text>
						This website an interactive personal resume built using React and React-Bootstrap. This project is a fun way to show my skills and also learn a valuable skill in the processs!
					</Card.Text>
					</Card.Body>
					<Card.Footer>
						<ScrollView horizontal={true} bounce={true}>
							<small className="text-muted" class="tag">
								<Tags tags={["React", "JavaScript", "Bootstrap", "NPM"]} />
							</small>
						</ScrollView>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Header style={{fontSize:"1.3vw"}}><b>Coming Soon!</b></Card.Header>
					<Card.Img variant="top" src={coming_soon} style={{height:"190px"}}/>
					<Card.Body>
					<Card.Text>
						I haven't made any other projets yet but I always have some ideas on the backburner.
					</Card.Text>
					</Card.Body>
					<Card.Footer>
					<small className="text-muted">Nothing, <i>yet...</i></small>
					</Card.Footer>
				</Card>
			</CardDeck>
			</div>
		)
	}
}

class Skills extends Component{
	render() {
		const options1 = {
			animationEnabled: true,
			theme: "light2",
			axisX: {
				title: "Programming Language",
				reversed: true,
			},
			axisY: {
				title: "Proficiency (%)",
				labelFormatter: this.addSymbols,
				maximum: 100,
				interval: 10
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  100, label: "Python" },
					{ y:  80, label: "C" },
					{ y:  80, label: "R" },
					{ y:  70, label: "SML" },
					{ y: 70, label: "Latex"},
					{ y:  30, label: "Go" },
					{ y: 30, label: "Java"}
				]
			}]
		}
		const options2 = {
			animationEnabled: true,
			theme: "light2",
			axisX: {
				title: "Tools and Frameworks",
				reversed: true,
			},
			axisY: {
				title: "Proficiency (%)",
				maximum: 100,
				interval: 10
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y: 80, label: "Microsoft Office"},
					{ y: 70, label: "Numpy"},
					{ y: 70, label: "Pandas"},
					{ y: 60, label: "Flask" },
					{ y:  55, label: "HTML/CSS" },
					{ y:  55, label: "React" },
					{ y: 50, label: "Bootstrap"},
					{ y: 40, label: "Git Version Control"}
				]
			}]
		}
		const options3 = {
			animationEnabled: true,
			theme: "light2",
			axisX: {
				title: "Languages",
				reversed: true,
			},
			axisY: {
				title: "Proficiency (%)",
				maximum: 100,
				interval: 10
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y: 100, label: "English"},
					{ y: 80, label: "Hebrew" },
					{ y:  30, label: "Spanish"}
				]
			}]
		}
		return (
		<div id="Skills" style={{width:"100%", height:"100%", background:"#f2f2f2",
								paddingBottom:"5%"}}>
			<br/>
			<div class="line">
				<Text style={{textAlign:"center", width: "100%", display: "inline-block",
					fontSize:"5vw", whiteSpace:"pre", color:"#00887A"}}> Skills </Text>
			</div>
			<div style={{marginBottom: "2%"}}></div>
			<div style={{marginLeft: "20%", marginRight:"20%"}}>
				<Tabs defaultActiveKey="pl" mountOnEnter="true" unmountOnExit="false">
					<Tab eventKey="pl" title="Programming Languages">
						<div id="graph-container">
							<CanvasJSChart options = {options1} 
							/* onRef={ref => this.chart = ref} *//>
						</div>
					</Tab>
					<Tab eventKey="tools" title="Other Tools and Frameworks">
						<div id="graph-container" style={{width:"100%"}}>
							<CanvasJSChart options = {options2} 
							/* onRef={ref => this.chart = ref} *//>
						</div>
					</Tab>
					<Tab eventKey="l" title="Languages">
						<div id="graph-container" style={{width:"100%"}}>
							<CanvasJSChart options = {options3} 
							/* onRef={ref => this.chart = ref} *//>
						</div>
					</Tab>
				</Tabs>
			</div>
		</div>
		);
	}
}

function Acc(props){
	var useStyles = makeStyles((theme) => ({
		root: {
		  width: '100%',
		},
		heading: {
		  fontSize: theme.typography.pxToRem(15),
		  fontWeight: theme.typography.fontWeightRegular,
		},
	  }));
	var classes = useStyles();
	var final = [];
	for (let title of Object.keys(props.d)){
		var temp = [];
		for (let inner of props.d[title]){
			temp.push(<li>{inner}</li>);
		}
		final.push(
			<Accordion>
			<AccordionSummary
			expandIcon={<ExpandMoreIcon />}
			aria-controls="panel1a-content"
			id="panel1a-header"
			>
			<Typography className={classes.heading}>{title} </Typography>
			</AccordionSummary>
			<AccordionDetails>
			<Typography>
				<ul>{temp}</ul>
			</Typography>
			</AccordionDetails>
			</Accordion>)
	}

	return (<div className={classes.root}>{final}</div>)

}

function Experiences() {
	var d1 = {"Lead TA for 15-112: Fundamentals of Programming": 
	["I dealt with grading issues including rubrics and regrade requests.", 
	"I made sure course events were staffed and ran smoothly.",
	"I oversaw a staff of 15 people and held weekly course meetings."],
	"Orientation Counselor": 
	["I eased the college transition for incoming students, making sure they felt comfortable.",
	"I was available for all incoming freshman and completed training to handle any questions (even those related to difficult topics such as sex and alcohol).",
	"I facilitated many icebreakers and helped form bonds between the first years."]};

	var d2 = {"Full Stack Developer for ExamOptimum":
			["I helped optimize scheduling by reducing exam date conflicts based on student enrollment.",
			"This application is developed in Python using a Flask framework and SQL-Lite to communicate with servers.",
			"This application is widely used within the Mellon College of Science and is expanding its user base."],
			"Teaching Assistant for 15-112: Fundamentals of Programming":
			["I was a competitively chosen TA for an introductory coding class taught in Python.",
			"Responsibilities included teaching a weekly recitation of ~31 students, two one-hour review sessions a week, and weekly office hours.",
			"It was my duty to monitor struggling students and reach out to them for extra help if needed."]}

	var d3 = {"Computer Human Interaction: Mobile Privacy Security Lab — Dr. Jason Hong (CMU)":
			["I tested various machine learning models for the purpose of image captioning.",
			"I ran a user study on Amazon MTurk to find common errors in captioning and analyzed and parsed the resulting data.",
			"I integrated the results into an online platform to enable researchers to identify common model mistakes."],
			'Intersection Between Estimation and Optimization" ― Dr. G\u00E9rard Cornu\u00E9jols (CMU)':
			["I focused on whether certain estimators of general data were admissible, including the MLE and James Stein Shrinkage estimator.",
			"I tested various loss functions and assumptions on the distribution of data to see the differing results."]
		}
	return(
		<div id="experiences" style={{width:"100%", height:"100%", background:"#eae7dc"}}>
			<br/>
			<div class="line">
				<Text style={{textAlign:"center", width: "100%", display: "inline-block",
					fontSize:"5vw", whiteSpace:"pre", color:"#00887A"}}> Experiences </Text>
			</div>
			<div style={{marginBottom: "2%"}}>
			<CardDeck class="card-deck cards">
				<Card>
					<Card.Body>
					<Card.Title>Leadership Experience</Card.Title>
					<Card.Text>
						<Acc d={d1}/>
					</Card.Text>
					</Card.Body>
					<Card.Footer>
					<small className="text-muted">"It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform."
― Roy T. Bennett</small>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Body>
					<Card.Title>Developer and Coding Experience</Card.Title>
					<Card.Text>
						<Acc d={d2}/>
					</Card.Text>
					</Card.Body>
					<Card.Footer>
					<small className="text-muted">"Talk is cheap. Show me the code."
― Linus Torvalds </small>
					</Card.Footer>
				</Card>
			</CardDeck>
			<Card style={{display: "table", marginLeft: "20%", marginRight:"20%", marginTop: "2%"}}>
				<Card.Body>
				<Card.Title>Research Experience</Card.Title>
				<Card.Text>
					<Acc d={d3} />
				</Card.Text>
				</Card.Body>
				<Card.Footer>
				<small className="text-muted">"All I'm armed with is research." ― Mike Wallace </small>
				</Card.Footer>
			</Card>
			</div>
			<div style={{paddingBottom:"5%"}}>
			<Card style={{marginLeft: "20%", marginRight:"20%"}}>
				<Card.Body>
				<Card.Title>Selected Coursework</Card.Title>
				<ListGroup >
					<ListGroup horizontal > 
						<ListGroup.Item>Introduction to Machine Learning (Python)</ListGroup.Item>
						<ListGroup.Item>Introduction to Artificial Intelligence (Python)</ListGroup.Item>
						<ListGroup.Item>Natural Language Processing (Python)</ListGroup.Item>
					</ListGroup>
					<ListGroup horizontal > 
						<ListGroup.Item> Intro to Systems Programming (C) </ListGroup.Item>
						<ListGroup.Item> Parallel/Sequential Data Structures/Algorithms (SML) </ListGroup.Item>
						<ListGroup.Item> Functional Programming (SML) </ListGroup.Item>
					</ListGroup>
					<ListGroup horizontal > 
						<ListGroup.Item> Advanced Methods for Data Analysis (R) </ListGroup.Item>
						<ListGroup.Item> Linear Algebra </ListGroup.Item>
						<ListGroup.Item> Discrete Math </ListGroup.Item>
						<ListGroup.Item> Differential Equations </ListGroup.Item>
					</ListGroup>
				</ListGroup>
				</Card.Body>
			</Card>
			</div>
		</div>
		)
}


class Profile extends Component{
	paragraph1 = "My name is AJ Druck and I am a rising senior at Carnegie Mellon University. I am majoring in math with a concentration on operations research and statistics, I also have a minor in computer science. I am very interested in all things relating to big data and machine learning. In my free time I like to read, take walks, and watch TV/movies.";
	paragraph2 = "This website is designed to be an interactice personal resume to showcase my skills and also as a learning project to get some experience with web development using React. Please feel free to leave any comments at the bottom!"
	render (){ 
		return (
		<div id="profile" style={{width:"100%", height:"100%", background:"#f2f2f2", paddingBottom:"10%"}}>
			<br/>
			<div class="line">
				<Text style={{textAlign:"center", width: "100%", display: "inline-block",
					fontSize:"5vw", whiteSpace:"pre", color:"#00887A"}}> Profile </Text>
					<br/>
				<Text style={{textAlign:"center", width: "100%", display: "inline-block",
					fontSize:"2vw", whiteSpace:"pre", color:"#00887A"}}> Full Time Student, Big Data Enthusiast </Text>
			</div>
			<br/>
			<Container>
				<Row>
					<Col lg={{span:4, offset:1}} style={{padding:0}}>
						<Image id="prof_pic" src={prof_pic} className="img-fluid"
							 roundedCircle/>
					</Col>
					<Col md={{span: 5, offset:0}} style={{marginLeft:"55px", paddingLeft:"0px", paddingRight:"0px"}}>
						<Tabs defaultActiveKey="facts">
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
							<Tab eventKey="bio" title="Brief Bio" style={{marginLeft:"5px", lineHeight:"1.5"}}>
								<Text style={{fontSize: "1rem"}}>{this.paragraph1}</Text><br/><br/>
								<Text style={{fontSize: "1rem"}}>{this.paragraph2}</Text>
							</Tab>
						</Tabs>
					</Col>
				</Row>
			</Container>
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
			<Typist avgTypingDelay={250} cursor={{show:false}} id="typing">
				<span style={{fontSize:"9vw", borderBottom:"1px solid black", 
					whiteSpace:"pre", position: 'absolute', left: '50%', 
					top: '35%', transform: 'translate(-50%, -50%)',
					color: '#f2f2f2'
					}}> AJ Druck </span>
				</Typist>

			<div style={{position: 'absolute', bottom:"0%", left: "87%",
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
			<Experiences />
			<Skills />
			<Projects />
			<Contact />
		</div>)
	}


}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
