import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card, Dropdown } from 'react-bootstrap';
import { Engine, Render, Runner, World, Bodies, Constraint, Body } from 'matter-js';
import { useRef, useEffect } from 'react';


const objects = [
  { name: 'Empire State Building', height: 381 },
  { name: 'Mount Everest', height: 8848 },
  { name: 'Earth', height: 6371000 },
  { name: 'Jupiter', height: 69911000 },
  { name: 'Sun', height: 696340000 },
];

const calculateFallingTime = (height) => {
  const g = 9.81; // Acceleration due to gravity (m/s^2)
  return Math.sqrt((2 * height) / g);
};

const Ragdoll = ({ fallingTime, selectedObject }) => {
  const canvasRef = useRef(null);

function App() {
  const [height, setHeight] = useState(0);
  const [fallingTime, setFallingTime] = useState(0);
  const [selectedObject, setSelectedObject] = useState(null);

  const handleObjectSelect = (obj) => {
    setSelectedObject(obj);
    setHeight(obj.height);
    setFallingTime(calculateFallingTime(obj.height));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFallingTime(calculateFallingTime(height));
  };

  const getBackgroundImage = async (objectName) => {
    const clientId = 'pTRvsFakk9USuqySooL46wqLwzxyi1CzjOaaOl0zR1k';
    let query = '';
  
    switch (objectName) {
      case 'Empire State Building':
        query = 'empire+state+building';
        break;
      case 'Mount Everest':
        query = 'mount+everest';
        break;
      case 'Earth':
        query = 'earth';
        break;
      case 'Jupiter':
        query = 'jupiter';
        break;
      case 'Sun':
        query = 'sun';
        break;
      default:
        return 'transparent';
    }
  
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${clientId}&query=${query}`);
      const data = await response.json();
      return data.urls.small;
    } catch (error) {
      console.error('Error fetching Unsplash image:', error);
      return 'transparent';
    }
  };
  
  

  
    useEffect(() => {
      const engine = Engine.create();

      if (!canvasRef.current) {
        return;
      }

      const updateBackground = async () => {
        const backgroundImage = selectedObject ? await getBackgroundImage(selectedObject.name) : 'transparent';

      const render = Render.create({
        canvas: canvasRef.current,
        engine: engine,
        options: {
          wireframes: false,
          background: selectedObject ? getBackgroundImage(selectedObject.name) : 'transparent',
          width: 400,
          height: 400,
        },
      });
     

      const runner = Runner.create();
      Runner.run(runner, engine);
  
     // Slow down the framerate by setting a higher delta value (in milliseconds)
      runner.delta = 1000 / 10; // 10 frames per second
  
      // Ragdoll parts
      const head = Bodies.circle(200, 0, 15, { render: { fillStyle: 'blue' } });
      const torso = Bodies.rectangle(200, 50, 20, 50, { render: { fillStyle: 'green' } });
      const leftUpperArm = Bodies.rectangle(180, 30, 40, 10, { render: { fillStyle: 'red' } });
      const rightUpperArm = Bodies.rectangle(220, 30, 40, 10, { render: { fillStyle: 'red' } });
      const leftLowerArm = Bodies.rectangle(160, 60, 40, 10, { render: { fillStyle: 'orange' } });
      const rightLowerArm = Bodies.rectangle(240, 60, 40, 10, { render: { fillStyle: 'orange' } });
      const leftUpperLeg = Bodies.rectangle(190, 90, 10, 40, { render: { fillStyle: 'purple' } });
      const rightUpperLeg = Bodies.rectangle(210, 90, 10, 40, { render: { fillStyle: 'purple' } });
      const leftLowerLeg = Bodies.rectangle(190, 130, 10, 40, { render: { fillStyle: 'yellow' } });
      const rightLowerLeg = Bodies.rectangle(210, 130, 10, 40, { render: { fillStyle: 'yellow' } });
  
      const headToTorso = Constraint.create({ bodyA: head, bodyB: torso, length: 0, stiffness: 0.6 });
      const leftUpperArmToTorso = Constraint.create({ bodyA: leftUpperArm, bodyB: torso, length: 0, stiffness: 0.6 });
      const rightUpperArmToTorso = Constraint.create({ bodyA: rightUpperArm, bodyB: torso, length: 0, stiffness: 0.6 });
      const leftLowerArmToTorso = Constraint.create({ bodyA: leftUpperArm, bodyB: leftLowerArm, length: 0, stiffness: 0.6 });
      const rightLowerArmToTorso = Constraint.create({ bodyA: rightUpperArm, bodyB: rightLowerArm, length: 0, stiffness: 0.6 });
      const leftUpperLegToTorso = Constraint.create({ bodyA: leftUpperLeg, bodyB: torso, length: 0, stiffness: 0.6 });
      const rightUpperLegToTorso = Constraint.create({ bodyA: rightUpperLeg, bodyB: torso, length: 0, stiffness: 0.6 });
      const leftLowerLegToUpperLeg = Constraint.create({ bodyA: leftUpperLeg, bodyB: leftLowerLeg, length: 0, stiffness: 0.6 });
      const rightLowerLegToUpperLeg = Constraint.create({ bodyA: rightUpperLeg, bodyB: rightLowerLeg, length: 0, stiffness: 0.6 });
  
      World.add(engine.world, [
        head,
        torso,
        leftUpperArm,
        rightUpperArm,
        leftLowerArm,
        rightLowerArm,
        leftUpperLeg,
        rightUpperLeg,
        leftLowerLeg,
        rightLowerLeg,
        headToTorso,
        leftUpperArmToTorso,
        rightUpperArmToTorso,
        leftLowerArmToTorso,
        rightLowerArmToTorso,
        leftUpperLegToTorso,
        rightUpperLegToTorso,
        leftLowerLegToUpperLeg,
        rightLowerLegToUpperLeg,
      ]);
      
      Engine.run(engine);
      Render.run(render);
      
      const timer = setTimeout(() => {
        Body.setVelocity(head, { x: 0, y: 10 });
      }, fallingTime * 1000);

      updateBackground();

      return () => {
        clearTimeout(timer);
        Render.stop(render);
        Runner.stop(runner);
        World.clear(engine.world);
        Engine.clear(engine);
      };
      
      updateBackgroundAndInitialize();

    }, [canvasRef, fallingTime, selectedObject]);
  
    return <canvas ref={canvasRef} width="400" height="400" />;
  };
  
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-5">How long is this gonna take.</h1>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="object">
              <Form.Label>Select an Object</Form.Label>
              <Dropdown onSelect={(key) => handleObjectSelect(objects[key])}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {selectedObject ? selectedObject.name : 'Select an Object'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {objects.map((obj, index) => (
                    <Dropdown.Item key={index} eventKey={index}>
                      {obj.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
            <Form.Group controlId="height">
              <Form.Label>Fall Height (meters)</Form.Label>
              <Form.Control
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Calculate
            </Button>
          </Form>
        </Col>
        <Col>
        <Ragdoll fallingTime={fallingTime} selectedObject={selectedObject} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;


