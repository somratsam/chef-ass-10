import React from 'react';
import { Accordion, Container, Button } from 'react-bootstrap';
import { PDFDownloadLink, Page, Text, Document } from '@react-pdf/renderer';

const BlogDocument = () => (
    <Document>
        <Page>
            <Text>
                <h1>hello</h1>
            </Text>
        </Page>
    </Document>
);

const Blog = () => {
    return (
        <Container style={{ margin: '5rem' }}>
            <div className='fw-bold text-center text-light' style={{ margin: '5rem' }}>
                <h1>Q & A session</h1>
                <PDFDownloadLink document={<BlogDocument />} fileName="blog.pdf">
                    {({ loading }) =>
                        loading ? 'Loading document...' : <Button variant="light rounded-5 text-dark fw-bold">Download PDF</Button>
                    }
                </PDFDownloadLink>
            </div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. What is the differences between uncontrolled and controlled components.?</Accordion.Header>
                    <Accordion.Body>
                        <strong>Uncontrolled Components:</strong> In uncontrolled components, the form data is managed by the DOM itself. The component does not keep track of the input's state. <br />
                        <strong>Controlled Components:</strong> In controlled components, the form data is managed by the component's state. The component keeps track of the input's state and updates it accordingly.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2.How to validate React props using PropTypes?</Accordion.Header>
                    <Accordion.Body>
                        In React, PropTypes is a library used for type-checking the props passed to components. It provides a way to specify the expected types and structure of props, allowing you to catch potential errors and bugs during development.
                        PropTypes supports various types such as string, number, boolean, array, object, and more. It also allows you to define custom validation functions and specify default values for props.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>3. What is the difference between nodejs and express js.?</Accordion.Header>
                    <Accordion.Body>
                        <strong>Node.js: </strong>

                        Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser.
                        It is built on the V8 JavaScript engine and provides an event-driven, non-blocking I/O model, making it efficient for handling concurrent requests. <br />
                        <strong> Express.js: </strong>

                        Express.js is a minimal and flexible web application framework built on top of Node.js. It provides a set of features and tools for building web applications and APIs.
                        Express.js simplifies the process of building web servers by providing a high-level abstraction over the lower-level HTTP functionality of Node.js.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>4. What is a custom hook, and why will you create a custom hook?
                    </Accordion.Header>
                    <Accordion.Body>
                        A custom hook in React is a JavaScript function that starts with the prefix "use" and allows you to reuse stateful logic between different components. It enables you to extract common logic from components and share it across your application.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blog;
