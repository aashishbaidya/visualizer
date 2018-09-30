import React from 'react'
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Modal from 'react-bootstrap/lib/Modal';
import GenerateChartComponents from './generateChartComponents';
const edit_widget = (widget) => {
	switch (widget.type_id){
		case 1:
		const content = <GenerateChartComponents widget={widget} />
		return content
		
		default:
		return (<div></div>)

	}
}

const EditModal = (props) => (

      <ButtonToolbar>
        <Modal
          show={props.visible}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
          size = "lg"
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title">
              Edit Widget
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {edit_widget(props.edit_widget)}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.edit_Finish}>Done</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
	)

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({add_widget}, dispatch);
// }

export default EditModal