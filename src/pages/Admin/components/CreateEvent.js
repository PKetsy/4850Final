import eventsStore from '../stores/eventsStore';
import authStore from '../stores/authStore';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePickerFormControl(props) {
  return (
    <Form.Group as={Col}>
      <Form.Label>{props.label}</Form.Label>
      <DatePicker
        name={props.name}
        value={props.value}
        placeholderText={props.placeholderText}
        onChange={(date) => props.onChange(date, props.name)}
        dateFormat="MM/dd/yyyy"
        selected={props.value ? new Date(props.value) : null}
        autoComplete="off"
      />
    </Form.Group>
  );
}

export default function CreateEvent() {
  const storeAuth = authStore();
  const store = eventsStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await storeAuth.logout();
    navigate('/admin/logout');
  };

  return (
    <div style={{ width: '90%', margin: 'auto auto', textAlign: 'center' }}>
      <h1>Create a event</h1>
      <Form onSubmit={store.createEvent}>
        <Form.Group>
          <Form.Control
            name="title"
            value={store.createForm.title}
            placeholder="Title"
            style={{ marginBottom: '1rem' }}
            onChange={store.updateCreateFormField}
            autoComplete="off"
          />
          <DatePickerFormControl
            label="Start of Event"
            name="startDate"
            value={store.createForm.startDate}
            onChange={store.handleDateChange}
          />

          <DatePickerFormControl
            label="End of Event"
            name="endDate"
            value={store.createForm.endDate}
            onChange={store.handleDateChange}
          />
          <Form.Control
            name="description"
            value={store.createForm.description}
            placeholder="Description"
            style={{ marginBottom: '1rem' }}
            onChange={store.updateCreateFormField}
            autoComplete="off"
          />

          {store.createForm.eventItems.map((item, index) => (
            <div key={index}>
              <Form.Control
                name={'itemName'}
                value={store.createForm.eventItems[index].itemName}
                placeholder={`Item ${index + 1} Name`}
                style={{ marginBottom: '1rem' }}
                onChange={(e) => {
                  store.handleInputChange(e, index, 'createForm');
                }}
              />
              <Form.Control
                name={'itemPrice'}
                type="number"
                value={store.createForm.eventItems[index].itemPrice}
                placeholder={`Item ${index + 1} Price`}
                style={{ marginBottom: '2rem' }}
                onChange={(e) => {
                  store.handleInputChange(e, index, 'createForm');
                }}
              />
              {index === store.createForm.eventItems.length - 1 && (
                <Button
                  variant="primary"
                  onClick={() => store.handleAddItem()}
                  style={{ width: '50%', marginBottom: '1rem' }}
                >
                  ADD ITEM
                </Button>
              )}
            </div>
          ))}
        </Form.Group>

        <Button
          style={{ width: '50%', marginBottom: '1rem' }}
          variant="success"
          type="submit"
        >
          CREATE EVENT
        </Button>
      </Form>
      <Button
        style={{ width: '50%', marginBottom: '1rem' }}
        variant="outline-dark"
        onClick={() => navigate(-1)}
      >
        RETURN
      </Button>
      <Button
        style={{ width: '50%', marginBottom: '1rem' }}
        variant="danger"
        onClick={handleLogout}
      >
        LOG OUT
      </Button>
      <br />
      <br />
      <br />
      <a
        href="https://docs.google.com/document/d/1R6RP9nxTAGJHMKezv5BuVAhkGZzikRHbAX6hDAa8VBk/edit#bookmark=id.50386jfw4hh6"
        className="btn btn-link btn-lg active"
        role="button"
        aria-pressed="true"
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '33%',
        }}
      >
        Create Event Help
      </a>
    </div>
  );
}
