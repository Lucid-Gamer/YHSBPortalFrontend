import React from 'react'
import { Form } from 'react-bootstrap'

const TransactionPage = () => {
  return (
    <div>
        <Form>
            <Form.Group>
                <Form.Label className='form-label text-red-500'>Description</Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
        </Form>
    </div>
  )
}

export default TransactionPage