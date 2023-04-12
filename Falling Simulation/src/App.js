import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import { Engine, Render, Runner, World, Bodies, Constraint, Body } from 'matter-js';

const objects = [
  { name: 'Empire State Building', height: 381 },
  { name: 'Mount Everest', height: 8848 },
  { name: 'Earth', height: 6371000 },
  { name: 'Jupiter', height: 69911000 },
  { name: 'Sun', height: 696340000 },
];

const calculateFallingTime = (height) => {
  const g = 9.81;
  return Math.sqrt((2 * height) / g);
};

const Ragdoll = ({ fallingTime, selectedObject }) => {
  const canvasRef = useRef(null);

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

  const updateBackground = async () => {
    const backgroundImage = selectedObject ? await getBackgroundImage(selectedObject.name) : 'transparent';
    return backgroundImage;
  };

  useEffect(() => {
    const engine = Engine.create();

    if (!canvasRef.current) {
      return;
    }

    const initialize = async () => {
      const background = await updateBackground();

      const render = Render.create({
        canvas: canvasRef.current,
        engine: engine,
        options: {
          wireframes: false,
          background: background,
          width: 400,
          height: 400,
        },
      });

      // ... (rest of the useEffect code)
    };

    initialize();

  }, [canvasRef, fallingTime, selectedObject]);

  return <canvas ref={canvasRef} width="400" height="400" />;
};

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
