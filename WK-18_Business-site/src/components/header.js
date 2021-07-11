import React from "react";

export default (props) => (
  <>
    <Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/services">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/contact">Active</Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
  </>
);
//Header  - Use the React Bootstrap header here (hint: also LINK tags>
