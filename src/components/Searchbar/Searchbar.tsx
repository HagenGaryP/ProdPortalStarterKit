import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

/**
 * Searchbar component
 *
 */

const Searchbar: React.FC = () => {

  const [searchValue, setSearchValue] = React.useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }

  // search submit should take user to products page for the value searched
  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchValue.trim()) {
      // TODO: dispatch an action to filter state of products, and potentially navigate to page, and so on.
      setSearchValue('');
    }
  }

  return (
    <Container className="d-flex justify-content-lg-end justify-content-center pe-5">
      <Form className="d-flex" onSubmit={handleSearchSubmit}>
        <Form.Control
          type="search"
          placeholder="Search"
          className=""
          aria-label="Search"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <Button className='primary' type="submit">
          Search
        </Button>
      </Form>
    </Container>
  );
}

export default Searchbar;
