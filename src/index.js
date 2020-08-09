import React, {Component, useState, useRef} from 'react';
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
import linkedIn from "./imgs/LI.png"
import config from "./config.json"
import useScrollSpy from 'react-use-scrollspy';
var CryptoJS = require("crypto-js");
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.default.CanvasJS;
var CanvasJSChart = CanvasJSReact.default.CanvasJSChart;

window.mobileCheck = function() {
	let check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};

if (window.mobileCheck()){
	alert("For best viewing experience, please use a laptop to visit this site");
}

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
		var bytes = CryptoJS.AES.decrypt("U2FsdGVkX19OZIUjD4DkKDkl9WBmECb9yBE2PmWzKoAPSSxCK4s9S/43n9TuFgnzAQQIgtbSETp9rEebYCtFdAJfQU1kqHSjPCJK4AkjT7sdZlGWLGTQ++VCCj4LWCzkcrndIjA8Cb2nAafBez/tjA==", config.password)
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
				<Card.Footer> Inspiration for the design of this website was taken from <a target="_blank" href="http://www.pascalvangemert.nl/"> here.</a></Card.Footer>
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
					<a target="_blank" href="https://www.facebook.com/aj.druck/"><img class="icon" style={{borderRadius:"50%"}} src={fb}/></a>
					<a target="_blank" href="https://github.com/djdrack"><img class="icon" src={github}/></a>
					<a target="_blank" href="https://www.linkedin.com/in/aj-druck-80b7021b4/"><img class="icon" src={linkedIn}/></a>
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
	["Summer 2019",
	"I dealt with grading issues including rubrics and regrade requests.", 
	"I made sure course events were staffed and ran smoothly.",
	"I oversaw a staff of 15 people and held weekly course meetings."],
	"Orientation Counselor": 
	["Summer 2019",
	"I eased the college transition for incoming students, making sure they felt comfortable.",
	"I was available for all incoming freshman and completed training to handle any questions (even those related to difficult topics such as sex and alcohol).",
	"I facilitated many icebreakers and helped form bonds between the first years."]};

	var d2 = {
		"Teaching Assistant for 15-281: Artificial Intelligence, Problem Solving and Representation":
		["Fall 2020",
		"I hold weekly recitations and office hours to help students understand concepts and clear up homework confusions.",
		"I grade homework and exams."],
		"Application Developer Intern at Morgan Stanley":
		["Summer 2020",
		"I worked with various machine learning models and techniques for sentence similarity such as Word2Vec and TF-IDF.",
		"I scraped text from the web to gather more training data.",
		"I integrated the models into a conversational chatbot on Skype for business to help with problem resolution."],
		"Full Stack Developer for ExamOptimum":
			["Summer 2019 - Present",
			"I helped optimize scheduling by reducing exam date conflicts based on student enrollment.",
			"This application is developed in Python using a Flask framework and SQL-Lite to communicate with servers.",
			"This application is widely used within the Mellon College of Science and is expanding its user base."],
			"Teaching Assistant for 15-112: Fundamentals of Programming":
			["Fall 2018, Spring 2019, Summer 2019, Fall 2019, Summer 2020",
			"I was a competitively chosen TA for an introductory coding class taught in Python.",
			"Responsibilities included teaching a weekly recitation of ~31 students, two one-hour review sessions a week, and weekly office hours.",
			"It was my duty to monitor struggling students and reach out to them for extra help if needed."]}

	var d3 = {"Computer Human Interaction: Mobile Privacy Security Lab — Dr. Jason Hong (CMU)":
			["Spring 2020, Fall 2020",
			"I tested various machine learning models for the purpose of image captioning.",
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
			
			<Card style={{display: "table", marginLeft: "20%", marginRight:"20%", marginTop: "2%"}}>
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
			<Card style={{display: "table", marginLeft: "20%", marginRight:"20%", marginTop: "2%"}}>
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
			<Button style={{position:'absolute', right:"5%", top:"5%"}} variant="light" >
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
		<div style={styles} id="home">
			<Resume/>
			<Typist avgTypingDelay={250} cursor={{show:false}} id="typing">
				<span style={{fontSize:"9vw", borderBottom:"1px solid black", 
					whiteSpace:"pre", position: 'absolute', left: '50%', 
					top: '35%', transform: 'translate(-50%, -50%)',
					color: '#f2f2f2'
					}}> AJ Druck </span>
				</Typist>

			<div style={{cursor:"pointer", position: 'absolute', bottom:"0%", left: "87%",
						 backgroundColor:"black", width:"8%", height:"15%",
						 display:"flex", justifyContent:"center"}}
						 onClick={handleImageClick}>
				<img src={arrow}  class="moveArrow"
				style={{width:"50%", height:"50%"}}/>
			</div>
			
		</div>);
}

function scrollTo(event){
	var name = event.target.innerHTML;
	if (name != "Skills"){
		name = name[0].toLowerCase() + name.slice(1)
	}
	document.getElementById(name).scrollIntoView({'behavior':"smooth"})
}

function App(){
	const sectionRefs = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
	  ];
	
	const activeSection = useScrollSpy({
		sectionElementRefs: sectionRefs,
		offsetPx: -80,
	  });
	

	return (
		<div>
			<div>
			<nav style={{cursor: "pointer", lineHeight:'20px', textAlign:'center', position:'fixed', top:"15%", left:"3%"}} className="App-navigation">
				<div onClick={scrollTo} style={{paddingTop:"7%", fontSize:"14px", left: "20%", width:"110px", height:"80px", background:"black"}} className={activeSection === 0 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Home</div>
				<div onClick={scrollTo} style={{fontSize:"15px",left: "20%", width:"110px", height:"80px", background:"black"}} className={activeSection === 1 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Profile</div>
				<div onClick={scrollTo} style={{fontSize:"15px",left: "20%", width:"110px", height:"80px", background:"black"}} className={activeSection === 2 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Experiences</div>
				<div onClick={scrollTo} style={{fontSize:"15px",left: "20%", width:"110px", height:"80px", background:"black"}} className={activeSection === 3 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Skills</div>
				<div onClick={scrollTo} style={{fontSize:"15px",left: "20%", width:"110px", height:"80px", background:"black"}} className={activeSection === 4 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Projects</div>
				<div onClick={scrollTo} style={{paddingBottom:"7%", fontSize:"14px",left: "20%", width:"110px", background:"black"}} className={activeSection === 5 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Contact</div>
			</nav>
			</div>
			<section className="App-section" ref={sectionRefs[0]}>
				<HomeScreen />
				</section>
			<section className="App-section" ref={sectionRefs[1]}>
				<Profile />
			</section>
			<section className="App-section" ref={sectionRefs[2]}>
				<Experiences />
			</section>
			<section className="App-section" ref={sectionRefs[3]}>
				<Skills />
			</section>
			<section className="App-section" ref={sectionRefs[4]}>
				<Projects />
			</section>
			<section className="App-section" ref={sectionRefs[5]}>
				<Contact />
			</section>
		</div>)
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
